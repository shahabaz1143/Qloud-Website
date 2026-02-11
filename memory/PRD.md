# Qloud Smart Homes Website - Product Requirements Document

## Original Problem Statement
Build a pixel-perfect clone of the reference website with React frontend and FastAPI/MongoDB backend for a home theatre and smart home automation business in Bangalore.

## User Personas
- **Primary**: Homeowners in Bangalore seeking premium home theatre and smart home automation solutions
- **Secondary**: Business owners looking for professional company profile and marketing materials

## Core Requirements
1. ✅ Complete website clone with all sections (Hero, Services, Pricing, Process, Projects, Testimonials, Gallery, Contact)
2. ✅ Responsive design (mobile, tablet, desktop)
3. ✅ Dynamic content from MongoDB backend
4. ✅ SEO optimizations (Schema.org, sitemap, robots.txt)
5. ✅ Contact form with email notifications (Gmail SMTP)
6. ✅ WhatsApp integration (floating button + CTA links)
7. ✅ Custom images for all services and projects
8. ⏳ Professional company profile PDF (in progress)
9. 📋 Convert to static site (proposed, pending)

## Tech Stack
- **Frontend**: React 18, Tailwind CSS, Shadcn/UI, Lucide Icons
- **Backend**: FastAPI, Motor (async MongoDB)
- **Database**: MongoDB
- **Deployment**: Vercel (frontend) + Render (backend)

## Color Theme
- **Primary Accent**: Violet (#7C3AED) - Updated 2026-02-11
- **Background**: Dark (#0a0e1a)
- **Text**: White/Gray

## Key Integrations
- Gmail SMTP for contact form notifications
- WhatsApp business chat links

## Current Status
**Phase**: Production with pending improvements

### Completed Features
- [x] All website sections implemented
- [x] Mobile responsiveness
- [x] SEO markup and sitemap
- [x] Email notifications
- [x] WhatsApp integration
- [x] Custom project/service images
- [x] Violet color theme update (2026-02-11)

### In Progress
- [ ] Company Profile PDF redesign

### Upcoming
- [ ] Convert to 100% static site
- [ ] Google Search Console verification

## Deployment Info
- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render (free tier - has cold start issues)
- **Custom Domain**: qloudsmarthomes.com (pending static conversion)

## Known Issues
1. Slow initial load due to Render free tier cold starts (fix: convert to static)

## Credentials (Backend .env)
- SMTP_EMAIL: shabhaz.h2@gmail.com
- SMTP_PASSWORD: [stored in backend/.env]
- NOTIFICATION_EMAIL: shabhaz.h2@gmail.com
