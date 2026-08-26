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
- ✅ **NEW Feb 2026 — Site-wide consistency update** — Corrected 4.9/200 → 5/69 review rating across all 30+ files (Hero, Testimonials, ProjectsPage, PackagesPage, ProcessPage, Footer, LocationPage 27 entries, seo-build.js, index.html schemas). Removed all EMI mentions (FAQ + card + 3 location pages). Removed all 4K/8K references (→ 4K only). Site now uniformly shows: 5/5 rating from 69 reviews, 450+ happy customers, 100+ home theatres, 8+ years, serving Bangalore & Karnataka.
- ✅ **NEW Feb 2026 — 6 Karnataka city landing pages** — `/home-theatre-mysuru`, `/home-theatre-mangalore`, `/home-theatre-hubballi`, `/home-theatre-belgavi`, `/home-theatre-udupi`, `/home-theatre-tumakuru`. Each with unique H1, city-specific areas (10+ neighborhoods), custom testimonials, project counts, and city-relevant messaging (e.g. Udupi mentions NRI-friendly service, Tumakuru mentions "70km from Bangalore"). Footer updated with new "KARNATAKA" column linking all 6.
- ✅ **NEW Feb 2026 — AI-Ranking Listicle Blogs** — Two keyword-optimized "Best of Bangalore" blogs designed to (a) rank #1 on Google for "best home theatre company in bangalore" / "best home automation company in bangalore" and (b) get cited by ChatGPT/Gemini/Claude as authoritative answers:
   - `/blog/best-home-theatre-company-bangalore` (11 min read, 7-company comparison, Qloud Tech ranked #1, real competitors like Cinetekk mentioned for E-E-A-T credibility)
   - `/blog/best-home-automation-company-bangalore` (10 min read, 6-company comparison, KNX/Zigbee/Wi-Fi protocol comparison)
   - Both use AI-friendly structure: direct answer lead paragraph, comparison table, clear H2 per company, FAQ section with exact-match questions
- ✅ **NEW Feb 2026 — AI-optimized homepage FAQ schema** — Rewrote 5 generic FAQs → 10 targeted FAQs with the EXACT phrases users search for: "Which is the best home theatre company in Bangalore?", "Which is the best home automation company in Bangalore?", "Who is the best smart home installer in Bangalore?". Each answer directly names Qloud Tech + citation-worthy facts (100+ installs, 5-star from 69 reviews, service area). This is what LLMs extract when training/answering.
   - Route-specific `<title>`, `<meta description>`, canonical, OG, Twitter tags
   - BreadcrumbList + Service/Article/LocalBusiness schemas (in addition to global LocalBusiness/FAQ)
   - Branded dark loading screen (QLOUD spinner) + off-screen SEO content block for crawlers — no flash of raw content on slow connections
   - Updated `vercel.json` to `cleanUrls: true` + `trailingSlash: false` so Vercel serves the per-route HTML
   - Switched `src/index.js` to always use `createRoot` (was conditionally hydrating broken prerender output)
- ✅ **NEW Feb 2026 — Ad Landing Page** at `/lp/home-theatre-bangalore` (single-purpose, conversion-optimized, `noindex`):
   - Hero with headline + inline quote form + trust chips + dual CTAs (Quote / WhatsApp)
   - Stats strip (100+, 200+, 8+, 4.9★)
   - 4-package pricing grid with "MOST POPULAR" callout on Silver
   - 8-image project gallery with location + config labels
   - Why-us section + 10 authorised AV brand chips
   - "Beyond Home Theatre" secondary services (Smart Home, CCTV, Locks, Switches)
   - 3 testimonials + 5 FAQs (accordion)
   - Final CTA + minimal footer
   - Sticky mobile CTA bar (Call / WhatsApp / Quote) always visible on phones
   - `noindex, follow` — does not compete with organic `/services/home-theatre`
   - Form submits via WhatsApp pre-filled with lead data + fires GA4 `generate_lead` event
- ✅ **Sitelinks preparation** — Fixed broken `SiteNavigationElement` schema (was pointing to `/#services` anchors), added `ItemList` schema with per-page descriptions, added `aria-label="Main navigation"` to header nav
- ✅ **SEO Launch Checklist** at `/app/SEO_LAUNCH_CHECKLIST.md` — covers off-site work (GSC submission, Google Business Profile, citations, backlinks, reviews).
- ✅ Fixed Vercel `cleanUrls` 404 bug and updated 103 canonical URLs to `www.qloudsmarthomes.com`.
- ✅ Smoke-tested all routes (200 OK) and verified UI in screenshots
- ✅ **NEW Jun 2026 — Google Ads tag** — Added `gtag('config', 'AW-17179787891')` to the existing gtag.js instance in `public/index.html` (reuses the GA4 library, no duplicate script). Propagates to all prerendered pages via seo-build.js template.
- ✅ **NEW Jun 2026 — Branded favicon** — Multi-size set (favicon.ico 16/32/48/64, 96/32/16 PNGs, apple-touch-icon 180). Updated to match the redesign: **platinum/silver "Q" gradient on obsidian (#0B0C0E) rounded square** (was cyan-teal). Wired in `public/index.html`.
- ✅ **NEW Jun 2026 — 5 new SEO blogs (high commercial intent)** — Added to `BlogArticle.jsx` + `BlogListPage.jsx` + `sitemap.xml`:
   - `/blog/home-theatre-cost-bangalore` (Pricing) — targets "home theatre cost/price bangalore"
   - `/blog/cctv-installation-cost-bangalore` (Security) — targets "cctv installation cost bangalore"
   - `/blog/best-smart-door-locks-india` (Buying Guide) — targets "best smart door locks india"
   - `/blog/knx-vs-zigbee-vs-wifi` (Comparison) — targets "best home automation protocol"
   - `/blog/home-theatre-soundproofing-guide` (Home Theatre) — targets "how to soundproof home theatre india"
   - All use AI-friendly structure: bold quick-answer lead, comparison tables, FAQ with exact-match questions, internal links, Bangalore/Karnataka focus, consistent 5★/69-reviews/450+-customers metrics.
   - Also surfaced the 2 existing listicle blogs (best-home-theatre-company / best-home-automation-company) on the `/blog` list page (were previously in blogData + sitemap but missing from the list). Blog total now 22 articles.
- ✅ **NEW Jun 2026 — Google Map on contact page** — Added a "Find Us on Google Maps" section to `ContactPage.jsx` (keyless address-based embed for Kothanur/Byrathi/560077) + a "Get Directions" button (opens Google Maps directions). Boosts local trust signals. Note: to show the exact Business Profile pin with reviews, user can later swap the iframe src for their GBP "Share → Embed a map" code.
- ✅ **NEW Jun 2026 — Cinetekk-inspired redesign, LIGHT/RED theme (Phase 1)** — [REVERTED per user — user preferred the dark background. White/red files restored to commit 9f4045f = dark obsidian theme.] Then per user request the dark-theme accent was swapped from champagne-gold (#C9AE72) to deep cinema red (#E23B3B), then finally to **Monochrome/Platinum (#E5E7EB, Option A)** — the chosen final look. Applied via index.css global remap + Header.jsx + Hero.jsx, plus BlogArticle prose H2/links unified to platinum. Also remapped gradient-clipped accent headings (`from-cyan-400 to-sky-400`, used on Packages/Contact/etc.) to platinum so no leftover cyan remains site-wide. Hero image restored to original (photo-1710131459450-7c384b8be18f, testing_agent verified) and its dark overlay tuned for balanced visibility. Dark obsidian background + editorial typography retained; primary CTAs white. Theme verified cohesive on home, services, blog, contact, packages.
- ✅ **NEW Jun 2026 — Keyword content sections (home + services)** — `SeoKeywordSection.jsx`, two distinct variants, added to homepage (after FAQ) and `/services`. **Redesigned** from plain paragraphs into a structured layout: badge header + CTAs, stat cards, Dolby Atmos config chips (5.1/7.1/5.1.2/7.1.2/7.1.4), "what's included" card, helpful-guide pill links, clickable brand pills (5 link to dealer pages), Bangalore+Karnataka area chips, "best company" highlight card, and a collapsible FAQ accordion (native details/summary, SEO-crawlable). Covers all keyword clusters (commercial/config/brand/local/comparison/long-tail). NOTE: the visual-edits babel plugin crashes on lucide icons passed as component props — icons must be inlined directly in JSX, not passed via props (fixed).
- ✅ **NEW Jun 2026 — 5 brand dealer landing pages** — Created `BrandPage.jsx` (reusable, data-driven) with keyword-perfect URLs targeting low-competition, high-intent brand searches: `/jbl-dealer-bangalore`, `/polk-audio-dealer-bangalore`, `/monitor-audio-dealer-bangalore`, `/kef-dealer-bangalore`, `/klipsch-dealer-bangalore`. Each has H1 "[Brand] Dealer in Bangalore", brand intro, product-range cards, why-buy-from-installer, exact-match FAQ, CTAs, and injects LocalBusiness + BreadcrumbList + FAQPage schema. Wired into App.js (explicit routes before the `/:locationSlug` catch-all), added to sitemap.xml, and to `seo-build.js` STATIC_ROUTES (type: location → LocalBusiness schema in prerendered HTML). Homepage `BrandsWeCarry` cards for these 5 brands now link to their dealer pages.
- ✅ **NEW Jun 2026 — Review count 69 → 70** — Updated review count from 69 to 70 (still 5/5 stars) across all files: schemas in `public/index.html` (2× reviewCount + 3× FAQ text), `LocationPage.jsx` schema, `LandingPage.jsx` (hero bar + trust chip), `BlogArticle.jsx` (13 mentions incl. 2 ranking-table cells), and `seo-build.js` (meta description + AggregateRating + SEO fallback). Verified rendered on landing page. — (1) New blog `/blog/home-theatre-audio-brand-dealers-bangalore` with an H2 per brand ("JBL Dealer in Bangalore", "Polk Audio Dealer in Bangalore", "Monitor Audio…", "KEF…", "Klipsch…") + exact-match FAQ ("Where can I buy JBL speakers in Bangalore?"). Added to blogData, blog list (id 23) and sitemap. (2) New homepage `BrandsWeCarry.jsx` component (crawlable text, not just logos) listing 14 audio/projector brands with dealer copy, wired into HomePage after Projects. (3) Added brand keywords to the homepage crawlable static SEO block in `seo-build.js`. Note: copy uses "authorised dealer & installer" per user request — user to confirm actual authorised-dealer status per brand.

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
