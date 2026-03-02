import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Phone, MessageCircle, MapPin, Star, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';

// Location-specific landing page data
const locationData = {
  'home-theatre-bangalore': {
    service: 'Home Theatre',
    location: 'Bangalore',
    title: 'Home Theatre Installation in Bangalore',
    metaTitle: 'Home Theatre Installation Bangalore | #1 Dolby Atmos Experts | Qloud Tech',
    metaDescription: 'Professional home theatre installation in Bangalore. Dolby Atmos specialists serving Whitefield, Koramangala, Indiranagar, HSR Layout. Starting ₹2.29L. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Looking for the best home theatre installation in Bangalore? Qloud Tech is the #1 rated home theatre company serving all major areas including Whitefield, Koramangala, Indiranagar, HSR Layout, Jayanagar, and JP Nagar. With 8+ years of experience and 100+ home theatres designed, we transform your space into a cinematic paradise.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'Dolby Atmos 5.1.2 / 7.1.2 / 9.1.4 configurations',
      '4K & 8K laser projectors from Sony, Epson, BenQ',
      'Premium speakers from JBL, Denon, Focal, KEF',
      'Professional acoustic treatment & soundproofing',
      'Custom seating with recliners',
      'Smart lighting integration'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Essential', price: '₹2.29L', desc: '5.1 system, 4K projector' },
        { name: 'Silver', price: '₹9.99L', desc: '5.1.2 Dolby Atmos' },
        { name: 'Gold', price: '₹12.39L', desc: '7.1.2 Premium setup' }
      ]
    },
    stats: [
      { value: '100+', label: 'Home Theatres Built' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '24hr', label: 'Response Time' }
    ],
    testimonials: [
      { name: 'Rajesh K.', area: 'Whitefield', text: 'Amazing work! The Dolby Atmos setup is incredible. Best investment for our villa.' },
      { name: 'Priya S.', area: 'Koramangala', text: 'Professional team, delivered on time. The acoustic treatment made a huge difference.' },
      { name: 'Arun M.', area: 'HSR Layout', text: 'Exceeded expectations! The 4K projector and sound system are theater-quality.' }
    ],
    relatedService: 'home-theatre'
  },
  'home-automation-bangalore': {
    service: 'Home Automation',
    location: 'Bangalore',
    title: 'Smart Home Automation in Bangalore',
    metaTitle: 'Home Automation Bangalore | Smart Home Solutions | Qloud Tech',
    metaDescription: 'Complete smart home automation in Bangalore. Control lights, AC, security from your phone. Serving Whitefield, Koramangala, Indiranagar. Starting ₹50K. Free demo!',
    heroImage: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    description: 'Transform your Bangalore home into a smart home with Qloud Tech. We provide complete home automation solutions including smart lighting, climate control, security integration, and voice control. Serving all major localities with professional installation and lifetime support.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'Smart lighting with scene control',
      'Climate control (AC, fans, curtains)',
      'Voice control with Alexa & Google',
      'Security system integration',
      'Energy monitoring & savings',
      'Remote access from anywhere'
    ],
    pricing: {
      starting: '₹50,000',
      packages: [
        { name: 'Starter', price: '₹50K', desc: '1-2 rooms, basic control' },
        { name: 'Standard', price: '₹1.5L', desc: 'Whole home automation' },
        { name: 'Premium', price: '₹3L+', desc: 'Complete smart home' }
      ]
    },
    stats: [
      { value: '200+', label: 'Homes Automated' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '30%', label: 'Energy Savings' }
    ],
    testimonials: [
      { name: 'Vikram R.', area: 'Indiranagar', text: 'Love controlling everything from my phone. The energy savings are real!' },
      { name: 'Sneha P.', area: 'Whitefield', text: 'The voice control setup is seamless. Kids love saying "Alexa, movie time!"' },
      { name: 'Kumar S.', area: 'JP Nagar', text: 'Professional installation, great after-sales support. Highly recommended!' }
    ],
    relatedService: 'home-automation'
  },
  'security-systems-bangalore': {
    service: 'Security Systems',
    location: 'Bangalore',
    title: 'Home Security Systems in Bangalore',
    metaTitle: 'Home Security Systems Bangalore | CCTV & Smart Locks | Qloud Tech',
    metaDescription: 'Advanced home security in Bangalore. CCTV cameras, smart locks, video doorbells. Professional installation in Whitefield, Koramangala, HSR. Starting ₹25K!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif',
    description: 'Protect your Bangalore home with advanced security systems from Qloud Tech. We install HD/4K CCTV cameras, smart door locks, video door phones, and complete security solutions. 24/7 monitoring options available for complete peace of mind.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'HD/4K CCTV cameras with night vision',
      'Smart door locks with fingerprint access',
      'Video door phones with app access',
      'Motion detection & instant alerts',
      'Cloud & local storage options',
      '24/7 remote monitoring'
    ],
    pricing: {
      starting: '₹25,000',
      packages: [
        { name: 'Basic', price: '₹25K', desc: '4 HD cameras + DVR' },
        { name: 'Advanced', price: '₹75K', desc: '8 4K cameras + smart lock' },
        { name: 'Complete', price: '₹1.5L+', desc: 'Full perimeter security' }
      ]
    },
    stats: [
      { value: '500+', label: 'Homes Secured' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '24/7', label: 'Support Available' }
    ],
    testimonials: [
      { name: 'Ramesh G.', area: 'Electronic City', text: 'The 4K cameras are crystal clear. Can monitor my home from office anytime.' },
      { name: 'Meera K.', area: 'Sarjapur Road', text: 'Smart lock is so convenient! No more worrying about keys.' },
      { name: 'Suresh B.', area: 'Whitefield', text: 'Complete security solution. Feel much safer now with 24/7 monitoring.' }
    ],
    relatedService: 'security-systems'
  },
  'smart-switches-bangalore': {
    service: 'Smart Switches',
    location: 'Bangalore',
    title: 'Smart Touch Switches in Bangalore',
    metaTitle: 'Smart Switches Bangalore | Touch Panels | WiFi Switches | Qloud Tech',
    metaDescription: 'Modern smart touch switches in Bangalore. WiFi enabled, app control, voice compatible. Professional installation. Starting ₹2,500/switch. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/99fx1zh1_keypads-bg-design-mob%20%281%29.webp',
    description: 'Upgrade your Bangalore home with elegant smart touch switches from Qloud Tech. Our WiFi-enabled switches offer app control, voice compatibility, and scene settings. Easy retrofit installation without rewiring in most cases.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'Elegant glass touch panels',
      'WiFi & Bluetooth connectivity',
      'App control from anywhere',
      'Voice control compatible',
      'Scene & schedule settings',
      'No rewiring required'
    ],
    pricing: {
      starting: '₹2,500',
      packages: [
        { name: 'Per Switch', price: '₹2.5-5K', desc: 'Single switch replacement' },
        { name: 'Room Package', price: '₹15-25K', desc: 'Complete room upgrade' },
        { name: 'Whole Home', price: '₹75K+', desc: 'Full home conversion' }
      ]
    },
    stats: [
      { value: '1000+', label: 'Switches Installed' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '1 Day', label: 'Installation Time' }
    ],
    testimonials: [
      { name: 'Deepak M.', area: 'Koramangala', text: 'The touch switches look so modern! Guests always ask about them.' },
      { name: 'Anita R.', area: 'HSR Layout', text: 'Love the app control. Can turn off lights even after leaving home.' },
      { name: 'Prasad K.', area: 'Indiranagar', text: 'Installation was quick and clean. No mess, no rewiring needed.' }
    ],
    relatedService: 'smart-switches'
  },
  'digital-locks-bangalore': {
    service: 'Digital Door Locks',
    location: 'Bangalore',
    title: 'Digital Door Locks in Bangalore',
    metaTitle: 'Digital Door Locks Bangalore | Smart Locks | Fingerprint | Qloud Tech',
    metaDescription: 'Premium digital door locks in Bangalore. Fingerprint, PIN, app access. Yale, Samsung, Godrej. Professional installation. Starting ₹15K. Free demo!',
    heroImage: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/emph1fnm_1_d41ba0ee-d7c8-4526-bcb2-c9b3c69a7090%20%284%29.webp',
    description: 'Go keyless with digital door locks from Qloud Tech in Bangalore. We install premium smart locks from Yale, Samsung, and Godrej with fingerprint, PIN, card, and app access. Perfect for homes, apartments, and offices across Bangalore.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'Fingerprint recognition',
      'PIN code access',
      'RFID card entry',
      'Smartphone app control',
      'Temporary guest codes',
      'Entry/exit logs'
    ],
    pricing: {
      starting: '₹15,000',
      packages: [
        { name: 'Basic', price: '₹15-25K', desc: 'PIN + Card access' },
        { name: 'Premium', price: '₹30-50K', desc: 'Fingerprint + App' },
        { name: 'High Security', price: '₹60K+', desc: 'Biometric + Face ID' }
      ]
    },
    stats: [
      { value: '300+', label: 'Locks Installed' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '2 Hr', label: 'Installation Time' }
    ],
    testimonials: [
      { name: 'Kiran T.', area: 'Whitefield', text: 'No more fumbling for keys! Fingerprint access is super convenient.' },
      { name: 'Lakshmi S.', area: 'JP Nagar', text: 'Love giving temporary codes to guests. So much better than spare keys.' },
      { name: 'Ravi M.', area: 'Marathahalli', text: 'Yale lock quality is excellent. Feels very secure and premium.' }
    ],
    relatedService: 'digital-door-locks'
  },
  'video-doorbell-bangalore': {
    service: 'Video Door Phones',
    location: 'Bangalore',
    title: 'Video Door Phones in Bangalore',
    metaTitle: 'Video Door Phone Bangalore | Smart Doorbell | Intercom | Qloud Tech',
    metaDescription: 'HD video door phones in Bangalore. See visitors on your phone, 2-way audio, motion alerts. Professional installation. Starting ₹8K. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/suio62mb_Video%20Door%20Phone.png',
    description: 'See who is at your door from anywhere with video door phones from Qloud Tech. We install smart video doorbells and intercom systems across Bangalore with HD video, 2-way audio, and smartphone integration.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'HD/Full HD video quality',
      'Two-way audio communication',
      'Motion detection alerts',
      'Night vision',
      'Cloud recording',
      'Smartphone app access'
    ],
    pricing: {
      starting: '₹8,000',
      packages: [
        { name: 'Basic', price: '₹8-15K', desc: 'Wired intercom system' },
        { name: 'Smart', price: '₹20-35K', desc: 'WiFi doorbell + app' },
        { name: 'Premium', price: '₹40K+', desc: 'HD + multiple monitors' }
      ]
    },
    stats: [
      { value: '400+', label: 'Systems Installed' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '3 Hr', label: 'Installation Time' }
    ],
    testimonials: [
      { name: 'Ashok P.', area: 'Sarjapur Road', text: 'Can see deliveries even from office. Never miss a package now!' },
      { name: 'Divya N.', area: 'Koramangala', text: 'The night vision is amazing. Crystal clear even in complete darkness.' },
      { name: 'Mohan K.', area: 'Electronic City', text: 'Two-way audio is great for talking to visitors when not home.' }
    ],
    relatedService: 'video-door-phones'
  }
};

