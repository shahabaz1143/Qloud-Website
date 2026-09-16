import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Film, Lightbulb, Shield, Home, Wifi, Lock, Video, DoorOpen, Phone, MessageCircle, Award, Users, Clock, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SERVICES_FAQS = [
  {
    q: 'Which smart home service should I start with?',
    a: 'Most Bangalore homeowners begin with one of three: (1) Smart Switches — the cheapest entry point at ₹2,500/switch, instantly modernises your existing wiring; (2) Home Theatre — the highest "wow factor" and most-loved by families; (3) CCTV/Security — if safety is your top concern. You can always layer in automation, locks, and motorised gates in phase 2.'
  },
  {
    q: 'Do you handle the entire project end-to-end?',
    a: 'Yes. Qloud Tech delivers turnkey installations covering civil work (false ceiling, paneling), electrical (dedicated circuits, conduits), AV equipment supply, smart device installation, calibration, app setup, and family training. One point of accountability from quote to handover — no juggling between electrician, carpenter, and AV installer.'
  },
  {
    q: 'What is the difference between home automation and smart switches?',
    a: 'Smart Switches replace your existing wall switches with touch panels that you can control from an app or voice. Home Automation is the broader system that also includes climate (AC/heater), AV (TV, speakers), security (cameras, locks), blinds, and "scenes" (e.g. "Movie Night" dims lights + closes blinds + turns on the projector with one tap). Most customers start with smart switches and grow into full automation over 12–24 months.'
  },
  {
    q: 'Which brands do you work with?',
    a: 'Audio: Denon, Marantz, Yamaha, JBL, Klipsch, Bose, Polk. Projectors: Sony, Epson, BenQ, Optoma, JVC. Automation: Lutron, Crestron, HDL, Schneider Wiser, Legrand. Smart switches: HDL, Wipro, Schneider. Locks: Yale, Samsung, Godrej. Cameras: Hikvision, Dahua, Ubiquiti. We are official partners or authorised dealers for most of these brands, which gets you better prices and faster warranty support.'
  },
  {
    q: 'Do you offer free site visits in Bangalore?',
    a: 'Yes — the first on-site consultation anywhere in Bangalore (and within 50 km of the city) is completely free and has no obligation. A senior designer measures your space, photographs it, discusses your requirements, and emails you a tailored proposal within 48 hours.'
  },
  {
    q: 'Can you upgrade my existing setup?',
    a: 'Absolutely. We retrofit existing homes without breaking walls — using PVC conduit chases, retrofit smart switches that fit in standard boxes, and wireless brands (Schneider Wiser, HDL Buspro). We also troubleshoot and re-calibrate AV equipment from other installers if you\'re unhappy with the original work.'
  }
];

