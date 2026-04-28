# Qloud Smart Homes - Product Requirements Document

## SEO Statistics Summary

| Metric | Count |
|--------|-------|
| **Total Pages** | 49 |
| **Service Pages** | 8 |
| **Services Index Page** | 1 |
| **Location Pages (City)** | 8 |
| **Location Pages (Neighborhood)** | 19 |
| **Blog Articles** | 15 |
| **Blog List Page** | 1 |
| **Static Pages** | 2 |
| **Schema Types** | 13+ (LocalBusiness, Organization, WebSite, ItemList, FAQPage, Product, Service, BlogPosting, Blog, BreadcrumbList, HowTo, etc.) |

---

## Original Problem Statement
Build a pixel-perfect, fully responsive, 100% static React website for the **Qloud Smart Homes** brand. The site must maximize **performance and SEO** through a multi-page architecture with dedicated URLs for services, locations, and blog posts, advanced Schema.org structured data, and extensive local-SEO optimisations targeting Bangalore neighbourhoods. The site uses a cyan-to-aqua gradient theme on a dark background and is deployed on Vercel.

---

## Complete Page Structure (49 Pages)

### Core Pages
- `/` - Homepage
- `/services` - Services index page
- `/blog` - Blog listing page
- `/company-profile.html` - Company profile

### Service Pages (8) — `/services/:slug`
- home-theatre, home-automation, security-systems, smart-switches
- networking, digital-door-locks, video-door-phones, motorised-gates

### Location Pages — City Level (8)
- home-theatre-bangalore, home-automation-bangalore, security-systems-bangalore
- smart-switches-bangalore, digital-locks-bangalore, video-doorbell-bangalore
- dolby-atmos-bangalore, cctv-installation-bangalore

### Location Pages — Neighborhood (19)
**Home Theatre (14):** Whitefield, Koramangala, HSR Layout, Indiranagar, JP Nagar, Electronic City, Jayanagar, Sarjapur, Marathahalli, Bannerghatta, Yelahanka, Hebbal, Malleshwaram, Banashankari
**Smart Home (5):** Whitefield, HSR Layout, Indiranagar, JP Nagar, Electronic City

### Blog Articles (15)
1. home-theatre-setup-bangalore-guide
2. smart-home-automation-guide
3. security-systems-guide
4. dolby-atmos-guide
5. smart-switches-guide
6. video-door-phone-guide
7. best-home-theatre-brands-india
8. home-automation-cost-bangalore
9. projector-vs-tv-home-theatre
10. yale-vs-samsung-smart-lock
11. home-theatre-room-size-guide
12. alexa-google-home-comparison
13. soundbar-vs-home-theatre
14. smart-home-for-rental-apartment
15. best-projector-under-2-lakh

---

## SEO Features Implemented

### Schema.org Structured Data
| Schema | Location |
|--------|----------|
| LocalBusiness, Organization, WebSite, ItemList, FAQPage, Product+Reviews | Homepage |
| Service + FAQPage + BreadcrumbList + **HowTo** (5-step) | Service Pages |
| BlogPosting + BreadcrumbList | Blog Articles |
| Blog | Blog List Page |
| LocalBusiness + Service | Location Pages |

### Technical SEO
- Sitemap.xml (49 URLs, dated 2025-02-01)
- Robots.txt
- Open Graph + Twitter Card tags
- Dynamic page titles & meta descriptions
- Breadcrumb navigation pointing to real pages (`/services`, `/blog`)
- Image lazy loading
- Internal linking (footer + breadcrumbs + related posts/services)
- Mobile responsive

### Content Features
- Blog list page with search & filters (15 articles)
- **Related Posts** carousel on every blog article (same-category preferred)
- Related Services links on blog articles
- Visible **5-step "How It Works"** section on every service page (matches HowTo schema)
- FAQ section (8 questions on homepage, 3+ per service page)
- Location-specific testimonials & pricing

---

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, react-router-dom v7, @tailwindcss/typography
- **Build**: craco
- **Deployment**: Vercel
- **Domain**: qloudsmarthomes.com

---

## Key Files
- `/app/frontend/src/App.js` — Router config
- `/app/frontend/src/pages/ServicesPage.jsx` — Services index
- `/app/frontend/src/pages/ServicePage.jsx` — 8 service pages + HowTo schema + How-It-Works UI
- `/app/frontend/src/pages/BlogListPage.jsx` — Blog index w/ search & filter (15 entries)
- `/app/frontend/src/pages/BlogArticle.jsx` — 15 articles + Related Posts UI + breadcrumb to /blog
- `/app/frontend/src/pages/LocationPage.jsx` — 27 location pages
- `/app/frontend/public/sitemap.xml` — 49 URLs

---

## Recently Completed (Feb 2026 session)
- ✅ Updated `sitemap.xml` to 49 URLs (added /services, 5 new blog posts, 5 new neighborhood pages)
- ✅ Added **Related Posts** section in `BlogArticle.jsx` with same-category preference + fallback
- ✅ Added **HowTo Schema** + visible "How It Works" 5-step section on `ServicePage.jsx`
- ✅ Fixed breadcrumbs on Blog & Service pages to link to real `/blog` and `/services` routes
- ✅ Added **Table of Contents** (sticky sidebar on desktop, collapsible on mobile) with IntersectionObserver scrollspy + auto-generated anchor IDs for every `<h2>` in blog articles
- ✅ **Google Analytics 4 (GA4)** integrated — Measurement ID `G-G41DNBE1PK`; gtag.js loaded in `index.html` with `send_page_view: false`, and `<GAListener>` in `App.js` fires manual `page_view` events on every SPA route change.
- ✅ **GA4 conversion tracking** via global event delegation — auto-fires `generate_lead` events for every `<a wa.me/tel:>` click and every `window.open(wa.me/tel:)` call without per-button instrumentation. Verified end-to-end (3 events fired correctly).
- ✅ **`<ScrollToTop />`** in `App.js` — resets scrollY=0 on every SPA route change (fixes "page opens at bottom" UX bug). Honors `#anchor` hashes for blog TOC.
- ✅ **Logo redesign** — replaced "Back to Home" links with the Qloud logo on all sub-pages; added cyan `drop-shadow` glow on hover + auto-cycling 10s shine sweep animation.
- ✅ **PRERENDERING IMPLEMENTED (P0 SEO unlock)** — Custom puppeteer script `/app/frontend/scripts/prerender.js` runs as `postbuild`, parses sitemap.xml, crawls all 53 routes, writes static HTML files into `/build/<route>/index.html`. Result: Googlebot now sees **2,199 words on homepage / 849 on services / 1,158 on blog articles** (was 33-42 words before). All 11 schemas baked in. `index.js` switched to hydrateRoot when DOM is prerendered.
- ✅ **SEO Launch Checklist** created at `/app/SEO_LAUNCH_CHECKLIST.md` — covers off-site work needed (GSC submission, Google Business Profile, citations, backlinks, reviews) — the single biggest lever for actual rankings.
- ✅ Smoke-tested all routes (200 OK) and verified UI in screenshots

---

## Roadmap

### P1 — Upcoming
- Refactor large `LocationPage.jsx` / `BlogArticle.jsx` into separate `src/data/*.js` files for maintainability
- GA4 custom events: track WhatsApp button clicks, phone-call clicks, "Get Quote" button clicks, and blog TOC link clicks for funnel visibility

### P2 — Backlog
- Per-page Open Graph / Twitter image overrides
- XML image sitemap for richer Google Images indexing
- Image alt-text audit across all pages
- Author profile page for E-E-A-T signal
- "Last updated" timestamp + auto-bumped `dateModified` on blog articles
