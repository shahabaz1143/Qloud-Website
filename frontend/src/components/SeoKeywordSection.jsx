import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Layers, Volume2, MapPin, Award, Star, Check, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

// ---------- Shared data ----------
const STATS = [
  { value: '100+', label: 'Home Theatres Delivered' },
  { value: '450+', label: 'Happy Customers' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '70', label: 'Verified Reviews' },
];

const CONFIGS = [
  { label: '5.1', note: 'Surround' },
  { label: '7.1', note: 'Surround' },
  { label: '5.1.2', note: 'Dolby Atmos' },
  { label: '7.1.2', note: 'Dolby Atmos' },
  { label: '7.1.4', note: 'Dolby Atmos' },
];

const INCLUDES = [
  { text: 'Professional acoustic treatment & soundproofing' },
  { text: 'Acoustic panels, bass traps & premium recliners' },
  { text: '4K projector or large-format TV', to: '/blog/projector-vs-tv-home-theatre', linkText: 'projector vs TV?' },
  { text: 'Full calibration, handover & lifetime support' },
];

const GUIDES = [
  { label: 'Home theatre cost & price', to: '/blog/home-theatre-cost-bangalore' },
  { label: 'Room size guide', to: '/blog/home-theatre-room-size-guide' },
  { label: 'Acoustic treatment & soundproofing', to: '/blog/home-theatre-soundproofing-guide' },
  { label: 'Best projector under 2 lakh', to: '/blog/best-projector-under-2-lakh' },
  { label: 'How to set up a home theatre', to: '/blog/home-theatre-setup-bangalore-guide' },
  { label: 'Soundbar vs home theatre', to: '/blog/soundbar-vs-home-theatre' },
];

const BRANDS = [
  { name: 'JBL', to: '/jbl-dealer-bangalore' },
  { name: 'Polk Audio', to: '/polk-audio-dealer-bangalore' },
  { name: 'Monitor Audio', to: '/monitor-audio-dealer-bangalore' },
  { name: 'KEF', to: '/kef-dealer-bangalore' },
  { name: 'Klipsch', to: '/klipsch-dealer-bangalore' },
  { name: 'Denon' }, { name: 'Marantz' }, { name: 'Yamaha' },
  { name: 'Focal' }, { name: 'Bowers & Wilkins' },
  { name: 'Sony' }, { name: 'Epson' }, { name: 'BenQ' },
];

const BLR_AREAS = ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'JP Nagar', 'Jayanagar', 'Sarjapur Road', 'Electronic City', 'Marathahalli', 'Yelahanka', 'Hebbal', 'Bannerghatta', 'Malleshwaram', 'Banashankari'];
const KA_CITIES = ['Mysuru', 'Mangalore', 'Hubballi-Dharwad', 'Belgavi', 'Udupi-Manipal', 'Tumakuru'];

const FAQS = [
  { q: 'How much does a home theatre cost in Bangalore?', a: 'Home theatre installation in Bangalore ranges from ₹2.29 Lakhs (Essential 5.1) to ₹12.39 Lakhs (Gold 7.1.2 Dolby Atmos), with fully custom builds going beyond ₹15 Lakhs.' },
  { q: 'Which is the best home theatre company in Bangalore?', a: 'Qloud Tech is a top-rated home theatre company in Bangalore with 100+ Dolby Atmos installations and a perfect 5-star rating from 70 verified reviews.' },
  { q: 'What is the minimum room size for a home theatre?', a: 'A minimum of 150 sq ft is recommended for a comfortable dedicated home theatre, though we design great-sounding solutions for smaller rooms too.' },
  { q: 'Is a projector or a TV better for a home theatre?', a: 'A 4K projector delivers the true cinema experience in a light-controlled room, while a large TV suits bright living rooms. We help you choose the right display for your space.' },
];

const COPY = {
  home: {
    label: 'Home Theatre Installation · Bangalore',
    h2: 'Cinema-Grade Home Theatres, Designed & Installed',
    lead: "Qloud Tech is one of Bangalore's most trusted home theatre dealers and installers. From a compact living-room system to a fully dedicated luxury cinema room, we own the entire journey — design, supply, acoustic treatment, calibration and handover. Searching \u201chome theatre installation near me\u201d? Every project begins with a free on-site consultation and fully transparent pricing.",
    brandsIntro: "As a vendor-neutral home theatre and audio dealer in Bangalore, we supply, sell and install the world's finest brands. Wondering where to buy JBL, KEF or Klipsch speakers in Bangalore? Book a demo with us.",
    whyText: 'With 100+ home theatres delivered and a perfect 5-star rating, Qloud Tech is consistently rated among the best home theatre companies and top installers in Bangalore — from the ideal living-room setup to reference-grade dedicated cinema rooms.',
  },
  services: {
    label: 'Home Theatre & Smart Home Services · Bangalore',
    h2: 'End-to-End Home Theatre & Smart Home Services',
    lead: 'Beyond home cinema, Qloud Tech delivers complete smart-home solutions in Bangalore — home automation, CCTV security, digital door locks and networking. As established home theatre dealers, we build everything from budget living-room systems to dedicated, luxury Dolby Atmos theatres, with clear pricing and lifetime support.',
    brandsIntro: 'We are a multi-brand audio and home theatre dealer in Bangalore, supplying and professionally installing premium speakers, AV receivers and 4K projectors from the brands below.',
    whyText: 'Rated among the best home theatre companies and top installers in Bangalore — 100+ projects, 450+ happy customers and a 5-star rating from 70 verified reviews. We deliver the right solution for your space and budget.',
  },
};

