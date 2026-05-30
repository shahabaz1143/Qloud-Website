import React, { useEffect } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Phone, MessageCircle, Mail, MapPin, Clock, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

const CONTACT_FAQS = [
  {
    q: 'How quickly will you respond to my enquiry?',
    a: 'WhatsApp & phone enquiries are answered within 30 minutes during business hours (Mon–Sat, 9 AM – 8 PM). Web form submissions get a response within 2 hours during the day, or by the next business morning if submitted after 8 PM.'
  },
  {
    q: 'Do you charge for the initial consultation?',
    a: 'No. The first on-site consultation in Bangalore is completely free, with no obligation to book. A senior designer visits your home, measures the space, photographs it, and emails you a detailed proposal within 48 hours.'
  },
  {
    q: 'Which areas of Bangalore do you serve?',
    a: 'We cover all of Bangalore including Whitefield, Koramangala, HSR Layout, Indiranagar, JP Nagar, Sarjapur, Electronic City, Marathahalli, Yelahanka, Hebbal, Malleshwaram, Banashankari, Bannerghatta Road, Jayanagar, Rajajinagar, Hennur, RR Nagar, Devanahalli, and surrounding areas within 50km.'
  },
  {
    q: 'Can you visit on weekends?',
    a: 'Yes. We schedule on-site consultations Monday through Saturday, 9 AM to 7 PM. Sunday visits are available on request for an extra ₹500 travel surcharge.'
  },
  {
    q: 'What information should I share when I first contact you?',
    a: 'Helpful (but not required) information: (1) Approximate room dimensions, (2) Photos of the space, (3) Your rough budget range, (4) Whether you have existing equipment to integrate, (5) Your preferred timeline. Don\'t worry if you don\'t have all this — we figure it out together during the consultation.'
  },
  {
    q: 'Do you handle commercial / hospitality projects too?',
    a: 'Yes. Beyond residential, we install commercial-grade AV and automation for boutique hotels, conference rooms, restaurants, salons, and retail showrooms across Bangalore. Commercial enquiries usually need a 7–10 day lead time for the first consultation.'
  }
];

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Qloud Tech | Home Theatre & Smart Home Bangalore';

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
      'Contact Qloud Tech for home theatre & smart home automation in Bangalore. Call +91 7204746043, WhatsApp, or book a free on-site consultation. 30-minute response time.'
    );

    // FAQ Schema
    const existing = document.getElementById('contact-schema');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = 'contact-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": CONTACT_FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.title = 'Qloud Tech | Home Theatre & Smart Home Automation';
      const s = document.getElementById('contact-schema');
      if (s) s.remove();
    };
  }, []);

  const openWhatsApp = () => window.open('https://wa.me/917204746043', '_blank');

  return (
    <div className="App bg-[#0a0e1a]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-cyan-400">Home</a></li>
              <li>/</li>
              <li className="text-white">Contact</li>
            </ol>
          </nav>
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
              We're Here to Help
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Touch</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're planning a Dolby Atmos home theatre, full home automation, or just need expert advice — reach out and a senior designer will respond within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-8 bg-[#0a0e1a]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <button onClick={() => window.open('tel:+917204746043')} className="text-left p-6 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-900/30 border border-gray-800 hover:border-cyan-500/40 transition-colors">
              <Phone className="w-6 h-6 text-cyan-400 mb-3" />
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call us</div>
              <div className="text-white font-semibold text-lg">+91 72047 46043</div>
              <div className="text-gray-400 text-sm mt-2">Mon–Sat, 9 AM – 8 PM</div>
            </button>

            <button onClick={openWhatsApp} className="text-left p-6 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-900/30 border border-gray-800 hover:border-cyan-500/40 transition-colors">
              <MessageCircle className="w-6 h-6 text-cyan-400 mb-3" />
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">WhatsApp</div>
              <div className="text-white font-semibold text-lg">Chat with us</div>
              <div className="text-gray-400 text-sm mt-2">30-min average response</div>
            </button>

            <a href="mailto:hello@qloudsmarthomes.com" className="text-left p-6 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-900/30 border border-gray-800 hover:border-cyan-500/40 transition-colors block">
              <Mail className="w-6 h-6 text-cyan-400 mb-3" />
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
              <div className="text-white font-semibold text-base break-all">hello@qloudsmarthomes.com</div>
              <div className="text-gray-400 text-sm mt-2">2-hour response in office hours</div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <Contact />

      {/* Service area */}
      <section className="py-16 bg-[#070a13]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Bangalore Service <span className="text-cyan-400">Area</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">We provide on-site installation, consultation, and after-sales support across all of Bangalore and a 50 km radius.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2"><MapPin className="w-5 h-5" /> Primary coverage areas</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
                {['Whitefield', 'Koramangala', 'HSR Layout', 'Indiranagar', 'JP Nagar', 'Sarjapur Road', 'Electronic City', 'Marathahalli', 'Yelahanka', 'Hebbal', 'Malleshwaram', 'Banashankari', 'Bannerghatta Road', 'Jayanagar', 'Rajajinagar', 'BTM Layout', 'Bellandur', 'Kanakapura Road'].map(area => (
                  <li key={area} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-400" /> {area}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Business hours</h3>
                <p className="text-gray-400 text-sm">Monday – Saturday: 9 AM – 8 PM<br/>Sunday: By appointment</p>
              </div>
              <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
                <Zap className="w-5 h-5 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Emergency support</h3>
                <p className="text-gray-400 text-sm">Existing customers get 24/7 WhatsApp support for critical issues (system down, security alerts, etc.).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Common <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">Quick answers before you reach out.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {CONTACT_FAQS.map((faq, i) => (
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

export default ContactPage;
