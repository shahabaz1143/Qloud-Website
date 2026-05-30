import React, { useEffect } from 'react';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import { Check, Shield, CreditCard, Wrench, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const PACKAGE_FAQS = [
  {
    q: 'What is the starting price of a home theatre installation in Bangalore?',
    a: "Our Essential Package starts at ₹2,29,000 (₹2.29 lakhs) and includes high-end speakers, a subwoofer, an upscaling 4K projector, AVR, cables, and a projector mount. All packages are fully customisable based on room size and your priorities (sound vs. picture vs. seating)."
  },
  {
    q: 'What does a home automation package cost in Bangalore?',
    a: 'Entry-level home automation for a 2BHK apartment starts at ₹50,000 and covers smart switches, voice control, app-based scenes, and basic security automation. A fully automated villa with lighting, climate, security, AV, and curtains typically ranges between ₹4–12 lakhs depending on the brand mix (Lutron, Schneider, HDL, Crestron).'
  },
  {
    q: 'Are these packages customisable?',
    a: 'Yes — every package is a starting point. We re-design speaker placement, projector throw, screen size, seating layout, acoustic panels, and automation scenes based on your room, lifestyle, and budget. The price you see is what most customers pay, but we can scale up or down by ±40%.'
  },
  {
    q: 'Do you offer EMI or financing?',
    a: 'Yes. We have tie-ups with HDFC, Bajaj Finserv, and ICICI for 6–24 month no-cost EMI on packages above ₹3 lakhs. We can also split payments into 3 milestones: 30% advance, 50% on installation start, 20% on handover.'
  },
  {
    q: 'What warranty do I get?',
    a: 'All brand-name equipment carries the manufacturer warranty (1–5 years depending on the product). On top of that, we provide a 1-year workmanship warranty on installation and a 5-year extended warranty on Dolby Atmos speaker installations. Acoustic treatment carries a lifetime structural warranty.'
  },
  {
    q: 'Can I upgrade my package later?',
    a: 'Absolutely. Our modular approach means you can start with the Essential package and add Dolby Atmos height speakers, a larger projector, or smart automation in phase 2. Most customers upgrade within 18–24 months as they experience the system.'
  }
];

const PackagesPage = () => {
  useEffect(() => {
    document.title = 'Home Theatre & Smart Home Packages Bangalore | Pricing | Qloud Tech';

    const ensureMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    ensureMeta(
      'description',
      'Transparent home theatre & home automation pricing in Bangalore. Essential (₹2.29L), Budget (₹6.99L), Silver (₹9.99L), Gold (₹12.39L) packages. Free consultation, EMI available.'
    );

    // FAQ Schema
    const existing = document.getElementById('packages-schema');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = 'packages-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": PACKAGE_FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.title = 'Qloud Tech | Home Theatre & Smart Home Automation';
      const s = document.getElementById('packages-schema');
      if (s) s.remove();
    };
  }, []);

  const openWhatsApp = () => window.open('https://wa.me/917204746043', '_blank');

  return (
    <div className="App bg-[#0a0e1a]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-cyan-400">Home</a></li>
              <li>/</li>
              <li className="text-white">Packages</li>
            </ol>
          </nav>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Home Theatre & Smart Home <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Packages</span> in Bangalore
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Four ready-to-customise packages from <strong className="text-white">₹2.29 lakhs to ₹12.39 lakhs</strong>, designed for Bangalore apartments and villas. Every quote includes a free on-site consultation, professional installation, and a workmanship warranty.
            </p>
            <p className="text-gray-400 mb-8">
              Whether you're outfitting a 2BHK in Whitefield, a villa in Sarjapur, or a duplex in Koramangala, we'll right-size the package to your room dimensions, lifestyle, and budget. No hidden charges, no surprise add-ons.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-6 py-3 rounded-lg">
                <MessageCircle className="w-4 h-4 mr-2" /> Get Free Quote
              </Button>
              <Button onClick={() => window.open('tel:+917204746043')} variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-lg">
                <Phone className="w-4 h-4 mr-2" /> Call +91 72047 46043
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tiles */}
      <Pricing />

      {/* What's included matrix */}
      <section className="py-16 bg-[#0a0e1a] border-t border-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What's Included in Every <span className="text-cyan-400">Package</span>
          </h2>
          <p className="text-gray-400 mb-10">No matter which tier you choose, every Qloud Tech installation comes with these standards baked in.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Check className="w-5 h-5" />, t: 'Free on-site consultation', d: 'A senior designer visits your home in Bangalore to measure, photograph, and recommend the right system size.' },
              { icon: <Shield className="w-5 h-5" />, t: 'Manufacturer + workmanship warranty', d: '1–5 year brand warranty + 1-year Qloud workmanship + 5-year speaker installation guarantee.' },
              { icon: <Wrench className="w-5 h-5" />, t: 'Professional certified installation', d: 'Our in-house technicians are trained on Dolby, Sony, JBL, Denon, and Crestron systems — no third-party labour.' },
              { icon: <CreditCard className="w-5 h-5" />, t: 'No-cost EMI on ₹3L+ packages', d: 'Tie-ups with HDFC, Bajaj Finserv, ICICI for 6–24 month plans. Or split into 3 milestone payments.' },
              { icon: <Check className="w-5 h-5" />, t: 'Acoustic & cable planning', d: 'Every package includes pre-wiring plan, conduit routing, and acoustic damping recommendations.' },
              { icon: <Check className="w-5 h-5" />, t: 'Full system demo & training', d: 'Before handover, we walk your family through the remote, voice commands, app scenes, and maintenance basics.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-gradient-to-br from-gray-900/60 to-gray-900/30 rounded-xl border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.t}</h3>
                  <p className="text-gray-400 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="py-16 bg-[#070a13]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            How to Choose the Right <span className="text-cyan-400">Package</span>
          </h2>
          <p className="text-gray-400 mb-10">A quick guide based on what 500+ Bangalore customers have done over the past 5 years.</p>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Essential (₹2.29L) — Best for 2BHK apartments</h3>
              <p className="text-gray-300 mb-3">Ideal if your living room is 12×15 ft or smaller, and you primarily watch movies on weekends. You'll get a 5.1 channel sound system, 4K projector, and quality speakers. Perfect for first-time home theatre buyers in Bangalore who want the cinema feel without going overboard on Atmos heights.</p>
              <p className="text-sm text-gray-500">Typical buyer: Software professional, age 28–35, 2BHK in Whitefield/HSR Layout/Marathahalli</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Budget (₹6.99L) — Mid-segment with acoustic treatment</h3>
              <p className="text-gray-300 mb-3">For 14×18 ft to 16×22 ft dedicated rooms. Adds high-end speakers, wall paneling (basic acoustic treatment), and a 5-year warranty. The first tier where the room is treated for proper bass response — a noticeable jump from Essential.</p>
              <p className="text-sm text-gray-500">Typical buyer: Family of 4, owns a villa/3BHK in Sarjapur Road, Bannerghatta, JP Nagar</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800 ring-1 ring-cyan-500/30">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-cyan-400">Silver (₹9.99L) — Most popular</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold">Best value</span>
              </div>
              <p className="text-gray-300 mb-3">5.1.2 Dolby Atmos with two ceiling-mounted height speakers, edge-less 4K projection, 4-layer acoustic treatment, and premium recliners. 60% of our customers in Bangalore villas choose this tier — the sweet spot between budget and ultra-premium.</p>
              <p className="text-sm text-gray-500">Typical buyer: Family with a dedicated media room, villa in Whitefield/Sarjapur/Yelahanka</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Gold (₹12.39L+) — Audiophile / luxury setup</h3>
              <p className="text-gray-300 mb-3">7.1.2 Dolby Atmos, 300W premium speakers, 6-layer acoustic treatment, premium recliners with cup-holders and motorisation, and full smart-home integration. Built for purpose-built media rooms in villas and penthouse duplexes.</p>
              <p className="text-sm text-gray-500">Typical buyer: HNI families, luxury villas in Koramangala, Indiranagar, RMV Extension</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-gray-400 mb-10">Quick answers to the questions our Bangalore customers ask most.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {PACKAGE_FAQS.map((faq, i) => (
              <details key={i} className="group p-5 bg-gradient-to-br from-gray-900/60 to-gray-900/30 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-colors">
                <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center gap-3">
                  <span>{faq.q}</span>
                  <span className="text-cyan-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagesPage;