const LocationPage = () => {
  const { locationSlug } = useParams();
  const pageData = locationData[locationSlug];

  // Update page title, meta, and inject Schema.org structured data
  useEffect(() => {
    if (pageData) {
      // Update title and meta description
      document.title = pageData.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', pageData.metaDescription);

      // Remove any existing location schema
      const existingSchema = document.getElementById('location-schema');
      if (existingSchema) existingSchema.remove();

      // Create LocalBusiness + Service Schema
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Qloud Tech",
        "description": pageData.description,
        "image": pageData.heroImage,
        "telephone": "+91-7204746043",
        "url": `https://qloudsmarthomes.com/${locationSlug}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": pageData.location,
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.9716",
          "longitude": "77.5946"
        },
        "areaServed": pageData.areas.map(area => ({
          "@type": "City",
          "name": `${area}, ${pageData.location}`
        })),
        "priceRange": pageData.pricing.starting + "+",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": pageData.stats[0].value.replace('+', '')
        }
      };

      // Create Service Schema
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${pageData.service} in ${pageData.location}`,
        "description": pageData.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Qloud Tech"
        },
        "areaServed": {
          "@type": "City",
          "name": pageData.location
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": pageData.pricing.starting.replace(/[₹,]/g, ''),
          "priceCurrency": "INR"
        }
      };

      // Inject schema script
      const script = document.createElement('script');
      script.id = 'location-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify([localBusinessSchema, serviceSchema]);
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const schemaScript = document.getElementById('location-schema');
        if (schemaScript) schemaScript.remove();
      };
    }
  }, [pageData, locationSlug]);

  const openWhatsApp = () => {
    if (!pageData) return;
    const message = `Hi, I'm interested in ${pageData.service} services in ${pageData.location}. Please provide more details.`;
    window.open(`https://wa.me/917204746043?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!pageData) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
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
          <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-6 py-2 rounded-lg">
            Get Free Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <img src={pageData.heroImage} alt={pageData.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0e1a]/80 to-[#0a0e1a]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-16">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <MapPin className="w-4 h-4" />
              {pageData.location} • {pageData.service}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {pageData.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {pageData.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {pageData.stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
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

      {/* Areas Served */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Areas We Serve in <span className="text-cyan-400">{pageData.location}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {pageData.areas.map((area, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-800 border border-cyan-500/30 rounded-full text-gray-300 text-sm">
                <MapPin className="w-3 h-3 inline mr-1" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What We <span className="text-cyan-400">Offer</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pageData.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl border border-cyan-500/20">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Pricing in <span className="text-cyan-400">{pageData.location}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Starting from {pageData.pricing.starting}</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pageData.pricing.packages.map((pkg, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${idx === 1 ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5' : 'border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-900/30'}`}>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{pkg.price}</div>
                <p className="text-gray-400 text-sm mb-4">{pkg.desc}</p>
                <Button onClick={openWhatsApp} className={`w-full py-3 rounded-lg ${idx === 1 ? 'bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What Our <span className="text-cyan-400">{pageData.location} Customers</span> Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pageData.testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl border border-gray-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 rounded-3xl border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for {pageData.service} in {pageData.location}?
            </h2>
            <p className="text-gray-400 mb-8">Get a free consultation and quote today</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-8 py-6 rounded-full text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button onClick={() => window.open('tel:+917204746043')} variant="outline" className="border-2 border-white/30 text-white px-8 py-6 rounded-full text-lg">
                +91 72047 46043
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Service Link */}
      <section className="py-8">
        <div className="container mx-auto px-6 text-center">
          <Link 
            to={`/services/${pageData.relatedService}`}
            className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2"
          >
            View detailed {pageData.service} service page →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2024 Qloud Tech. All Rights Reserved. | {pageData.service} in {pageData.location}</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block">www.qloudsmarthomes.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default LocationPage;
