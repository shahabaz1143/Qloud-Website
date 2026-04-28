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
- ✅ Smoke-tested all routes (200 OK) and verified UI in screenshots

---

## Roadmap

### P1 — Upcoming
- **Google Analytics (GA4)** integration — needs `G-XXXXXXXXXX` Measurement ID from user
- Refactor large `LocationPage.jsx` / `BlogArticle.jsx` into separate `src/data/*.js` files for maintainability

### P2 — Backlog
- Per-page Open Graph / Twitter image overrides
- XML image sitemap for richer Google Images indexing
- Image alt-text audit across all pages
- Author profile page for E-E-A-T signal
