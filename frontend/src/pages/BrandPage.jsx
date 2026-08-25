import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import Header from '../components/Header';

// Brand dealer landing pages — target high-intent, low-competition queries
// like "JBL dealer Bangalore", "KEF dealer Bangalore", etc.
export const brandData = {
  jbl: {
    name: 'JBL',
    slug: 'jbl-dealer-bangalore',
    metaTitle: 'JBL Dealer & Home Theatre Installer in Bangalore | Qloud Tech',
    metaDescription: 'Looking for a JBL dealer in Bangalore? Qloud Tech supplies & professionally installs the full JBL home theatre range — Stage, Studio & JBL Synthesis. Free demo & quote. Call +91 72047 46043.',
    h1: 'JBL Dealer in Bangalore',
    tagline: 'Authentic cinema sound for your home',
    heroImage: 'https://images.pexels.com/photos/9131040/pexels-photo-9131040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    intro: 'Qloud Tech is your trusted JBL dealer and professional home theatre installer in Bangalore. JBL powers more commercial cinemas worldwide than any other brand — and we bring that authentic, dynamic movie-theatre sound into your home with expert design, calibration and installation.',
    series: [
      { name: 'JBL Stage Series', desc: 'Affordable floorstanding & bookshelf speakers with big, dynamic sound.' },
      { name: 'JBL Studio Series', desc: 'High-output speakers with horn-loaded tweeters for lively home cinema.' },
      { name: 'JBL Synthesis', desc: 'Flagship reference home cinema systems used in premium private theatres.' },
      { name: 'JBL Bar Soundbars', desc: 'Dolby Atmos soundbars for living-room setups.' },
    ],
  },
  'polk-audio': {
    name: 'Polk Audio',
    slug: 'polk-audio-dealer-bangalore',
    metaTitle: 'Polk Audio Dealer in Bangalore | Speakers & Home Theatre | Qloud Tech',
    metaDescription: 'Polk Audio dealer in Bangalore. Qloud Tech supplies & installs Polk Reserve, Signature Elite & Monitor XT speakers for home theatre. American hi-fi value. Free demo. Call +91 72047 46043.',
    h1: 'Polk Audio Dealer in Bangalore',
    tagline: 'American hi-fi value that punches above its price',
    heroImage: 'https://images.unsplash.com/photo-1724061409979-420a38c25bcc?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
    intro: 'Qloud Tech is a Polk Audio dealer and installer in Bangalore. Polk delivers big, warm, room-filling sound at a sensible price — a favourite for first-time home theatre buyers who want excellent performance per rupee, professionally set up.',
    series: [
      { name: 'Polk Reserve Series', desc: 'Award-winning speakers with Pinnacle tweeter — reference sound, real value.' },
      { name: 'Polk Signature Elite', desc: 'Versatile home theatre range for 5.1 and Dolby Atmos setups.' },
      { name: 'Polk Monitor XT', desc: 'Entry range that delivers clean, detailed sound on a budget.' },
      { name: 'Polk Subwoofers', desc: 'Powered subs for deep, controlled home theatre bass.' },
    ],
  },
  'monitor-audio': {
    name: 'Monitor Audio',
    slug: 'monitor-audio-dealer-bangalore',
    metaTitle: 'Monitor Audio Dealer in Bangalore | British Hi-Fi Speakers | Qloud Tech',
    metaDescription: 'Monitor Audio dealer in Bangalore. Qloud Tech supplies & installs Bronze, Silver & Gold series plus in-wall/in-ceiling speakers. British audiophile sound. Free demo. Call +91 72047 46043.',
    h1: 'Monitor Audio Dealer in Bangalore',
    tagline: 'Refined British sound with beautiful finishes',
    heroImage: 'https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
    intro: 'Qloud Tech is a Monitor Audio dealer and installer in Bangalore. Loved by audiophiles for detailed, refined sound and premium finishes, Monitor Audio is ideal for clean, flush-mounted home theatres and whole-home audio in Bangalore villas and apartments.',
    series: [
      { name: 'Bronze Series', desc: 'Best-selling entry audiophile speakers with superb clarity.' },
      { name: 'Silver Series', desc: 'Refined mid-range for serious home theatre and music.' },
      { name: 'Gold Series', desc: 'High-end speakers with ceramic-coated drivers.' },
      { name: 'In-Wall & In-Ceiling', desc: 'Discreet architectural speakers for invisible installs.' },
    ],
  },
  kef: {
    name: 'KEF',
    slug: 'kef-dealer-bangalore',
    metaTitle: 'KEF Dealer in Bangalore | Uni-Q Reference Speakers | Qloud Tech',
    metaDescription: 'KEF dealer in Bangalore. Qloud Tech supplies & installs KEF Q, R and Reference series plus discreet architectural speakers. Uni-Q reference sound. Free demo. Call +91 72047 46043.',
    h1: 'KEF Dealer in Bangalore',
    tagline: 'Uni-Q reference sound, design-first',
    heroImage: 'https://images.pexels.com/photos/5053988/pexels-photo-5053988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    intro: "Qloud Tech is a KEF dealer and installer in Bangalore. KEF's patented Uni-Q driver produces an exceptionally wide, natural soundstage — a top choice for design-conscious homeowners who want reference sound without visual clutter.",
    series: [
      { name: 'KEF Q Series', desc: 'Uni-Q sound at an accessible price for home theatre.' },
      { name: 'KEF R Series', desc: 'High-performance speakers for dedicated cinema rooms.' },
      { name: 'KEF Reference', desc: 'Flagship reference-grade loudspeakers.' },
      { name: 'KEF Ci Architectural', desc: 'Premium in-wall & in-ceiling speakers for clean installs.' },
    ],
  },
  klipsch: {
    name: 'Klipsch',
    slug: 'klipsch-dealer-bangalore',
    metaTitle: 'Klipsch Dealer in Bangalore | Horn-Loaded Home Theatre | Qloud Tech',
    metaDescription: 'Klipsch dealer in Bangalore. Qloud Tech supplies & installs Klipsch Reference, Reference Premiere & Heritage speakers. Dynamic horn-loaded sound. Free demo. Call +91 72047 46043.',
    h1: 'Klipsch Dealer in Bangalore',
    tagline: 'High-efficiency, effortless dynamics',
    heroImage: 'https://images.unsplash.com/photo-1724061409979-420a38c25bcc?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
    intro: "Qloud Tech is a Klipsch dealer and installer in Bangalore. Klipsch's horn-loaded speakers are famous for high efficiency and effortless, punchy dynamics — perfect for large rooms and action-movie lovers who want their home theatre to hit hard.",
    series: [
      { name: 'Reference Series', desc: 'Great-value horn-loaded speakers for lively home theatre.' },
      { name: 'Reference Premiere', desc: 'Upgraded drivers and cabinets for dedicated cinema rooms.' },
      { name: 'Heritage Series', desc: 'Legendary hand-built speakers — the pinnacle of Klipsch.' },
      { name: 'Klipsch Subwoofers', desc: 'Powerful subs for cinematic low-end impact.' },
    ],
  },
};