const SeoKeywordSection = ({ variant = 'home' }) => {
  const c = COPY[variant] || COPY.home;

  return (
    <section className="py-24 bg-[#0a0e1a] relative overflow-hidden" data-testid={`seo-content-${variant}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> {c.label}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">{c.h2}</h2>
          <p className="text-gray-400 leading-relaxed">{c.lead}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/services/home-theatre" data-testid="seo-cta-service" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm">
              Home Theatre Service <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/packages" data-testid="seo-cta-packages" className="inline-flex items-center gap-2 border border-cyan-500/40 text-cyan-400 font-semibold px-6 py-3 rounded-full hover:bg-cyan-500/10 transition-colors text-sm">
              View Packages from ₹2.29L
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s) => (
            <div key={s.label} className="text-center p-5 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-900/20 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">{s.value}</div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Configurations + Includes */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-900/20 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <Layers className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Dolby Atmos &amp; Speaker Configurations</h3>
            </div>
            <p className="text-gray-400 text-sm mb-5">We design every popular surround-sound configuration, from classic 5.1 to true overhead Dolby Atmos:</p>
            <div className="flex flex-wrap gap-2.5">
              {CONFIGS.map((cfg) => (
                <div key={cfg.label} className="px-4 py-2 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-center">
                  <div className="text-white font-bold">{cfg.label}</div>
                  <div className="text-cyan-400/80 text-[10px] uppercase tracking-wide">{cfg.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-900/20 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <Film className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">What Every Installation Includes</h3>
            </div>
            <ul className="space-y-3">
              {INCLUDES.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {item.text}
                    {item.to && (
                      <> — <Link to={item.to} className="text-cyan-400 hover:text-cyan-300">{item.linkText}</Link></>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Helpful guides */}
        <div className="mb-16">
          <p className="text-gray-500 text-sm mb-3 font-medium">Helpful guides:</p>
          <div className="flex flex-wrap gap-2.5">
            {GUIDES.map((g) => (
              <Link key={g.to} to={g.to} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 text-gray-300 text-sm hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">
                {g.label} <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-900/20 border border-gray-800 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <Volume2 className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Audio Brands We Supply &amp; Install</h3>
          </div>
          <p className="text-gray-400 text-sm mb-6 max-w-3xl">{c.brandsIntro}</p>
          <div className="flex flex-wrap gap-2.5">
            {BRANDS.map((b) => b.to ? (
              <Link key={b.name} to={b.to} className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 transition-colors">
                {b.name} <span className="text-cyan-400/60 text-[10px] uppercase">Dealer</span>
              </Link>
            ) : (
              <span key={b.name} className="px-4 py-2 rounded-full bg-gray-900/60 border border-gray-800 text-gray-300 text-sm">{b.name}</span>
            ))}
          </div>
          <Link to="/blog/home-theatre-audio-brand-dealers-bangalore" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold mt-6">
            Where to buy these brands in Bangalore <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Areas + Why (2 col) */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-900/20 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Areas We Serve</h3>
            </div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Across Bangalore</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {BLR_AREAS.map((a) => (
                <span key={a} className="px-3 py-1.5 rounded-lg bg-gray-900/60 border border-gray-800 text-gray-300 text-xs">{a}</span>
              ))}
            </div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Across Karnataka</p>
            <div className="flex flex-wrap gap-2">
              {KA_CITIES.map((a) => (
                <span key={a} className="px-3 py-1.5 rounded-lg bg-cyan-500/5 border border-cyan-500/20 text-cyan-300/90 text-xs">{a}</span>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-gray-900/20 border border-cyan-500/25 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">The Best Home Theatre Company in Bangalore</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{c.whyText}</p>
            <div className="flex items-center gap-1 mb-4">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />)}
              <span className="text-gray-400 text-sm ml-2">5.0 from 70 verified reviews</span>
            </div>
            <Link to="/blog/best-home-theatre-company-bangalore" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
              See our best home theatre company comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* FAQ accordion */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Popular Questions</h3>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group rounded-xl bg-gradient-to-br from-gray-900/70 to-gray-900/20 border border-gray-800 open:border-cyan-500/30 transition-colors" data-testid={`seo-faq-${i}`}>
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                  <span className="text-white font-semibold text-sm md:text-base">{f.q}</span>
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-5 pb-5 -mt-1 text-gray-400 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeoKeywordSection;
