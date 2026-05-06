import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Film, Lightbulb, Shield, Home, Wifi, Lock, Video, DoorOpen, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

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

    // Add schema
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
          "url": `https://qloudsmarthomes.com/services/${service.slug}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Qloud Tech"
          }
        }
      }))
    };

    const script = document.createElement('script');
    script.id = 'services-list-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(servicesSchema);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById('services-list-schema');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" aria-label="Qloud Tech Home" data-testid="header-logo" className="flex-shrink-0 group logo-shine">
            <img
              src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png"
              alt="Qloud Tech Logo"
              className="h-6 brightness-0 invert transition-all duration-300 group-hover:scale-105 group-hover:[filter:brightness(0)_invert(1)_drop-shadow(0_0_6px_rgba(0,212,255,0.85))]"
            />
          </Link>
          <a href="https://wa.me/917204746043" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-6 py-2 rounded-lg">
              Get Quote
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0e1a] to-[#0f1419]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive smart home and home theatre solutions for modern living in Bangalore
          </p>
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

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2024 Qloud Tech. All Rights Reserved.</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block">www.qloudsmarthomes.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
