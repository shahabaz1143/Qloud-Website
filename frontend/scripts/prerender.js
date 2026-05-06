/* eslint-disable no-console */
/**
 * Prerender — tiny static-site prerenderer for the Qloud SPA.
 *
 * What it does:
 *   1. Reads the list of routes from /public/sitemap.xml
 *   2. Spins up a small static server on the /build directory
 *   3. Launches headless Chromium (puppeteer-core + @sparticuz/chromium)
 *   4. Visits each route, waits for React to mount, captures rendered HTML
 *   5. Writes /build/<route>/index.html so Google sees fully-rendered HTML
 *
 * Runs automatically as `postbuild` after `yarn build`.
 */

const fs = require("fs");
const path = require("path");
const http = require("http");
const handler = require("serve-handler");

// Auto-detect serverless environment (Vercel, AWS Lambda, etc.)
// On serverless: use @sparticuz/chromium + puppeteer-core (system libs bundled)
// On dev/local:  use full puppeteer (manages its own Chrome)
const IS_SERVERLESS = !!process.env.VERCEL || !!process.env.AWS_LAMBDA_FUNCTION_VERSION;

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const SITEMAP_PATH = path.join(BUILD_DIR, "sitemap.xml");
const PORT = 4567;

async function launchBrowser() {
  if (IS_SERVERLESS) {
    const chromium = require("@sparticuz/chromium");
    const puppeteer = require("puppeteer-core");
    return puppeteer.launch({
      args: [
        ...chromium.args,
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage"
      ],
      defaultViewport: { width: 1280, height: 800 },
      executablePath: await chromium.executablePath(),
      headless: chromium.headless
    });
  }
  // Local dev path
  const puppeteer = require("puppeteer");
  return puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu"
    ]
  });
}

function parseRoutesFromSitemap(sitemapXml) {
  const matches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  const routes = matches
    .map((m) => m[1].trim())
    .map((url) => {
      try {
        const u = new URL(url);
        return u.pathname || "/";
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    // Skip non-HTML static files
    .filter((p) => !p.endsWith(".xml") && !p.endsWith(".html") || p === "/");
  return Array.from(new Set(routes));
}

async function prerender() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`[prerender] Sitemap not found at ${SITEMAP_PATH}. Skipping.`);
    process.exit(0);
  }

  const sitemap = fs.readFileSync(SITEMAP_PATH, "utf-8");
  const routes = parseRoutesFromSitemap(sitemap);
  console.log(`[prerender] Found ${routes.length} routes to prerender`);

  // Static file server
  const server = http.createServer((req, res) =>
    handler(req, res, {
      public: BUILD_DIR,
      rewrites: [{ source: "/**", destination: "/index.html" }],
      cleanUrls: false
    })
  );
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`[prerender] Static server running at http://localhost:${PORT}`);

  const browser = await launchBrowser();

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    const page = await browser.newPage();
    try {
      // Block heavy / 3rd-party requests for faster crawls
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const reqUrl = req.url();
        // Block external trackers/analytics during prerender
        if (
          reqUrl.includes("googletagmanager.com") ||
          reqUrl.includes("google-analytics.com") ||
          reqUrl.includes("posthog.com") ||
          reqUrl.includes("emergent.sh") ||
          reqUrl.includes("emergentagent.com/scripts/")
        ) {
          return req.abort();
        }
        return req.continue();
      });

      await page.goto(url, { waitUntil: "networkidle0", timeout: 45000 });
      // Give React a moment to inject schema via useEffect
      await new Promise((r) => setTimeout(r, 800));

      // Snapshot rendered HTML
      const html = await page.evaluate(() => {
        // Disable React's hydration warning by removing checksum-sensitive nodes
        return "<!DOCTYPE html>" + document.documentElement.outerHTML;
      });

      // Write to /build/<route>/index.html
      let outDir;
      if (route === "/") {
        outDir = BUILD_DIR;
      } else {
        outDir = path.join(BUILD_DIR, route);
      }
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
      success++;
      console.log(`[prerender] ✓ ${route}`);
    } catch (err) {
      failed++;
      console.warn(`[prerender] ✗ ${route} — ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  await new Promise((resolve) => server.close(resolve));

  console.log(`[prerender] Done: ${success} succeeded, ${failed} failed`);
  if (failed > 0 && success === 0) process.exit(1);
}

prerender().catch((err) => {
  console.error("[prerender] Fatal:", err);
  process.exit(1);
});
