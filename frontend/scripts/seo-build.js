/* eslint-disable no-console */
/**
 * seo-build.js — Static per-route SEO HTML generator (Node-only, no browser).
 *
 * Why this exists:
 *   The Qloud site is a React SPA. Without this step, EVERY URL serves
 *   the same homepage <title>, <meta description>, canonical and empty
 *   <div id="root">. Googlebot reads that shell before JS executes, which
 *   slows indexing and dilutes ranking signals.
 *
 * What it does (no Puppeteer, runs anywhere — Vercel, GitHub Actions, local):
 *   1. Reads /build/index.html (CRA output) as a template
 *   2. Reads /build/sitemap.xml for the canonical route list
 *   3. Extracts per-slug SEO data (metaTitle/metaDescription/title/description)
 *      from the existing page source files (ServicePage.jsx, LocationPage.jsx,
 *      BlogArticle.jsx) via regex — no JS evaluation needed
 *   4. For each route, writes /build/<route>/index.html with:
 *        - Correct <title>
 *        - Correct <meta name="description">
 *        - Correct canonical, OG and Twitter tags
 *        - Route-specific BreadcrumbList + page-type schema
 *        - A <noscript> content block (H1 + intro + service mentions + NAP)
 *          so Googlebot reads real content immediately, even before React runs
 *
 *   React then hydrates the page normally — users see the full app.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BUILD_DIR = path.join(ROOT, "build");
const SRC_DIR = path.join(ROOT, "src", "pages");
const SITEMAP_PATH = path.join(BUILD_DIR, "sitemap.xml");
const TEMPLATE_PATH = path.join(BUILD_DIR, "index.html");

const SITE_URL = "https://www.qloudsmarthomes.com";
const BRAND = "Qloud Tech";
const PHONE = "+91-7204746043";
const EMAIL = "contact@qloudsmarthomes.com";
const ADDRESS = "First Floor 11, 102/1, above Sufyan, Geddalahalli, Rammana Layout, Kothanur, Byrathi, Bangalore 560077";
const DEFAULT_OG = "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/h7afabwe_cropped-Untitled-design-6.png";

// --------------------------------------------------------------------------
// Static (non-dynamic) routes meta — covers all top-level pages
// --------------------------------------------------------------------------
const STATIC_ROUTES = {
  "/": {
    title: "Qloud Tech | Home Theatre & Smart Home Automation in Bangalore",
    description:
      "Bangalore's #1 Home Theatre & Smart Home Automation specialists. Dolby Atmos cinema rooms, smart lighting, CCTV, digital locks. 100+ installs, 4.9★ rated. Free consultation.",
    h1: "Bangalore's #1 Home Theatre & Smart Home Automation Specialists",
    intro:
      "Qloud Tech designs and installs premium home theatres (Dolby Atmos 5.1.2 / 7.1.2 / 9.1.4), smart home automation, smart switches, CCTV security systems, digital door locks, video door phones and motorised gates across Bangalore — including Whitefield, Koramangala, Indiranagar, HSR Layout, JP Nagar, Sarjapur, Electronic City and Yelahanka.",
    type: "home"
  },
  "/services": {
    title: "Our Services | Home Theatre, Smart Home & Security | Qloud Tech",
    description:
      "Explore Qloud Tech services: home theatre installation, smart home automation, smart switches, CCTV, digital door locks, video door phones, motorised gates & networking in Bangalore.",
    h1: "Home Theatre & Smart Home Services in Bangalore",
    intro:
      "From Dolby Atmos cinema rooms to fully automated smart homes, Qloud Tech delivers turnkey installation across Bangalore. Browse our specialised services below.",
    type: "services-index"
  },
  "/packages": {
    title: "Home Theatre & Smart Home Packages Bangalore | Pricing | Qloud Tech",
    description:
      "Home Theatre packages starting ₹2.29L (Essential), ₹6.99L (Budget), ₹9.99L (Silver), ₹12.39L (Gold). Transparent pricing with Dolby Atmos, projector & acoustic treatment.",
    h1: "Home Theatre & Smart Home Packages",
    intro:
      "Choose from four transparent packages — Essential, Budget, Silver and Gold — each with a clear bill of materials, Dolby Atmos configuration and warranty. Customisation available for every budget.",
    type: "packages"
  },
  "/process": {
    title: "Our Installation Process | Home Theatre Setup Bangalore | Qloud Tech",
    description:
      "From free consultation to lifetime support — see Qloud Tech's 6-step home theatre & smart home installation process. Design, BOM, acoustic treatment, calibration & handover.",
    h1: "Our 6-Step Home Theatre & Smart Home Installation Process",
    intro:
      "Every project follows a proven workflow: discovery, design, BOM approval, civil/electrical readiness, installation, calibration and handover — backed by lifetime support.",
    type: "process"
  },
  "/projects": {
    title: "Our Projects & Portfolio | Home Theatre Installations Bangalore | Qloud Tech",
    description:
      "Browse 100+ completed home theatre and smart home projects across Bangalore — villas, apartments and bungalows. Before/after photos, room sizes, configurations and budgets.",
    h1: "Completed Home Theatre & Smart Home Projects in Bangalore",
    intro:
      "A portfolio of real installations — from compact 150 sq ft apartment cinemas in HSR Layout to 400+ sq ft 7.1.2 Atmos villas in Whitefield. Each project links to the configuration and brands used.",
    type: "projects"
  },
  "/contact": {
    title: "Contact Qloud Tech | Home Theatre & Smart Home Bangalore",
    description:
      "Talk to Qloud Tech for a free home theatre or smart home consultation in Bangalore. Call +91 72047 46043, WhatsApp, email contact@qloudsmarthomes.com or visit our Kothanur office.",
    h1: "Contact Qloud Tech — Free Consultation",
    intro:
      "Call +91 72047 46043, WhatsApp us, email contact@qloudsmarthomes.com, or visit our Kothanur (Byrathi) office. We respond within 24 hours and offer free on-site consultations across Bangalore.",
    type: "contact"
  },
  "/blog": {
    title: "Blog | Smart Home & Home Theatre Guides | Qloud Tech",
    description:
      "Expert guides on home theatre setup, Dolby Atmos, smart home automation, CCTV, smart locks and more — written by Qloud Tech's Bangalore installation specialists.",
    h1: "Smart Home & Home Theatre Buying Guides",
    intro:
      "Long-form, vendor-neutral guides from our installation team — covering Dolby Atmos configurations, projector vs TV, Yale vs Samsung smart locks, Alexa vs Google Home and more.",
    type: "blog-index"
  }
};

// --------------------------------------------------------------------------
// Extract dynamic page data from JSX files via regex
// --------------------------------------------------------------------------
function extractSlugBlocks(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const src = fs.readFileSync(filePath, "utf-8");
  const out = {};

  // Match top-level data entries:  'slug-name': { ... metaTitle: '...', metaDescription: '...', title: '...', description: '...', ... },
  // We do this by finding each `'slug': {` then balancing braces.
  const keyRe = /^\s*['"]([a-z0-9-]+)['"]\s*:\s*\{/gm;
  let match;
  while ((match = keyRe.exec(src)) !== null) {
    const slug = match[1];
    let i = match.index + match[0].length - 1; // points at '{'
    let depth = 1;
    let inStr = null;
    let escaped = false;
    let start = i + 1;
    i++;
    while (i < src.length && depth > 0) {
      const c = src[i];
      if (inStr) {
        if (escaped) escaped = false;
        else if (c === "\\") escaped = true;
        else if (c === inStr) inStr = null;
      } else {
        if (c === '"' || c === "'" || c === "`") inStr = c;
        else if (c === "{") depth++;
        else if (c === "}") depth--;
      }
      i++;
    }
    const body = src.slice(start, i - 1);

    const get = (field) => {
      const re = new RegExp(`${field}\\s*:\\s*['"\`]([^'"\`\\n]+?)['"\`]`);
      const m = body.match(re);
      return m ? m[1] : null;
    };

    const metaTitle = get("metaTitle");
    const metaDescription = get("metaDescription");
    const title = get("title");
    const description = get("description");
    const service = get("service");
    const location = get("location");
    const category = get("category");
    const author = get("author");
    const date = get("date");

    if (metaTitle || title) {
      out[slug] = {
        metaTitle,
        metaDescription,
        title,
        description,
        service,
        location,
        category,
        author,
        date
      };
    }
  }
  return out;
}

// --------------------------------------------------------------------------
// Build per-route meta from dynamic JSX data
// --------------------------------------------------------------------------
function buildDynamicMeta() {
  const services = extractSlugBlocks(path.join(SRC_DIR, "ServicePage.jsx"));
  const locations = extractSlugBlocks(path.join(SRC_DIR, "LocationPage.jsx"));
  const blog = extractSlugBlocks(path.join(SRC_DIR, "BlogArticle.jsx"));

  const meta = {};

  for (const [slug, data] of Object.entries(services)) {
    meta[`/services/${slug}`] = {
      title: data.metaTitle || `${data.title} | ${BRAND}`,
      description: data.metaDescription || data.description || "",
      h1: data.title,
      intro: data.description || "",
      type: "service",
      slug,
      breadcrumbs: [
        { name: "Home", url: SITE_URL },
        { name: "Services", url: `${SITE_URL}/services` },
        { name: data.title, url: `${SITE_URL}/services/${slug}` }
      ]
    };
  }

  for (const [slug, data] of Object.entries(locations)) {
    meta[`/${slug}`] = {
      title: data.metaTitle || `${data.title} | ${BRAND}`,
      description: data.metaDescription || data.description || "",
      h1: data.title,
      intro: data.description || "",
      type: "location",
      service: data.service,
      location: data.location,
      slug,
      breadcrumbs: [
        { name: "Home", url: SITE_URL },
        { name: data.title, url: `${SITE_URL}/${slug}` }
      ]
    };
  }

  for (const [slug, data] of Object.entries(blog)) {
    meta[`/blog/${slug}`] = {
      title: data.metaTitle || `${data.title} | ${BRAND} Blog`,
      description: data.metaDescription || data.description || "",
      h1: data.title,
      intro: data.description || data.metaDescription || "",
      type: "article",
      category: data.category,
      author: data.author || `${BRAND} Team`,
      date: data.date,
      slug,
      breadcrumbs: [
        { name: "Home", url: SITE_URL },
        { name: "Blog", url: `${SITE_URL}/blog` },
        { name: data.title, url: `${SITE_URL}/blog/${slug}` }
      ]
    };
  }

  return meta;
}

// --------------------------------------------------------------------------
// Schema builders per type
// --------------------------------------------------------------------------
function breadcrumbSchema(items) {
  if (!items || !items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
}

function articleSchema(meta, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.h1,
    description: meta.description,
    author: { "@type": "Organization", name: meta.author || BRAND },
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: { "@type": "ImageObject", url: DEFAULT_OG }
    },
    datePublished: meta.date || "2024-01-01",
    dateModified: meta.date || "2024-12-15",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: DEFAULT_OG,
    articleSection: meta.category || "Smart Home"
  };
}

function serviceSchema(meta, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: meta.h1,
    name: meta.h1,
    description: meta.description,
    provider: {
      "@type": "LocalBusiness",
      name: BRAND,
      telephone: PHONE,
      email: EMAIL,
      address: ADDRESS,
      url: SITE_URL
    },
    areaServed: { "@type": "City", name: "Bangalore" },
    url
  };
}

function localBusinessSchema(meta, url) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BRAND} — ${meta.h1}`,
    description: meta.description,
    telephone: PHONE,
    email: EMAIL,
    url,
    image: DEFAULT_OG,
    address: {
      "@type": "PostalAddress",
      streetAddress: "First Floor 11, 102/1, above Sufyan, Geddalahalli, Rammana Layout, Kothanur, Byrathi",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560077",
      addressCountry: "IN"
    },
    areaServed: { "@type": "City", name: meta.location || "Bangalore" },
    priceRange: "₹₹",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200" }
  };
}

// --------------------------------------------------------------------------
// Template manipulation helpers
// --------------------------------------------------------------------------
function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
}

function replaceMeta(html, name, content, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  const re = new RegExp(`<meta\\s+${attr}="${name}"[^>]*>`);
  const tag = `<meta ${attr}="${name}" content="${escapeHtml(content)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  // Inject before </head>
  return html.replace("</head>", `        ${tag}\n    </head>`);
}

function replaceCanonical(html, url) {
  return html.replace(
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${url}" />`
  );
}

function injectBeforeHeadClose(html, snippet) {
  return html.replace("</head>", `${snippet}\n    </head>`);
}

function injectIntoRoot(html, snippet) {
  // Place SEO fallback content INSIDE <div id="root"></div>.
  // React's createRoot().render() clears the container on mount, so this
  // is visible only during the brief load (or to crawlers that don't run JS),
  // and never produces a hydration mismatch.
  if (html.includes('<div id="root"></div>')) {
    return html.replace('<div id="root"></div>', `<div id="root">${snippet}</div>`);
  }
  if (html.includes('<div id="root">')) {
    return html.replace('<div id="root">', `<div id="root">${snippet}`);
  }
  return html.replace("<body>", `<body>\n${snippet}`);
}

// Build the SEO content block — visible HTML that React replaces on mount.
function buildSeoFallback(meta, url) {
  const breadcrumbs = (meta.breadcrumbs || [])
    .map((b, i, arr) =>
      i === arr.length - 1
        ? `<span>${escapeHtml(b.name)}</span>`
        : `<a href="${b.url}">${escapeHtml(b.name)}</a> › `
    )
    .join("");

  // Inline styles keep this self-contained and avoid layout shift before CSS loads.
  return `<div id="seo-content" style="max-width:960px;margin:0 auto;padding:24px;color:#cbd5e1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;">
  ${breadcrumbs ? `<nav aria-label="Breadcrumb" style="font-size:13px;color:#94a3b8;margin-bottom:16px;">${breadcrumbs}</nav>` : ""}
  <h1 style="color:#22d3ee;font-size:28px;line-height:1.25;margin:0 0 12px;">${escapeHtml(meta.h1)}</h1>
  <p style="margin:0 0 16px;">${escapeHtml(meta.intro)}</p>
  <h2 style="color:#e2e8f0;font-size:20px;margin:24px 0 8px;">About ${BRAND}</h2>
  <p style="margin:0 0 16px;">${BRAND} is Bangalore's leading home theatre and smart home automation specialist with 100+ completed installations and a 4.9★ rating from 200+ customers. We design, supply and install Dolby Atmos home theatres, smart lighting, CCTV security systems, digital door locks, video door phones, motorised gates and structured networking across Bangalore — including Whitefield, Koramangala, Indiranagar, HSR Layout, JP Nagar, Jayanagar, Sarjapur, Electronic City, Yelahanka, Hebbal, Marathahalli and Banashankari.</p>
  <h2 style="color:#e2e8f0;font-size:20px;margin:24px 0 8px;">Why Choose ${BRAND}</h2>
  <ul style="margin:0 0 16px;padding-left:20px;">
    <li>100+ home theatres and smart homes installed since 2017</li>
    <li>Vendor-neutral — we work with JBL, Denon, Yamaha, Sony, Epson, BenQ, KEF, Yale, Samsung, Hikvision, BuildTrack and more</li>
    <li>Transparent packages from ₹2.29L (Essential) to ₹12.39L (Gold)</li>
    <li>Lifetime technical support and 5-year speaker warranty</li>
    <li>Free on-site consultation across Bangalore</li>
  </ul>
  <h2 style="color:#e2e8f0;font-size:20px;margin:24px 0 8px;">Explore</h2>
  <p style="margin:0 0 16px;"><a href="${SITE_URL}/services" style="color:#22d3ee;">Browse services</a> · <a href="${SITE_URL}/packages" style="color:#22d3ee;">View packages</a> · <a href="${SITE_URL}/projects" style="color:#22d3ee;">Recent projects</a> · <a href="${SITE_URL}/blog" style="color:#22d3ee;">Read our guides</a> · <a href="${SITE_URL}/contact" style="color:#22d3ee;">Contact us</a></p>
  <h2 style="color:#e2e8f0;font-size:20px;margin:24px 0 8px;">Contact</h2>
  <address style="font-style:normal;margin:0 0 16px;">
    ${BRAND}<br />
    ${ADDRESS}<br />
    Phone: <a href="tel:${PHONE}" style="color:#22d3ee;">${PHONE}</a><br />
    Email: <a href="mailto:${EMAIL}" style="color:#22d3ee;">${EMAIL}</a><br />
    Hours: Mon–Sat 09:00–19:00
  </address>
</div>`;
}

// --------------------------------------------------------------------------
// Main
// --------------------------------------------------------------------------
function parseSitemapRoutes(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => {
      try {
        return new URL(m[1].trim()).pathname || "/";
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .filter((p) => !p.endsWith(".xml") && !p.endsWith(".html"));
}

function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`[seo-build] /build not found. Run \`yarn build\` first.`);
    return;
  }
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`[seo-build] index.html not found in /build.`);
    return;
  }
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`[seo-build] sitemap.xml not found in /build.`);
    return;
  }

  const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");
  const routes = parseSitemapRoutes(fs.readFileSync(SITEMAP_PATH, "utf-8"));
  const dynamicMeta = buildDynamicMeta();
  const allMeta = { ...STATIC_ROUTES, ...dynamicMeta };

  console.log(`[seo-build] Generating per-route SEO HTML for ${routes.length} routes`);

  let ok = 0;
  let skipped = 0;
  let warnings = 0;
  const missing = [];

  for (const route of routes) {
    const meta = allMeta[route];
    if (!meta) {
      // Skip — falls back to default SPA index.html
      warnings++;
      missing.push(route);
      continue;
    }

    const url = `${SITE_URL}${route === "/" ? "" : route}`;
    let html = template;

    html = replaceTitle(html, meta.title);
    html = replaceMeta(html, "description", meta.description);
    html = replaceMeta(html, "og:title", meta.title, true);
    html = replaceMeta(html, "og:description", meta.description, true);
    html = replaceMeta(html, "og:url", url, true);
    html = replaceMeta(html, "twitter:title", meta.title, true);
    html = replaceMeta(html, "twitter:description", meta.description, true);
    html = replaceMeta(html, "twitter:url", url, true);
    html = replaceCanonical(html, url);

    // Add route-specific schema (in addition to the global schema already in template)
    const schemas = [];
    const bc = breadcrumbSchema(meta.breadcrumbs);
    if (bc) schemas.push(bc);

    if (meta.type === "article") schemas.push(articleSchema(meta, url));
    else if (meta.type === "service") schemas.push(serviceSchema(meta, url));
    else if (meta.type === "location") schemas.push(localBusinessSchema(meta, url));

    if (schemas.length) {
      const schemaTags = schemas
        .map((s) => `        <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n        </script>`)
        .join("\n");
      html = injectBeforeHeadClose(html, schemaTags);
    }

    html = injectIntoRoot(html, buildSeoFallback(meta, url));

    // Write to /build/<route>/index.html  (root stays as /build/index.html)
    let outDir;
    if (route === "/") {
      outDir = BUILD_DIR;
    } else {
      outDir = path.join(BUILD_DIR, route);
    }
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
    ok++;
    console.log(`[seo-build] ✓ ${route}`);
  }

  console.log(`[seo-build] Done: ${ok} written, ${warnings} routes without metadata (will use SPA fallback)`);
  if (missing.length) {
    console.log(`[seo-build] Missing meta for: ${missing.join(", ")}`);
  }
}

try {
  main();
} catch (err) {
  console.error("[seo-build] Error (non-fatal):", err);
  process.exit(0); // Don't fail the build
}
