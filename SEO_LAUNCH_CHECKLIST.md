# SEO Launch Checklist — Qloud Smart Homes

> **Goal**: First-page Google rankings for "home theatre bangalore", "home automation bangalore", and 49 long-tail variants.
>
> **Reality check**: Even with perfect on-site SEO, ranking takes **3–12 months** on a new domain. The work below is what determines whether it takes 3 months or 12.

---

## 🟢 ON-SITE (Already Done)

These are completed and live in the codebase:

- [x] 49-page architecture with clean URLs (services, locations, blog)
- [x] **Prerendered HTML** for every route (Google now sees real content, not "You need JavaScript")
- [x] Schema.org structured data (LocalBusiness, Service, FAQPage, BlogPosting, BreadcrumbList, HowTo)
- [x] Sitemap.xml with all 49 URLs
- [x] Robots.txt
- [x] Open Graph + Twitter Card meta tags
- [x] Mobile-responsive layout
- [x] Fast page loads (Tailwind, lazy-loaded images)
- [x] Internal linking (footer + breadcrumbs + related posts)
- [x] Google Analytics 4 with conversion tracking (`generate_lead` events)
- [x] Google Search Console verification meta tag

---

## 🔴 P0 — Do This Week (biggest unlock)

### 1. Google Search Console — submit sitemap & request indexing
**Time**: 15 minutes  |  **Impact**: Massive (this is what tells Google your site exists)

1. Go to https://search.google.com/search-console
2. Property `qloudsmarthomes.com` should already be verified (the meta tag is in `index.html`). If not, click **Add Property** → enter `https://qloudsmarthomes.com` → choose "URL prefix" → it will auto-detect the meta tag.
3. **Sitemaps** (left menu) → add `sitemap.xml` → Submit
4. **URL Inspection** (top search bar) → paste each of these URLs → click **Request Indexing**:
   - `https://qloudsmarthomes.com/`
   - `https://qloudsmarthomes.com/services`
   - `https://qloudsmarthomes.com/blog`
   - `https://qloudsmarthomes.com/services/home-theatre`
   - `https://qloudsmarthomes.com/services/home-automation`
   - `https://qloudsmarthomes.com/home-theatre-bangalore`
   - `https://qloudsmarthomes.com/home-automation-bangalore`
   - `https://qloudsmarthomes.com/cctv-installation-bangalore`
   - `https://qloudsmarthomes.com/dolby-atmos-bangalore`
   - `https://qloudsmarthomes.com/home-theatre-whitefield`
   - `https://qloudsmarthomes.com/home-theatre-koramangala`
   - `https://qloudsmarthomes.com/home-theatre-hsr-layout`

**Verification**: After 3-7 days, check **Coverage → Indexed** in GSC. You should see most of your 49 pages indexed.

### 2. Google Business Profile — set up FREE listing
**Time**: 30 minutes  |  **Impact**: Largest single lever for local-services lead gen

1. Go to https://business.google.com → **Manage now**
2. Business name: **Qloud Tech** (or "Qloud Smart Homes")
3. Category: **Home automation company** (primary), **Home theatre store** (secondary)
4. Add address, hours, phone (+91 7204746043), website (`https://qloudsmarthomes.com`)
5. Verify via postcard / phone (takes 5-7 days)
6. Once verified:
   - Upload **15+ photos** (your installations, team, experience center)
   - Add a **service area** covering all of Bangalore
   - Post a "What's New" update every week (Google rewards activity)
   - Enable **Messaging** so leads can WhatsApp you directly
7. **Critical**: Ask **every past customer** for a Google review with the phrase "home theatre Bangalore" or "home automation Bangalore" (Google uses review keywords for ranking).

### 3. Bing Webmaster Tools
**Time**: 5 minutes  |  **Impact**: ~10% of search volume, almost no competition

1. https://www.bing.com/webmasters → Sign in
2. **Import from Google Search Console** (1-click — Bing imports your sitemap automatically)

---

## 🟡 P1 — Do This Month

### 4. Local citations (NAP consistency)
List your business with **identical** Name, Address, Phone on:

- [ ] JustDial — https://www.justdial.com (highest priority for India)
- [ ] Sulekha — https://www.sulekha.com
- [ ] IndiaMART — https://www.indiamart.com
- [ ] UrbanCompany / TaskRabbit-style pro listings
- [ ] HouseCall Pro / Houzz (if you do interior-design partnerships)
- [ ] Bing Places for Business
- [ ] Apple Maps Connect
- [ ] Yellow Pages India

