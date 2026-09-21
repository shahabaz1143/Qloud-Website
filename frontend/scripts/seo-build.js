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
const DEFAULT_OG = `${SITE_URL}/qloud-tech-logo-share.png`;
const LOGO_URL = `${SITE_URL}/qloud-tech-logo.webp`;

// --------------------------------------------------------------------------
// Static (non-dynamic) routes meta — covers all top-level pages
// --------------------------------------------------------------------------
const STATIC_ROUTES = {
  "/": {
    title: "Qloud Tech | Home Theatre & Smart Home Automation in Bangalore",
    description:
      "Bangalore & Karnataka's #1 Home Theatre & Smart Home Automation specialists. Dolby Atmos cinema rooms, smart lighting, CCTV, digital locks. 100+ installs, 5★ rated (72 verified reviews). Free consultation.",
    h1: "Bangalore's #1 Home Theatre & Smart Home Automation Specialists",
    intro:
      "Qloud Tech designs and installs premium home theatres (Dolby Atmos 5.1.2 / 7.1.2 / 9.1.4), smart home automation, smart switches, CCTV security systems, digital door locks, video door phones and motorised gates across Bangalore and Karnataka. Customers can also visit Qloud Audio at qloudaudio.com to compare exact AV models, listed prices, add products to cart and build a home theatre quote.",
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
  },
  "/lp/home-theatre-bangalore": {
    title: "Dedicated Home Theatre Installation Bangalore & Karnataka | Dolby Atmos from ₹2.29L | Qloud Tech",
    description:
      "Build a dedicated home theatre across Bangalore & Karnataka — Mysuru, Mangalore, Hubballi, Belgavi and beyond. Purpose-built cinema rooms with Dolby Atmos, 4K projection & premium recliners. Packages from ₹2.29L.",
    h1: "Build Your Dedicated Home Theatre in Bangalore & Karnataka",
    intro:
      "Purpose-built cinema rooms with Dolby Atmos, 4K projection, acoustic treatment and premium recliners. Serving Bangalore and all of Karnataka. Transparent packages from ₹2.29 Lakhs. Free on-site consultation. 5-year warranty. Lifetime support. 100+ dedicated home theatres delivered to 450+ happy families.",
    type: "landing",
    noindex: true // Ad landing page — do not compete with organic /services/home-theatre
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
    const image = get("image");

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
        date,
        image
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
      image: data.image,
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.h1,
    description: meta.description,
    author: { "@type": "Organization", name: meta.author || BRAND },
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: { "@type": "ImageObject", url: LOGO_URL }
    },
    datePublished: meta.date || "2024-01-01",
    dateModified: meta.date || "2024-12-15",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: meta.image || DEFAULT_OG,
    articleSection: meta.category || "Smart Home"
  };
  if (meta.slug === "qloud-audio-by-qloud-tech") {
    schema.about = {
      "@type": "Organization",
      name: "Qloud Audio",
      url: "https://www.qloudaudio.com",
      parentOrganization: {
        "@type": "Organization",
        name: BRAND,
        alternateName: "Qloud Smart Homes",
        url: SITE_URL
      }
    };
    schema.mentions = [
      { "@type": "Organization", name: BRAND, url: SITE_URL },
      { "@type": "Service", name: "Home Theatre Design and Installation", url: `${SITE_URL}/services/home-theatre` },
      { "@type": "ItemList", name: "Home Theatre Models and Prices", url: "https://www.qloudaudio.com/catalog" }
    ];
  }
  return schema;
}

function qloudAudioFaqSchema() {
  const faqs = [
    ["What is Qloud Audio?", "Qloud Audio is Qloud Tech’s dedicated home theatre product catalogue and online quote builder for comparing exact AV models and listed prices, adding products to cart and assembling a room-specific quote."],
    ["Are Qloud Audio and Qloud Tech the same team?", "Yes. Qloud Audio is the product-discovery and quote-building website from Qloud Tech, also known as Qloud Smart Homes. Qloud Tech provides consultation, room design, acoustic treatment, installation, calibration and support."],
    ["Can I build a complete home theatre quote on Qloud Audio?", "Yes. Customers can choose products or use the package builder to create a home theatre quote, then work with Qloud Tech on room suitability, acoustics, installation and final calibration."],
    ["Where does Qloud Tech install home theatres?", "Qloud Tech serves Bangalore and wider Karnataka, including Mysuru, Mangalore, Hubballi-Dharwad, Belgavi, Udupi, Manipal and Tumakuru."]
  ];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text }
    }))
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
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "72" }
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