const whyPoints = [
  'Genuine products with full manufacturer warranty',
  'Free in-person demo & room assessment across Bangalore',
  'Correct model & amplifier matching for your room size',
  'Professional installation, acoustic treatment & calibration',
  'Transparent packages from ₹2.29 Lakhs',
  'Lifetime technical support & 5-star service (70 reviews)',
];

const BrandPage = ({ slug }) => {
  const brand = brandData[slug];

  useEffect(() => {
    if (!brand) return;
    document.title = brand.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', brand.metaDescription);

    const url = `https://www.qloudsmarthomes.com/${brand.slug}`;
    const existing = document.getElementById('brand-schema');
    if (existing) existing.remove();

    const faqs = [
      { q: `Where can I buy ${brand.name} speakers in Bangalore?`, a: `Qloud Tech is a ${brand.name} dealer and professional installer in Bangalore. We supply, demo, install and calibrate the full ${brand.name} home theatre range. Call +91 72047 46043 for availability and a quote.` },
      { q: `Do you provide a demo before I buy ${brand.name}?`, a: `Yes. We arrange a demo and a free on-site room assessment so you can hear ${brand.name} before deciding on a model.` },
      { q: `Do you install ${brand.name} speakers, or only sell them?`, a: `We do both. Qloud Tech supplies and professionally installs ${brand.name} — including acoustic treatment, amplifier matching and calibration — for the best possible sound.` },
    ];

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Qloud Tech — ${brand.h1}`,
      "description": brand.metaDescription,
      "url": url,
      "telephone": "+91-7204746043",
      "email": "contact@qloudsmarthomes.com",
      "image": brand.heroImage,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor 11, 102/1, above Sufyan, Geddalahalli, Rammana Layout, Kothanur, Byrathi",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560077",
        "addressCountry": "IN"
      },
      "areaServed": { "@type": "City", "name": "Bangalore" },
      "priceRange": "₹₹",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "70" }
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.qloudsmarthomes.com" },
        { "@type": "ListItem", "position": 2, "name": brand.h1, "item": url }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const script = document.createElement('script');
    script.id = 'brand-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([localBusiness, breadcrumb, faqSchema]);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('brand-schema');
      if (s) s.remove();
    };
  }, [brand]);

  const openWhatsApp = () => {
    const message = `Hi, I'm interested in ${brand.name} home theatre speakers in Bangalore. Please share details.`;
    window.open(`https://wa.me/917204746043?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!brand) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Brand Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const faqs = [
    { q: `Where can I buy ${brand.name} speakers in Bangalore?`, a: `Qloud Tech is a ${brand.name} dealer and professional installer in Bangalore. We supply, demo, install and calibrate the full ${brand.name} home theatre range. Call +91 72047 46043 for availability and a quote.` },
    { q: `Do you provide a demo before I buy ${brand.name}?`, a: `Yes. We arrange a demo and a free on-site room assessment so you can hear ${brand.name} before deciding on a model.` },
    { q: `Do you install ${brand.name} speakers, or only sell them?`, a: `We do both. Qloud Tech supplies and professionally installs ${brand.name} — including acoustic treatment, amplifier matching and calibration — for the best possible sound.` },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <img src={brand.heroImage} alt={`${brand.name} home theatre speakers in Bangalore`} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0e1a]/80 to-[#0a0e1a]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-16">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-cyan-400">{brand.h1}</span>
          </nav>
          <div className="max-w-4xl">
            <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Authorised Dealer & Installer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="brand-h1">{brand.h1}</h1>
            <p className="text-lg text-cyan-300 mb-5">{brand.tagline}</p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{brand.intro}</p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={openWhatsApp} data-testid="brand-whatsapp-btn" className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-8 py-6 rounded-full text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button onClick={() => window.open('tel:+917204746043')} data-testid="brand-call-btn" variant="outline" className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-6 rounded-full text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Series / ranges */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {brand.name} <span className="text-cyan-400">Ranges We Supply</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {brand.series.map((s, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-gray-900/60 to-gray-900/20 rounded-xl border border-gray-800">
                <h3 className="text-white font-semibold text-lg mb-2">{s.name}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why buy from Qloud */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Buy {brand.name} from <span className="text-cyan-400">Qloud Tech</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl border border-cyan-500/20">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked <span className="text-cyan-400">Questions</span></h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">Explore more:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services/home-theatre" className="text-cyan-400 hover:text-cyan-300 font-semibold">Home Theatre Installation</Link>
            <span className="text-gray-700">·</span>
            <Link to="/blog/home-theatre-audio-brand-dealers-bangalore" className="text-cyan-400 hover:text-cyan-300 font-semibold">All Audio Brands We Carry</Link>
            <span className="text-gray-700">·</span>
            <Link to="/blog/best-home-theatre-brands-india" className="text-cyan-400 hover:text-cyan-300 font-semibold">Best Home Theatre Brands</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 rounded-3xl border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Book a Free {brand.name} Demo</h2>
            <p className="text-gray-400 mb-8">Hear the difference before you buy. Free consultation across Bangalore.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-8 py-6 rounded-full text-lg">
                WhatsApp Us
              </Button>
              <Button onClick={() => window.open('tel:+917204746043')} variant="outline" className="border-2 border-white/30 text-white px-8 py-6 rounded-full text-lg">
                +91 72047 46043
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2024 Qloud Tech. All Rights Reserved. | Part of Qloud Smart Homes</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block">www.qloudsmarthomes.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default BrandPage;
