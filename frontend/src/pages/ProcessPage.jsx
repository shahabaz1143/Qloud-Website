import React, { useEffect } from 'react';
import Header from '../components/Header';
import Process from '../components/Process';
import Footer from '../components/Footer';
import { Phone, MessageCircle, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const PROCESS_FAQS = [
  {
    q: 'How long does a home theatre installation take in Bangalore?',
    a: 'A standard 5.1 setup takes 3–4 days (1 day pre-wiring, 1 day acoustic, 1 day equipment, 1 day calibration). A full Dolby Atmos 7.1.4 with acoustic treatment takes 7–10 working days. We schedule installation Monday–Saturday from 9 AM to 6 PM with minimal disruption to your household.'
  },
  {
    q: 'Do I need to vacate my home during installation?',
    a: 'No. We work on the specific room while you continue living in the rest of the home. We seal off the work area, use dust extractors, and clean up at the end of each day. You\'ll only be unable to use the AV room itself during active install days.'
  },
  {
    q: 'What preparation do I need to do before installation?',
    a: 'Just three things: (1) Clear the room of personal items and fragile decor, (2) Ensure parking is available for our installation van, (3) Inform your apartment association/security about our team if applicable. We bring all tools, drop sheets, ladders, and consumables.'
  },
  {
    q: 'What happens after installation? Is there ongoing support?',
    a: 'Yes. Every installation includes a 30-day "settle-in" check-up where we revisit, recalibrate, and answer questions. After that, you have lifetime phone/WhatsApp support, an annual paid service plan (₹5,000–₹15,000 depending on package), and an on-call repair service for any issue not covered under warranty.'
  },
  {
    q: 'Can you handle the civil work (false ceiling, electrical points, paneling)?',
    a: 'Yes — Qloud Tech provides end-to-end execution including false ceilings, hidden conduit routing, fresh electrical points, acoustic wall paneling, and even minor carpentry like custom AV consoles. This avoids the typical "blame game" between electrician, carpenter, and AV installer.'
  },
  {
    q: 'When do I pay? Is there an advance amount?',
    a: 'We follow a transparent 3-stage milestone payment: 30% advance to lock the installation date, 50% on installation start (equipment unboxing), 20% on handover after demo & calibration. No-cost EMI is available on packages ₹3L+ through HDFC, Bajaj Finserv, and ICICI.'
  }
];

const ProcessPage = () => {
  useEffect(() => {
    document.title = 'Our Installation Process | Home Theatre Setup Bangalore | Qloud Tech';

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
      'How Qloud Tech installs home theatre and smart home systems in Bangalore — transparent 5-step process from free consultation to handover. Typical timeline: 3–10 days.'
    );

    // FAQ Schema
    const existing = document.getElementById('process-schema');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = 'process-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": PROCESS_FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.title = 'Qloud Tech | Home Theatre & Smart Home Automation';
      const s = document.getElementById('process-schema');
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
              <li className="text-white">Process</li>
            </ol>
          </nav>
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Transparent Workflow
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our 5-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Installation Process</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              No surprises, no delays, no half-done work. From the first phone call to the final demo, here's exactly how Qloud Tech delivers home theatres and smart home systems across Bangalore.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-white">48 hrs</div>
                <div className="text-sm text-gray-400">From enquiry to detailed quotation</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
                <Calendar className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-white">3–10 days</div>
                <div className="text-sm text-gray-400">Average installation timeline</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Successful Bangalore installations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />

      {/* Why our process is different */}
      <section className="py-16 bg-[#070a13]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Why Bangalore Customers <span className="text-cyan-400">Trust Our Process</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">After 500+ home theatre and home automation installations across Bangalore, we've refined every step to eliminate the friction that plagues most AV/electrical contractors.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: 'Single point of accountability', d: 'One project manager from quote to handover — no juggling between electrician, carpenter, and AV installer. Every issue routes through one number.' },
              { t: 'Detailed CAD layouts before purchase', d: 'You see the exact speaker placement, projector throw, screen size, and cable routing on paper before any equipment is ordered. Zero surprises.' },
              { t: 'In-house certified technicians', d: 'We don\'t subcontract. Our team is trained on Dolby, Sony, JBL, Denon, Crestron, Lutron, and HDL systems — and they\'re Qloud employees with skin in the game.' },
              { t: 'Daily progress updates with photos', d: 'You\'ll get a WhatsApp message every evening with photos of the day\'s work, what\'s next, and any decisions needed from you.' },
              { t: 'Mid-installation calibration checks', d: 'We don\'t wait till the end to test — we verify acoustic response, projector geometry, and signal flow at every stage so issues are caught early.' },
              { t: 'Comprehensive handover demo', d: 'On day 1 of completion, we spend 60–90 minutes training your family on the remote, voice commands, app scenes, and basic troubleshooting.' }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-gradient-to-br from-gray-900/60 to-gray-900/30 rounded-xl border border-gray-800">
                <h3 className="text-white font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-installation checklist */}
      <section className="py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            What You Need to <span className="text-cyan-400">Prepare</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">A simple 6-point checklist to ensure your installation in Bangalore goes smoothly. We handle 95% of the work — you handle these basics.</p>

          <ol className="space-y-4">
            {[
              { t: 'Clear the installation room', d: 'Remove personal items, fragile decor, electronics, and rugs from the AV room. We\'ll cover floors and walls with drop sheets, but starting with an empty room speeds things up by ~1 day.' },
              { t: 'Confirm parking availability', d: 'Reserve 1 parking slot near your block for our installation van (typically a Tata Ace or Force Tempo Traveller). For high-rise apartments, inform building security 24 hours ahead.' },
              { t: 'Notify your apartment association', d: 'If your building has restrictions on civil work hours, drilling, or contractor entry, please share those rules with us in advance so we can plan around them.' },
              { t: 'Ensure electrical capacity', d: 'A Dolby Atmos setup with projector needs a dedicated 16A circuit. We\'ll inspect your DB during the consultation and request changes from your electrician if needed.' },
              { t: 'Identify decision-makers', d: 'Lock in who in your family will sign off on final speaker placement, projector height, and seating layout — saves last-minute rework on installation day.' },
              { t: 'Be available for handover demo', d: 'Block 90 minutes on the final day for our handover walkthrough. We\'ll show every feature, set up your phone with the app, and answer all questions.' }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 p-5 bg-gradient-to-br from-gray-900/60 to-gray-900/30 rounded-xl border border-gray-800">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-cyan-500 text-black font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#070a13]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Process <span className="text-cyan-400">FAQs</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">The questions Bangalore customers most often ask before booking.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {PROCESS_FAQS.map((faq, i) => (
              <details key={i} className="group p-5 bg-gradient-to-br from-gray-900/60 to-gray-900/30 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-colors">
                <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center gap-3">
                  <span>{faq.q}</span>
                  <span className="text-cyan-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-sky-500/10 border border-cyan-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to schedule a free consultation?</h3>
            <p className="text-gray-300 mb-5">A senior designer will visit your home in Bangalore within 48 hours.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-6 py-3 rounded-lg">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </Button>
              <Button onClick={() => window.open('tel:+917204746043')} variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-lg">
                <Phone className="w-4 h-4 mr-2" /> Call +91 72047 46043
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessPage;
