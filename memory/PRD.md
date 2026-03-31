# Qloud Smart Homes - Product Requirements Document

## Original Problem Statement
Build a pixel-perfect clone of a reference website for "Qloud Smart Homes" brand - a home theatre and smart home automation company in Bangalore, India.

## Product Overview
A 100% static React website for Qloud Smart Homes featuring comprehensive SEO optimization for local and service-based search queries.

---

## Current SEO Statistics

| Metric | Count |
|--------|-------|
| **Total Pages** | 36 |
| **Service Pages** | 8 |
| **Location Pages (City)** | 8 |
| **Location Pages (Neighborhood)** | 8 |
| **Blog Articles** | 10 |
| **Schema Types** | 10+ |
| **Internal Links** | 100+ |

---

## Page Structure (36 Total Pages)

### Homepage
- `/` - Main landing page with all sections

### Service Pages (8)
- `/services/home-theatre`
- `/services/home-automation`
- `/services/security-systems`
- `/services/smart-switches`
- `/services/networking`
- `/services/digital-door-locks`
- `/services/video-door-phones`
- `/services/motorised-gates`

### Location Pages - City Level (8)
- `/home-theatre-bangalore`
- `/home-automation-bangalore`
- `/security-systems-bangalore`
- `/smart-switches-bangalore`
- `/digital-locks-bangalore`
- `/video-doorbell-bangalore`
- `/dolby-atmos-bangalore` (NEW)
- `/cctv-installation-bangalore`

### Location Pages - Neighborhood Level (8)
- `/home-theatre-whitefield`
- `/home-theatre-koramangala`
- `/home-theatre-hsr-layout` (NEW)
- `/home-theatre-indiranagar` (NEW)
- `/home-theatre-jp-nagar` (NEW)
- `/home-theatre-electronic-city` (NEW)
- `/smart-home-whitefield`
- `/smart-home-hsr-layout` (NEW)

### Blog Articles (10)
1. `/blog/home-theatre-setup-bangalore-guide`
2. `/blog/smart-home-automation-guide`
3. `/blog/security-systems-guide`
4. `/blog/dolby-atmos-guide`
5. `/blog/smart-switches-guide`
6. `/blog/video-door-phone-guide`
7. `/blog/best-home-theatre-brands-india` (NEW)
8. `/blog/home-automation-cost-bangalore` (NEW)
9. `/blog/projector-vs-tv-home-theatre` (NEW)
10. `/blog/yale-vs-samsung-smart-lock` (NEW)

### Static Pages
- `/company-profile.html`

---

## SEO Implementation

### Schema.org Structured Data
| Schema Type | Location | Purpose |
|-------------|----------|---------|
| LocalBusiness | Homepage | Business info, ratings |
| Organization | Homepage | Brand identity |
| WebSite | Homepage | Site search action |
| ItemList (Services) | Homepage | Service listings |
| FAQPage | Homepage, Service Pages | FAQ rich snippets |
| Product + Reviews | Homepage | Product ratings |
| Offer/Pricing | Homepage | Package pricing |
| Service + FAQPage + Breadcrumb | Service Pages | Per-service schema |
| BlogPosting + Breadcrumb | Blog Pages | Article metadata |
| LocalBusiness + Service | Location Pages | Local SEO |

### Technical SEO
- ✅ Sitemap.xml (36 URLs)
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Image lazy loading
- ✅ Alt tags on images
- ✅ Breadcrumb navigation (UI + Schema)
- ✅ Internal linking structure
- ✅ Mobile responsive
- ✅ Fast loading (static site)

### Content SEO
- ✅ FAQ section (8 questions)
- ✅ 10 blog articles targeting keywords
- ✅ Location-specific content
- ✅ Neighborhood-specific pages
- ✅ Service comparison articles

---

## Keywords Targeted

### Primary Keywords
- "home theatre installation bangalore"
- "home automation bangalore"
- "dolby atmos bangalore"
- "smart home bangalore"
- "cctv installation bangalore"

### Location Keywords
- "home theatre whitefield"
- "home theatre koramangala"
- "home theatre hsr layout"
- "home theatre indiranagar"
- "home theatre jp nagar"
- "home theatre electronic city"

### Long-tail Keywords
- "home theatre cost bangalore"
- "home automation cost bangalore"
- "best home theatre brands india"
- "projector vs tv home theatre"
- "yale vs samsung smart lock"

---

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, react-router-dom v7
- **Build**: craco
- **Deployment**: Vercel
- **Domain**: qloudsmarthomes.com

---

## Key Files
- `/app/frontend/src/App.js` - Routing
- `/app/frontend/src/pages/LocationPage.jsx` - 16 location pages
- `/app/frontend/src/pages/BlogArticle.jsx` - 10 blog articles
- `/app/frontend/src/pages/ServicePage.jsx` - 8 service pages
- `/app/frontend/src/components/FAQ.jsx` - FAQ section
- `/app/frontend/public/sitemap.xml` - 36 URLs
- `/app/frontend/public/index.html` - Schema markup

---

## Deployment
- **Preview**: https://qloud-seo-refactor.preview.emergentagent.com
- **Production**: qloudsmarthomes.com