const services = [
  {
    slug: 'home-theatre',
    title: 'Home Theatre',
    tagline: 'Cinema Experience at Home',
    description: 'Transform any room into a cinematic experience with Dolby Atmos, 4K/8K projection, and premium audio systems.',
    icon: Film,
    image: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    startingPrice: '₹2.29L',
    features: ['Dolby Atmos', '4K Projection', 'Acoustic Treatment']
  },
  {
    slug: 'home-automation',
    title: 'Home Automation',
    tagline: 'Smart Living Made Simple',
    description: 'Control lights, climate, security, and appliances from anywhere. Voice control with Alexa and Google.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    startingPrice: '₹50K',
    features: ['Voice Control', 'App Control', 'Energy Savings']
  },
  {
    slug: 'security-systems',
    title: 'Security Systems',
    tagline: 'Protect What Matters',
    description: 'Complete security solutions with HD/4K cameras, motion detection, and 24/7 monitoring options.',
    icon: Shield,
    image: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif',
    startingPrice: '₹25K',
    features: ['4K Cameras', 'Motion Alerts', 'Cloud Storage']
  },
  {
    slug: 'smart-switches',
    title: 'Smart Touch Switches',
    tagline: 'Modern Control',
    description: 'Elegant touch switches with app control, scenes, and voice integration. No rewiring needed.',
    icon: Lightbulb,
    image: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/99fx1zh1_keypads-bg-design-mob%20%281%29.webp',
    startingPrice: '₹2.5K/switch',
    features: ['Touch Control', 'WiFi Enabled', 'Scene Setting']
  },
  {
    slug: 'networking',
    title: 'Networking Solutions',
    tagline: 'Seamless Connectivity',
    description: 'Professional mesh networks that eliminate dead zones. Fast, reliable WiFi everywhere.',
    icon: Wifi,
    image: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/by22ktly_istockphoto-1932001837-612x612.jpg',
    startingPrice: '₹15K',
    features: ['Mesh WiFi', 'No Dead Zones', 'High Speed']
  },
  {
    slug: 'digital-door-locks',
    title: 'Digital Door Locks',
    tagline: 'Keyless Security',
    description: 'Keyless entry with fingerprint, PIN, card, or smartphone. Grant temporary access remotely.',
    icon: Lock,
    image: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/emph1fnm_1_d41ba0ee-d7c8-4526-bcb2-c9b3c69a7090%20%284%29.webp',
    startingPrice: '₹15K',
    features: ['Fingerprint', 'PIN Access', 'App Control']
  },
  {
    slug: 'video-door-phones',
    title: 'Video Door Phones',
    tagline: 'See Who\'s There',
    description: 'HD video doorbells with two-way audio, motion detection, and smartphone notifications.',
    icon: Video,
    image: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/suio62mb_Video%20Door%20Phone.png',
    startingPrice: '₹8K',
    features: ['HD Video', 'Two-Way Audio', 'Night Vision']
  },
  {
    slug: 'motorised-gates',
    title: 'Motorised Gates',
    tagline: 'Automated Access',
    description: 'Automated gate systems with remote control, smartphone access, and security integration.',
    icon: DoorOpen,
    image: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/bmlu8vl4_Motorised%20Gates.jpg',
    startingPrice: '₹45K',
    features: ['Remote Control', 'App Access', 'Safety Sensors']
  }
];

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services | Home Theatre & Smart Home Solutions | Qloud Tech';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore Qloud Tech services: Home Theatre, Home Automation, Security Systems, Smart Switches, Networking, Digital Locks, Video Door Phones. Bangalore\'s #1 smart home company.');
    }

    // Add schema (ItemList + FAQ)
    const existingSchema = document.getElementById('services-list-schema');
    if (existingSchema) existingSchema.remove();

    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Qloud Tech Services",
      "description": "Smart home and home theatre services in Bangalore",
      "numberOfItems": services.length,
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `https://www.qloudsmarthomes.com/services/${service.slug}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Qloud Tech"
          }
        }
      }))
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": SERVICES_FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const script = document.createElement('script');
    script.id = 'services-list-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([servicesSchema, faqSchema]);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById('services-list-schema');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-cyan-400">Home</a></li>
              <li>/</li>
              <li className="text-white">Services</li>
            </ol>
          </nav>
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Bangalore's Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Smart Home & AV Services</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              From Dolby Atmos home theatres to full villa automation, Qloud Tech delivers eight specialised services under one roof. Every installation is designed for Bangalore homes — engineered around your room dimensions, lifestyle, and budget.
            </p>
            <p className="text-gray-400 mb-2">
              Whether you're upgrading a 2BHK apartment in Whitefield or building a luxury setup in a Sarjapur villa, our certified in-house team handles the entire project end-to-end: civil work, electrical, equipment, calibration, and lifetime support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl border border-gray-800/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-semibold">
                      From {service.startingPrice}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-cyan-400 text-sm mb-3">{service.tagline}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-cyan-400 text-sm font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Qloud Tech */}
      <section className="py-16 bg-[#070a13] border-t border-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Why Bangalore Chooses <span className="text-cyan-400">Qloud Tech</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">After 500+ installations across the city, here's what consistently sets us apart from generic AV contractors.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <Award className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Authorised brand partner</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Official dealer/partner for Denon, Sony, JBL, Lutron, Crestron, Yale, Hikvision, and more — better prices, genuine products, faster warranty.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <Users className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">In-house certified team</h3>
              <p className="text-gray-400 text-sm leading-relaxed">No subcontracted labour. Our technicians are Qloud employees, trained on every brand we install. One accountability chain from quote to handover.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <Clock className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">3–10 day turnaround</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Most home theatre installations completed in under 1 week. Daily WhatsApp progress updates with photos so you always know what's happening.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <Shield className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Transparent pricing & warranty</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Detailed quote with line items before you commit. Manufacturer warranty + 1-year workmanship + 5-year speaker installation guarantee. No surprise add-ons.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <Home className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Bangalore-specific designs</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We understand the quirks of Bangalore homes — small living rooms, low ceilings, hot-summer AC noise, monsoon humidity — and design around them.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
              <MessageCircle className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Lifetime WhatsApp support</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Even years after installation, our customers can WhatsApp us with any question — calibration drift, app issues, brand recommendations. We pick up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer's Guide */}
      <section className="py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Which Service Is <span className="text-cyan-400">Right for You?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">A quick decision-tree based on what 500+ Bangalore customers have done.</p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Just moved into a new flat?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Start with <Link to="/services/smart-switches" className="text-cyan-400 underline">smart switches</Link> + <Link to="/services/digital-door-locks" className="text-cyan-400 underline">digital locks</Link>. Cheapest entry into smart living, no rewiring needed. Add a <Link to="/services/home-theatre" className="text-cyan-400 underline">home theatre</Link> 6 months later once you've lived in the space.</p>
            </div>
            <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Movie & sports enthusiast?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Go straight to a <Link to="/services/home-theatre" className="text-cyan-400 underline">Dolby Atmos home theatre</Link>. Starts at ₹2.29L for entry, sweet spot is ₹9.99L Silver package. Pair with acoustic treatment if you have a dedicated room.</p>
            </div>
            <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Concerned about home security?</h3>
              <p className="text-gray-300 text-sm leading-relaxed"><Link to="/services/security-systems" className="text-cyan-400 underline">CCTV system</Link> + <Link to="/services/video-door-phones" className="text-cyan-400 underline">video door phone</Link> + <Link to="/services/digital-door-locks" className="text-cyan-400 underline">digital locks</Link>. Around ₹50K total for a 3-camera CCTV + smart lock + Wi-Fi door phone bundle.</p>
            </div>
            <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Building a luxury villa?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Full <Link to="/services/home-automation" className="text-cyan-400 underline">home automation</Link> + <Link to="/services/home-theatre" className="text-cyan-400 underline">dedicated home theatre</Link> + <Link to="/services/motorised-gates" className="text-cyan-400 underline">motorised gates</Link> + <Link to="/services/security-systems" className="text-cyan-400 underline">multi-zone CCTV</Link>. Typical investment ₹15–35 lakhs depending on villa size and brand mix.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#070a13]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Services <span className="text-cyan-400">FAQs</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-3xl mx-auto">Common questions Bangalore homeowners ask before booking.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {SERVICES_FAQS.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-400 mb-6">
              Get a free consultation from our experts. We'll assess your needs and recommend the perfect solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/917204746043" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-semibold px-8 py-6 rounded-full text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+917204746043">
                <Button variant="outline" className="border-2 border-gray-700 text-white hover:bg-gray-800 px-8 py-6 rounded-full text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
