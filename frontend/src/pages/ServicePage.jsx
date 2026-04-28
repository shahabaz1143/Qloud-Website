import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';

// Service data
const servicesData = {
  'home-theatre': {
    title: 'Home Theatre Installation in Bangalore',
    metaTitle: 'Home Theatre Installation Bangalore | Dolby Atmos | Qloud Tech',
    metaDescription: 'Professional home theatre installation in Bangalore. Dolby Atmos, 4K projection, acoustic treatment. Starting ₹2.29 lakhs. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Transform your living space into a cinematic paradise with our professional home theatre installation services in Bangalore. We specialize in creating immersive entertainment experiences with Dolby Atmos sound systems, 4K/8K projection, custom seating, and professional acoustic treatment.',
    features: [
      'Dolby Atmos 5.1.2 / 7.1.2 / 9.1.4 configurations',
      '4K & 8K laser projectors from Sony, Epson, BenQ',
      'Premium speakers from JBL, Denon, Focal, KEF',
      'Professional acoustic treatment & soundproofing',
      'Custom seating with recliners',
      'Smart lighting integration',
      'Voice control with Alexa & Google',
      'Dedicated project manager'
    ],
    pricing: [
      { name: 'Essential Package', price: '₹2,29,000', features: ['5.1 Speaker System', '4K Projector', 'Basic Setup'] },
      { name: 'Silver Package', price: '₹9,99,000', features: ['5.1.2 Dolby Atmos', '4K Laser Projector', '4-Layer Acoustics'] },
      { name: 'Gold Package', price: '₹12,39,000', features: ['7.1.2 Dolby Atmos', 'Premium 300W Speakers', '6-Layer Acoustics'] },
    ],
    faqs: [
      { q: 'How much space do I need for a home theatre?', a: 'A minimum of 150 sq ft is recommended, but we can design solutions for smaller spaces too. Our team will assess your room and provide customized recommendations.' },
      { q: 'How long does installation take?', a: 'Typically 3-7 days depending on the package and room preparation required. We provide a detailed timeline during consultation.' },
      { q: 'Do you provide warranty?', a: 'Yes, all our installations come with comprehensive warranty - up to 5 years on speakers and lifetime support.' },
    ]
  },
  'home-automation': {
    title: 'Home Automation Services in Bangalore',
    metaTitle: 'Home Automation Bangalore | Smart Home Solutions | Qloud Tech',
    metaDescription: 'Complete home automation solutions in Bangalore. Smart lighting, climate control, voice assistants. Starting ₹50,000. Free consultation!',
    heroImage: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    description: 'Make your home intelligent with our comprehensive home automation solutions. Control lights, climate, security, and appliances from anywhere using your smartphone or voice commands. We design systems that work seamlessly together for ultimate convenience.',
    features: [
      'Centralized control via smartphone app',
      'Voice control with Alexa, Google, Siri',
      'Smart lighting with scene settings',
      'Climate control (AC, fans, curtains)',
      'Motorized curtains & blinds',
      'Energy monitoring & optimization',
      'Integration with existing systems',
      'Remote access from anywhere'
    ],
    pricing: [
      { name: 'Starter', price: '₹50,000', features: ['Smart Lighting (1 room)', 'Voice Control', 'App Control'] },
      { name: 'Standard', price: '₹1,50,000', features: ['Whole Home Lighting', 'Climate Control', 'Security Integration'] },
      { name: 'Premium', price: '₹3,00,000+', features: ['Complete Automation', 'Custom Scenes', 'Dedicated Support'] },
    ],
    faqs: [
      { q: 'Will it work with my existing switches?', a: 'We can either replace your existing switches with smart switches or add smart modules behind them. Both options work seamlessly.' },
      { q: 'What happens during power outage?', a: 'Our systems have backup protocols. Manual control always works, and settings are restored automatically when power returns.' },
      { q: 'Can I control it when away from home?', a: 'Yes! Our cloud-connected systems allow you to control and monitor your home from anywhere in the world.' },
    ]
  },
  'security-systems': {
    title: 'Security Systems Installation in Bangalore',
    metaTitle: 'Home Security Systems Bangalore | CCTV | Smart Locks | Qloud Tech',
    metaDescription: 'Advanced home security systems in Bangalore. CCTV cameras, smart locks, motion sensors, 24/7 monitoring. Professional installation. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif',
    description: 'Protect your home and loved ones with our advanced security solutions. From HD CCTV cameras to smart locks and motion sensors, we provide comprehensive security systems with 24/7 monitoring capabilities.',
    features: [
      'HD/4K CCTV cameras with night vision',
      'Motion detection & alerts',
      'Smart door locks with multiple access modes',
      'Video door phones',
      'Intrusion detection sensors',
      'Cloud storage & local backup',
      '24/7 remote monitoring',
      'Mobile app notifications'
    ],
    pricing: [
      { name: 'Basic', price: '₹25,000', features: ['4 HD Cameras', 'DVR System', '1TB Storage'] },
      { name: 'Advanced', price: '₹75,000', features: ['8 4K Cameras', 'NVR System', 'Smart Lock', 'Video Doorbell'] },
      { name: 'Complete', price: '₹1,50,000+', features: ['Full Perimeter Security', 'Access Control', '24/7 Monitoring'] },
    ],
    faqs: [
      { q: 'Can I view cameras on my phone?', a: 'Yes, all our CCTV systems come with mobile app access. View live feed, playback recordings, and receive alerts on your phone.' },
      { q: 'How long is footage stored?', a: 'Depends on storage capacity and camera count. Typically 15-30 days locally, with optional cloud backup for longer retention.' },
      { q: 'Do you provide monitoring services?', a: 'We can integrate with professional monitoring services or set up self-monitoring with instant mobile alerts.' },
    ]
  },
  'smart-switches': {
    title: 'Smart Touch Switches in Bangalore',
    metaTitle: 'Smart Switches Bangalore | Touch Panels | WiFi Switches | Qloud Tech',
    metaDescription: 'Modern smart touch switches in Bangalore. WiFi enabled, app control, scene settings. Replace your old switches. Starting ₹2,500/switch. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/99fx1zh1_keypads-bg-design-mob%20%281%29.webp',
    description: 'Upgrade your home with elegant smart touch switches. Control lights with a simple touch, set schedules, create scenes, and integrate with your smart home ecosystem. Our switches combine style with functionality.',
    features: [
      'Elegant glass touch panels',
      'WiFi & Bluetooth connectivity',
      'App control from anywhere',
      'Voice control compatible',
      'Scene & schedule settings',
      'Energy consumption monitoring',
      'No hub required',
      'Easy retrofit installation'
    ],
    pricing: [
      { name: 'Per Switch', price: '₹2,500 - ₹5,000', features: ['Touch Panel', 'WiFi Control', 'Voice Compatible'] },
      { name: 'Room Package', price: '₹15,000 - ₹25,000', features: ['All Switches in Room', 'Scene Setup', 'App Configuration'] },
      { name: 'Whole Home', price: '₹75,000+', features: ['Complete Replacement', 'Custom Scenes', 'Integration'] },
    ],
    faqs: [
      { q: 'Do I need to change wiring?', a: 'In most cases, no. Our smart switches are designed to work with standard Indian wiring. We assess during consultation.' },
      { q: 'Will they work without internet?', a: 'Yes! Touch control and local scheduling work without internet. You need internet only for remote access and voice control.' },
      { q: 'Which brands do you offer?', a: 'We work with multiple brands including BuildTrack, Schneider, ABB, and others to match your budget and requirements.' },
    ]
  },
  'networking': {
    title: 'Home Networking Solutions in Bangalore',
    metaTitle: 'Home Networking Bangalore | WiFi Mesh | Structured Cabling | Qloud Tech',
    metaDescription: 'Professional home networking in Bangalore. Mesh WiFi, no dead zones, structured cabling. Fast reliable internet everywhere. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/by22ktly_istockphoto-1932001837-612x612.jpg',
    description: 'Eliminate WiFi dead zones with our professional networking solutions. We design and install mesh networks that provide fast, reliable connectivity in every corner of your home. Essential for smart homes with multiple devices.',
    features: [
      'Mesh WiFi systems',
      'Zero dead zones guaranteed',
      'Structured cabling (Cat6/Cat6a)',
      'Network rack setup',
      'Gigabit speeds throughout',
      'Guest network configuration',
      'Parental controls',
      'Network security setup'
    ],
    pricing: [
      { name: 'Basic Mesh', price: '₹15,000', features: ['2-Node Mesh System', 'Up to 2000 sq ft', 'Basic Setup'] },
      { name: 'Advanced Mesh', price: '₹35,000', features: ['3-4 Node System', 'Up to 4000 sq ft', 'Wired Backhaul'] },
      { name: 'Enterprise Grade', price: '₹75,000+', features: ['Structured Cabling', 'Access Points', 'Network Rack'] },
    ],
    faqs: [
      { q: 'What speed can I expect?', a: 'With proper mesh setup, you can achieve your full ISP speed (up to 1 Gbps) throughout your home.' },
      { q: 'How many devices can connect?', a: 'Our enterprise-grade solutions support 100+ simultaneous devices without performance degradation.' },
      { q: 'Do you provide structured cabling?', a: 'Yes, we offer complete structured cabling with Cat6/Cat6a for new constructions and renovations.' },
    ]
  },
  'digital-door-locks': {
    title: 'Digital Door Locks in Bangalore',
    metaTitle: 'Digital Door Locks Bangalore | Smart Locks | Fingerprint | Qloud Tech',
    metaDescription: 'Premium digital door locks in Bangalore. Fingerprint, PIN, card, app access. Yale, Godrej, Samsung. Professional installation. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/emph1fnm_1_d41ba0ee-d7c8-4526-bcb2-c9b3c69a7090%20%284%29.webp',
    description: 'Upgrade to keyless entry with our digital door locks. Access your home with fingerprint, PIN, card, or smartphone. Grant temporary access to guests, monitor entry logs, and never worry about lost keys again.',
    features: [
      'Multiple access modes (fingerprint, PIN, card, key, app)',
      'Remote access & monitoring',
      'Temporary access codes for guests',
      'Entry/exit logs',
      'Auto-lock feature',
      'Low battery alerts',
      'Emergency key backup',
      'Fire-safe unlock'
    ],
    pricing: [
      { name: 'Basic', price: '₹15,000 - ₹25,000', features: ['PIN + Card Access', 'Basic Model', 'Installation'] },
      { name: 'Premium', price: '₹30,000 - ₹50,000', features: ['Fingerprint + App', 'Premium Brand', 'Smart Integration'] },
      { name: 'High Security', price: '₹60,000+', features: ['Biometric + Face', 'Top Brand', 'Full Features'] },
    ],
    faqs: [
      { q: 'What if battery dies?', a: 'All our locks have emergency key backup and low battery alerts. Some models also support emergency power via USB.' },
      { q: 'Are they safe from hacking?', a: 'Our locks use bank-grade encryption. We only install from reputed brands like Yale, Samsung, and Godrej.' },
      { q: 'Can I give temporary access?', a: 'Yes! Generate time-limited PINs for guests, maids, or service personnel that automatically expire.' },
    ]
  },
  'video-door-phones': {
    title: 'Video Door Phones in Bangalore',
    metaTitle: 'Video Door Phone Bangalore | Video Doorbell | Intercom | Qloud Tech',
    metaDescription: 'HD video door phones in Bangalore. See visitors on phone, 2-way audio, motion alerts. Professional installation. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/suio62mb_Video%20Door%20Phone.png',
    description: 'See and speak to visitors from anywhere with our video door phone solutions. HD video quality, two-way audio, motion detection, and smartphone integration let you manage visitors even when you are away from home.',
    features: [
      'HD/Full HD video quality',
      'Two-way audio communication',
      'Motion detection & alerts',
      'Night vision',
      'Cloud & local recording',
      'Smartphone app access',
      'Multiple indoor monitors',
      'Integration with smart locks'
    ],
    pricing: [
      { name: 'Basic', price: '₹8,000 - ₹15,000', features: ['HD Camera', 'Indoor Monitor', 'Basic Intercom'] },
      { name: 'Smart', price: '₹20,000 - ₹35,000', features: ['WiFi Doorbell', 'App Access', 'Cloud Storage'] },
      { name: 'Premium', price: '₹40,000+', features: ['Full HD', 'Multiple Monitors', 'Smart Lock Integration'] },
    ],
    faqs: [
      { q: 'Can I see visitors on my phone?', a: 'Yes! Our smart video doorbells send instant notifications with live video to your smartphone.' },
      { q: 'Does it record automatically?', a: 'Yes, motion-triggered recording with cloud storage options. Never miss a visitor or package delivery.' },
      { q: 'Can it connect to my TV?', a: 'Yes, we can set up the video feed to display on your TV when someone rings the bell.' },
    ]
  },
  'motorised-gates': {
    title: 'Motorised Gates in Bangalore',
    metaTitle: 'Motorised Gates Bangalore | Automatic Gate | Gate Automation | Qloud Tech',
    metaDescription: 'Automatic motorised gates in Bangalore. Sliding & swing gates, remote control, smartphone access. Professional installation. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/bmlu8vl4_Motorised%20Gates.jpg',
    description: 'Automate your gates for convenience and security. Our motorised gate solutions include sliding gates, swing gates, and boom barriers with remote control, smartphone access, and integration with your home security system.',
    features: [
      'Sliding & swing gate motors',
      'Remote control operation',
      'Smartphone app control',
      'Vehicle detection sensors',
      'Safety sensors & auto-reverse',
      'Battery backup',
      'Integration with intercom',
      'Timer-based auto-close'
    ],
    pricing: [
      { name: 'Swing Gate', price: '₹35,000 - ₹60,000', features: ['Single/Double Leaf', 'Remote Control', 'Safety Sensors'] },
      { name: 'Sliding Gate', price: '₹45,000 - ₹80,000', features: ['Up to 800kg Gate', 'Remote + App', 'Full Safety'] },
      { name: 'Premium', price: '₹1,00,000+', features: ['Heavy Duty Motor', 'Smart Integration', 'UPS Backup'] },
    ],
    faqs: [
      { q: 'What if power goes out?', a: 'All our installations include battery backup for operation during power outages. Manual release is also available.' },
      { q: 'Is it safe for children & pets?', a: 'Absolutely. Safety sensors detect obstacles and auto-reverse the gate. Photoelectric beams add extra protection.' },
      { q: 'Can I open it from my phone?', a: 'Yes! Our smart gate systems allow you to open/close and monitor your gate from anywhere via smartphone.' },
    ]
  }
};