function injectIntoRoot(html, seoBlock, loader) {
  // Two-layer approach:
  //  1. A visible dark-themed loading screen matches the app background so
  //     users see a branded splash if React hasn't mounted yet (no ugly flash).
  //  2. The SEO content block is positioned off-screen with `aria-hidden`
  //     — invisible to users but fully crawlable by Google.
  // React's createRoot().render() clears the container on mount, replacing
  // both with the real app.
  const combined = `${loader}${seoBlock}`;
  if (html.includes('<div id="root"></div>')) {
    return html.replace('<div id="root"></div>', `<div id="root">${combined}</div>`);
  }
  if (html.includes('<div id="root">')) {
    return html.replace('<div id="root">', `<div id="root">${combined}`);
  }
  return html.replace("<body>", `<body>\n${combined}`);
}

// Branded loading screen — matches the app's dark theme so no white flash
function buildLoader() {
  return `<div id="app-loader" aria-hidden="true" style="position:fixed;inset:0;background:#0a0e1a;display:flex;align-items:center;justify-content:center;z-index:9999;">
  <div style="text-align:center;">
    <div style="width:56px;height:56px;margin:0 auto 20px;border:3px solid rgba(34,211,238,0.15);border-top-color:#22d3ee;border-radius:50%;animation:qloud-spin 900ms linear infinite;"></div>
    <div style="color:#22d3ee;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-weight:600;letter-spacing:2px;font-size:14px;">QLOUD</div>
  </div>
  <style>@keyframes qloud-spin{to{transform:rotate(360deg)}}</style>
</div>`;
}