**Rule**: Use the **exact same** business name, address, and phone everywhere. Even small variations ("Qloud Tech" vs "Qloud Tech Pvt Ltd") hurt local rankings.

### 5. Backlinks (the hardest part)
You probably have 0–5 backlinks. Goal: 30+ in 6 months from relevant sources:

- [ ] **Architect/Interior designer partnerships** — offer to write a "Smart home setup guide" guest post for 3-5 architect blogs in Bangalore in exchange for a link
- [ ] **Local newspaper PR** — pitch The Hindu, Times of India Bangalore Edition, Bangalore Mirror with an angle like "Bangalore homes are going smart — top 5 trends"
- [ ] **YouTube channel** — start a channel showing your installations (each video description links to your site). YouTube videos rank in Google search.
- [ ] **Reddit/Quora answers** — search Quora for "best home theatre installer in Bangalore" and answer 5-10 questions. Don't spam — provide genuine value, mention your site once per answer.
- [ ] **Reach out to** real-estate developers (Brigade, Prestige, Sobha, Adarsh) — many have pre-launch buyer kits. Offer to be their recommended smart-home partner with a link from their amenities page.

### 6. Reviews flywheel
- [ ] Google review request: send WhatsApp template to last 50 customers with link `https://g.page/r/<your-place-id>/review`
- [ ] Target: **20 reviews in first month**, then 3-5/month sustained
- [ ] Reply to every review (positive AND negative) within 24h — Google rewards engagement

### 7. YouTube (often #1 ranking next to Google)
- [ ] Channel: "Qloud Smart Homes"
- [ ] Upload 1 video per week:
   - Installation walkthroughs
   - "Dolby Atmos vs 5.1" comparisons
   - Customer testimonials
   - "Cost of home theatre in Bangalore" (matches your blog)
- [ ] Each video description: title-cased keyword + link to your blog article
- [ ] Pin a comment with your phone number for instant lead capture

---

## 🔵 P2 — Ongoing (every month)

### 8. Content publishing cadence
- [ ] **1 new blog post/month** targeting a long-tail keyword. Suggested topics:
   - "Cost of home automation in Whitefield apartments"
   - "Best smart locks for HSR Layout villas"
   - "Acoustic treatment guide for Bangalore home theatres"
   - "Smart home for senior citizens"
   - Customer case studies (each becomes a backlink magnet)
- [ ] **1 new neighborhood page/quarter** — pick the 4 next biggest Bangalore zones (Kanakapura Road, Kengeri, RR Nagar, Hennur).

### 9. Performance monitoring
- [ ] Weekly: GSC → **Performance** → check impressions + clicks. Identify "almost ranking" keywords (positions 8-20) and improve those pages.
- [ ] Monthly: Run https://pagespeed.web.dev on 5 random pages. Aim for 90+ on mobile.
- [ ] Monthly: Check Google Analytics → **Reports → Acquisition → Traffic acquisition** to see organic vs. direct vs. social split.

### 10. Schema validation (after every deploy)
- [ ] Test 1-2 pages on https://search.google.com/test/rich-results to confirm schemas validate.
- [ ] Run https://validator.schema.org for full schema validation.

---

## 📊 What "success" looks like (timeline)

| Month | Realistic milestone |
|---|---|
| **1** | 80% of pages indexed in GSC. First impressions for low-competition long-tail terms. GBP gets 5-10 reviews. |
| **3** | Ranking on **page 2-3** for "home theatre <neighborhood>" terms. 200+ monthly organic visitors. |
| **6** | Ranking on **page 1** for 5-10 neighborhood + long-tail terms. First leads from organic. |
| **12** | Ranking top 3 for "home theatre installation bangalore" if backlinks + reviews + content cadence are sustained. |

> **The single fastest path to leads**: Google Business Profile + reviews. A well-optimized GBP with 50+ reviews can outrank our website pages for "home theatre near me" queries within **30 days**.

---

## ⚠️ Common mistakes to avoid

- ❌ **Buying backlinks** — Google will penalise the site. Only earn links through genuine outreach.
- ❌ **Keyword stuffing** — Don't repeat "home theatre Bangalore" 50 times on a page. Write naturally.
- ❌ **Duplicate content** across location pages — each neighborhood page must have unique content (which we already do).
- ❌ **Inconsistent NAP** — Even one wrong digit in your phone number across listings tanks local rankings.
- ❌ **Ignoring negative reviews** — Always respond professionally. A 4.7★ rating with thoughtful responses outranks a 5.0★ no-response account.