const ServicePage = () => {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

  // Update page title, meta, and inject Schema.org structured data
  useEffect(() => {
    if (service) {
      // Update title and meta description
      document.title = service.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', service.metaDescription);

      // Remove any existing service schema
      const existingSchema = document.getElementById('service-schema');
      if (existingSchema) existingSchema.remove();

      // Create Service Schema.org structured data
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Qloud Tech",
          "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/h7afabwe_cropped-Untitled-design-6.png",
          "telephone": "+91-7204746043",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": "Bangalore"
        },
        "url": `https://qloudsmarthomes.com/services/${serviceSlug}`,
        "image": service.heroImage,
        "offers": service.pricing.map(pkg => ({
          "@type": "Offer",
          "name": pkg.name,
          "price": pkg.price.replace(/[₹,]/g, ''),
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": `${service.title} - ${pkg.name}`
          }
        }))
      };

      // Create FAQ Schema
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      };

      // Create BreadcrumbList Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://qloudsmarthomes.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://qloudsmarthomes.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://qloudsmarthomes.com/services/${serviceSlug}`
          }
        ]
      };

      // Create HowTo Schema for installation process
      const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Get ${service.title} Installed`,
        "description": `Step-by-step process for booking and installing ${service.title} with Qloud Tech in Bangalore.`,
        "image": service.heroImage,
        "totalTime": "P3DT0H",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": (service.pricing && service.pricing[0] ? service.pricing[0].price.replace(/[₹,]/g, '') : "0")
        },
        "supply": [
          { "@type": "HowToSupply", "name": "Existing space or room" },
          { "@type": "HowToSupply", "name": "Power supply & internet connection" }
        ],
        "tool": [
          { "@type": "HowToTool", "name": "Professional installation tools" }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Free Consultation",
            "text": "Contact Qloud Tech via WhatsApp or phone to schedule a free on-site consultation in Bangalore. Our experts assess your space and requirements.",
            "url": `https://qloudsmarthomes.com/services/${serviceSlug}#consultation`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Custom Design & Quote",
            "text": "Receive a tailored design proposal with brand recommendations, layout, and a transparent quotation within 48 hours.",
            "url": `https://qloudsmarthomes.com/services/${serviceSlug}#design`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Approval & Scheduling",
            "text": "Approve the design and book your installation date. Pay an initial advance to confirm.",
            "url": `https://qloudsmarthomes.com/services/${serviceSlug}#scheduling`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Professional Installation",
            "text": "Our certified technicians complete the installation with minimal disruption, typically within 3-7 days depending on the package.",
            "url": `https://qloudsmarthomes.com/services/${serviceSlug}#installation`
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Demo, Handover & Support",
            "text": "Get a complete walkthrough of your new system. We provide warranty, after-sales support, and lifetime guidance.",
            "url": `https://qloudsmarthomes.com/services/${serviceSlug}#support`
          }
        ]
      };

      // Inject schema script
      const script = document.createElement('script');
      script.id = 'service-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema, howToSchema]);
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const schemaScript = document.getElementById('service-schema');
        if (schemaScript) schemaScript.remove();
      };
    }
  }, [service, serviceSlug]);

  const openWhatsApp = () => {
    if (!service) return;
    const message = `Hi, I'm interested in ${service.title}. Please provide more details.`;
    window.open(`https://wa.me/917204746043?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" aria-label="Qloud Tech Home" data-testid="header-logo" className="flex-shrink-0 group">
            <img
              src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png"
              alt="Qloud Tech Logo"
              className="h-6 brightness-0 invert transition-all duration-300 group-hover:scale-105 group-hover:[filter:brightness(0)_invert(1)_drop-shadow(0_0_8px_rgba(0,212,255,0.7))]"
            />
          </Link>
          <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-6 py-2 rounded-lg">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0e1a]/80 to-[#0a0e1a]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-cyan-400">{service.title}</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
              OUR SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-8 py-6 rounded-full text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button onClick={() => window.open('tel:+917204746043')} variant="outline" className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-6 rounded-full text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What's <span className="text-cyan-400">Included</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl border border-cyan-500/20">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Pricing <span className="text-cyan-400">Packages</span></h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.pricing.map((pkg, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border ${idx === 1 ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5' : 'border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-900/30'}`}>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <Check className="w-4 h-4 text-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button onClick={openWhatsApp} className={`w-full py-4 rounded-lg ${idx === 1 ? 'bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked <span className="text-cyan-400">Questions</span></h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (matches HowTo schema) */}
      <section className="py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                How It <span className="text-cyan-400">Works</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A transparent, hassle-free 5-step process from consultation to handover.
              </p>
            </div>

            <ol className="grid md:grid-cols-5 gap-4">
              {[
                { t: 'Free Consultation', d: 'On-site visit to assess your space & needs.' },
                { t: 'Custom Design', d: 'Tailored proposal & quote within 48 hours.' },
                { t: 'Approval', d: 'Confirm design and book installation date.' },
                { t: 'Installation', d: 'Certified technicians complete in 3-7 days.' },
                { t: 'Handover & Support', d: 'Demo, warranty & lifetime guidance.' }
              ].map((step, idx) => (
                <li
                  key={idx}
                  className="relative p-5 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-gray-800 hover:border-cyan-500/40 transition-colors"
                  data-testid={`howto-step-${idx + 1}`}
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-bold flex items-center justify-center mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{step.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 rounded-3xl border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8">Contact us today for a free consultation and quote</p>
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

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2024 Qloud Tech. All Rights Reserved. | Part of Qloud Smart Homes</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block">www.qloudsmarthomes.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default ServicePage;
