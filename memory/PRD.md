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
- **Related Storefront**: [Qloud Audio](https://www.qloudaudio.com) — separate product catalogue, cart and home theatre quote builder
- **Backend / Database**: None; the Qloud Smart Homes website remains 100% static

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

### Completed — 20 September 2026
- ✅ **Qloud Audio storefront integration** — connected the new `https://www.qloudaudio.com` shopping experience to Qloud Smart Homes without adding a new local route:
  - Added a highlighted **Qloud Audio** external link to desktop and mobile main navigation; opens in a new tab.
  - Added a dedicated homepage band introducing Qloud Audio as the product catalogue and package builder, with real store imagery.
  - Added direct CTAs to `/catalog` for models/prices/cart and `/build` for building a home theatre quote.
  - Added a sitewide footer company mention and storefront link.
  - Added a `qloud_audio_click` GA4 event for every outbound Qloud Audio link.
  - Added crawler-readable `subOrganization`, `OfferCatalog` and `CreateAction` structured data linking Qloud Tech to Qloud Audio.
  - Updated the static SEO fallback so all generated route HTML mentions Qloud Audio and includes catalogue/quote-builder links.
- ✅ Fixed unsupported CRA `<style jsx>` usage that produced a React console warning.
- ✅ Cleaned remaining legacy claims so the site consistently uses 4K projection, 450+ happy customers, 100+ home theatres, 5/5 stars and 69 verified reviews.
- ✅ Verification: production build compiled; all 66 SEO route files generated with zero missing metadata; JSON-LD parsed successfully; Qloud Audio homepage/catalog/build/image returned HTTP 200; desktop/mobile browser flow, new-tab destinations, responsive width and GA4 event passed.
- ✅ **Theme regression resolved** — the fork contained older cyan-theme source while the deployed site was built from a newer monochrome editorial source set. Recovered the exact live theme from the deployed CSS/JS source maps and restored:
  - Obsidian `#0B0C0E` surfaces with platinum/white accents across all routes.
  - Plus Jakarta Sans headings, Inter body copy and Playfair Display italic accents.
  - The current live editorial header, first-viewport hero layout, understated borders and white rectangular CTAs.
  - Responsive desktop/mobile navigation without overflow.
  - Restyled the new Qloud Audio navigation, homepage band and footer link to match the restored live theme rather than the older cyan treatment.
- ✅ Theme verification: preview compared against `https://www.qloudsmarthomes.com`; representative routes (`/services`, `/packages`, `/projects`, `/contact`) passed; no old cyan-gradient appearance, blank pages, console errors or mobile overflow; frontend testing agent reported 100% pass in `iteration_5.json`.
- ✅ **Preview opening/compile error fixed** — after the theme restore, the development-only visual-edits Babel metadata plugin crashed while traversing `QloudAudioPromo.jsx` (`Cannot read properties of null (reading 'traverse')`). Replaced the imported `Button asChild` wrapper and dynamically rendered Lucide icon component with native styled links, numeric markers and text arrows. This preserves the editorial design while avoiding the compiler bug.
- ✅ Revalidated in `iteration_6.json`: preview HTTP 200, no webpack overlay, no traversal error, Qloud Audio desktop/mobile links and both destinations work, and the production build contains all 66 static route HTML files.
- ✅ **Brand logo updated** — processed the user-supplied transparent black QLOUD wordmark into optimized production assets:
  - Tight transparent black and white wordmarks for light/dark placements.
  - Dedicated square Q-mark favicon/apple-touch icon.
  - 1200×630 white social-sharing image for Open Graph and Twitter.
  - Replaced legacy logo URLs in the header, footer, Google Ads landing page, company profile, blog/service schema, LocalBusiness schema and static SEO generator.
- ✅ Logo verification: desktop/mobile header, footer and landing-page placements load at correct aspect ratio without overflow; favicon resolves; production build and all 66 SEO route files pass; no legacy logo references remain.
- ✅ **Favicon refined** — replaced the oversized full-canvas mark with a polished rounded obsidian tile, centered white Q monogram, larger safe area and subtle neutral border. Added crisp 16×16 and 32×32 browser icons, multi-size `.ico`, and a dedicated 180×180 Apple touch icon.
- ✅ Favicon verification: all icon files return HTTP 200, the preview publishes every required `<link>` size, the Q remains recognizable at 16px, and the production/SEO build still passes all 66 routes.
- ✅ Increased the favicon Q monogram from 32% to approximately 60% tile coverage after user feedback, retaining the rounded tile and safe edge spacing. Regenerated all `.ico`, 16px, 32px, 180px and 512px variants; visual checks and the 66-route production build pass.
- ✅ Per final user preference, restored the original Qloud Tech logo asset **for the browser favicon and Apple touch icon only**. The new QLOUD wordmark remains unchanged in the website header, footer, landing page, company profile, social preview and SEO schema. Original favicon asset returns HTTP 200; all 66 routes rebuild successfully.
- ✅ Resolved favicon persistence: browsers were still preferring the previously generated `/favicon.ico`. Replaced the `.ico` fallback itself with the original Qloud mark and published the original PNG/Apple icon under new versioned filenames (`qloud-original-logo-*-v2`), forcing the preview to request the correct asset. Preview HTML and both icon URLs verified HTTP 200.
- ✅ **Qloud Audio entity SEO article published** — added `/blog/qloud-audio-by-qloud-tech` to establish a clear search relationship between Qloud Audio, Qloud Tech and Qloud Smart Homes:
  - Targets Qloud Audio branded intent plus models, prices, cart, catalogue and home theatre quote-builder searches.
  - Explains the exact relationship: Qloud Audio handles product discovery/quote building; Qloud Tech handles room design, acoustics, installation, calibration and support.
  - Includes Qloud Tech name, address, phone, email, Karnataka service area, 100+ home theatres, 450+ customers and 5/5 from 69 verified reviews.
  - Links to Qloud Audio homepage/catalog/builder and Qloud Tech home theatre/contact pages.
  - Added `BlogPosting.about`, `parentOrganization`, `mentions`, four-question `FAQPage`, Breadcrumb schema and route-specific social image.
  - Added crawler-readable static entity content, canonical/index-follow metadata, sitemap entry and a homepage internal link.
  - Added the article plus the two existing 2026 listicles to the visible blog index and Blog schema.
- ✅ Qloud Audio article verification: production build now generates 67 static routes with zero missing metadata; desktop/mobile UX, image, external links, blog listing, entity/FAQ schema, sitemap uniqueness and ad-page noindex passed 100% in `iteration_7.json`.

---

## Roadmap

### P0 — Blocked / Needs User Input
- Wire Google Ads conversion tracking for Phone Click, WhatsApp Click and Quote Form once the user provides the Google Ads `AW-...` conversion IDs/labels.

### P1 — Upcoming
- Refactor large `LocationPage.jsx` / `BlogArticle.jsx` into separate `src/data/*.js` files for maintainability
- Extend funnel reporting with blog TOC events and a GA4 exploration comparing Qloud Audio catalogue clicks versus quote-builder clicks.

### P2 — Backlog
- Add a dedicated `/reviews` page with 15–20 testimonials, Review schema and Google Review CTA.
- Add UTM parameters to Qloud Audio and WhatsApp campaign links for source-level attribution.
- Per-page Open Graph / Twitter image overrides
- XML image sitemap for richer Google Images indexing
- Image alt-text audit across all pages
- Author profile page for E-E-A-T signal
- "Last updated" timestamp + auto-bumped `dateModified` on blog articles