// SEO content — visually hidden (off-screen) but readable by crawlers.
// This is a well-established, non-cloaking pattern: content is genuine,
// relevant to the page, and shown to both users (via React) and crawlers.
function buildSeoFallback(meta, url) {
  const breadcrumbs = (meta.breadcrumbs || [])
    .map((b, i, arr) =>
      i === arr.length - 1
        ? `<span>${escapeHtml(b.name)}</span>`
        : `<a href="${b.url}">${escapeHtml(b.name)}</a> › `
    )
    .join("");

  const qloudAudioEntityContent = meta.slug === "qloud-audio-by-qloud-tech" ? `
  <section>
    <h2>What Is Qloud Audio?</h2>
    <p>Qloud Audio is the dedicated home theatre product catalogue and online quote builder from Qloud Tech, also known as Qloud Smart Homes. Customers can compare exact projectors, screens, speakers, subwoofers and AV receivers, see listed prices, add products to cart and build a complete home theatre quote at <a href="https://www.qloudaudio.com">qloudaudio.com</a>.</p>
    <h2>How Qloud Audio and Qloud Tech Work Together</h2>
    <p>Qloud Audio handles product discovery, model comparison and online quote building. Qloud Tech provides room consultation, Dolby Atmos design, acoustic treatment, wiring, installation, calibration and ongoing support across Bangalore and Karnataka.</p>
    <h2>Qloud Tech Company Details</h2>
    <p>Qloud Tech has designed 100+ home theatres for 450+ happy customers and has a 5/5 rating from 72 verified reviews. Contact Qloud Tech at <a href="tel:+917204746043">+91 72047 46043</a>, <a href="mailto:contact@qloudsmarthomes.com">contact@qloudsmarthomes.com</a>, or visit <a href="${SITE_URL}/contact">the consultation page</a>.</p>
    <h2>Qloud Audio Questions</h2>
    <h3>Are Qloud Audio and Qloud Tech the same team?</h3>
    <p>Yes. Qloud Audio is Qloud Tech's product and quote-building website, while Qloud Tech handles design, installation and support.</p>
    <h3>Can I build a home theatre quote online?</h3>
    <p>Yes. Visit the <a href="https://www.qloudaudio.com/build">Qloud Audio builder</a> to assemble a quote, then work with Qloud Tech to validate the system for your room.</p>
  </section>` : "";

  return `<div id="seo-content" aria-hidden="true" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">
  ${breadcrumbs ? `<nav aria-label="Breadcrumb">${breadcrumbs}</nav>` : ""}
  <h1>${escapeHtml(meta.h1)}</h1>
  <p>${escapeHtml(meta.intro)}</p>
  ${qloudAudioEntityContent}
  <h2>About ${BRAND}</h2>
  <p>${BRAND} is Bangalore &amp; Karnataka's leading home theatre and smart home automation specialist with 100+ completed installations, 450+ happy customers and a perfect 5-star rating from 72 verified reviews. We design, supply and install dedicated home theatres with Dolby Atmos, smart lighting, CCTV security systems, digital door locks, video door phones, motorised gates and structured networking across Bangalore, Karnataka — Mysuru, Mangalore, Hubballi, Belgavi, Udupi, Tumakuru and beyond — plus Whitefield, Koramangala, Indiranagar, HSR Layout, JP Nagar, Jayanagar, Sarjapur, Electronic City, Yelahanka, Hebbal, Marathahalli and Banashankari.</p>
  <h2>Shop Models and Build a Quote with Qloud Audio</h2>
  <p><a href="https://www.qloudaudio.com">Qloud Audio</a> is our dedicated home theatre product catalogue. Compare projectors, screens, speakers, subwoofers and AV receivers with listed prices, add products to cart, or <a href="https://www.qloudaudio.com/build">build a complete home theatre quote online</a>.</p>
  <h2>Why Choose ${BRAND}</h2>
  <ul>
    <li>100+ home theatres and smart homes installed since 2017</li>
    <li>Vendor-neutral — we work with JBL, Denon, Yamaha, Sony, Epson, BenQ, KEF, Yale, Samsung, Hikvision, BuildTrack and more</li>
    <li>Transparent packages from ₹2.29L (Essential) to ₹12.39L (Gold)</li>
    <li>Lifetime technical support and 5-year speaker warranty</li>
    <li>Free on-site consultation across Bangalore</li>
  </ul>
  <h2>Explore</h2>
  <p><a href="${SITE_URL}/services">Browse services</a> · <a href="${SITE_URL}/packages">View packages</a> · <a href="https://www.qloudaudio.com/catalog">Shop models &amp; prices</a> · <a href="https://www.qloudaudio.com/build">Build a quote</a> · <a href="${SITE_URL}/projects">Recent projects</a> · <a href="${SITE_URL}/blog">Read our guides</a> · <a href="${SITE_URL}/contact">Contact us</a></p>
  <h2>Contact</h2>
  <address>
    ${BRAND}<br />
    ${ADDRESS}<br />
    Phone: <a href="tel:${PHONE}">${PHONE}</a><br />
    Email: <a href="mailto:${EMAIL}">${EMAIL}</a><br />
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

  // Add extra routes not in sitemap (e.g. ad landing pages with noindex)
  const extraRoutes = Object.keys(STATIC_ROUTES).filter(
    (r) => !routes.includes(r) && STATIC_ROUTES[r].noindex
  );
  const allRoutes = [...routes, ...extraRoutes];

  console.log(`[seo-build] Generating per-route SEO HTML for ${allRoutes.length} routes (${extraRoutes.length} noindex)`);

  let ok = 0;
  let skipped = 0;
  let warnings = 0;
  const missing = [];

  for (const route of allRoutes) {
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
    // Ad landing pages: noindex (don't compete with organic SEO pages)
    if (meta.noindex) {
      html = replaceMeta(html, "robots", "noindex, follow");
    }
    html = replaceMeta(html, "og:title", meta.title, true);
    html = replaceMeta(html, "og:description", meta.description, true);
    html = replaceMeta(html, "og:url", url, true);
    html = replaceMeta(html, "twitter:title", meta.title, true);
    html = replaceMeta(html, "twitter:description", meta.description, true);
    html = replaceMeta(html, "twitter:url", url, true);
    html = replaceMeta(html, "og:image", meta.image || DEFAULT_OG, true);
    html = replaceMeta(html, "twitter:image", meta.image || DEFAULT_OG, true);
    html = replaceCanonical(html, url);

    // Add route-specific schema (in addition to the global schema already in template)
    const schemas = [];
    const bc = breadcrumbSchema(meta.breadcrumbs);
    if (bc) schemas.push(bc);

    if (meta.type === "article") {
      schemas.push(articleSchema(meta, url));
      if (meta.slug === "qloud-audio-by-qloud-tech") schemas.push(qloudAudioFaqSchema());
    }
    else if (meta.type === "service") schemas.push(serviceSchema(meta, url));
    else if (meta.type === "location") schemas.push(localBusinessSchema(meta, url));

    if (schemas.length) {
      const schemaTags = schemas
        .map((s) => `        <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n        </script>`)
        .join("\n");
      html = injectBeforeHeadClose(html, schemaTags);
    }

    html = injectIntoRoot(html, buildSeoFallback(meta, url), buildLoader());

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
