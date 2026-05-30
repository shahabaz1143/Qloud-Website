import React, { useEffect } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { MapPin, Award, Users, ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const NEIGHBOURHOODS_BY_TYPE = {
  'Home Theatre': [
    { name: 'Whitefield', slug: 'home-theatre-whitefield' },
    { name: 'Koramangala', slug: 'home-theatre-koramangala' },
    { name: 'HSR Layout', slug: 'home-theatre-hsr-layout' },
    { name: 'Indiranagar', slug: 'home-theatre-indiranagar' },
    { name: 'JP Nagar', slug: 'home-theatre-jp-nagar' },
    { name: 'Sarjapur', slug: 'home-theatre-sarjapur' },
    { name: 'Electronic City', slug: 'home-theatre-electronic-city' },
    { name: 'Marathahalli', slug: 'home-theatre-marathahalli' },
    { name: 'Yelahanka', slug: 'home-theatre-yelahanka' },
    { name: 'Hebbal', slug: 'home-theatre-hebbal' },
    { name: 'Malleshwaram', slug: 'home-theatre-malleshwaram' },
    { name: 'Banashankari', slug: 'home-theatre-banashankari' }
  ],
  'Smart Home Automation': [
    { name: 'Whitefield', slug: 'smart-home-whitefield' },
    { name: 'HSR Layout', slug: 'smart-home-hsr-layout' },
    { name: 'Indiranagar', slug: 'smart-home-indiranagar' },
    { name: 'JP Nagar', slug: 'smart-home-jp-nagar' },
    { name: 'Electronic City', slug: 'smart-home-electronic-city' }
  ]
};

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Our Projects & Portfolio | Home Theatre Installations Bangalore | Qloud Tech';

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
      'Browse 500+ home theatre and smart home automation projects by Qloud Tech across Bangalore. Real installations in Whitefield, Koramangala, HSR Layout, Sarjapur, and more.'
    );

    return () => {
      document.title = 'Qloud Tech | Home Theatre & Smart Home Automation';
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
              <li className="text-white">Projects</li>
            </ol>
          </nav>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              500+ Bangalore Homes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Transformed</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              From 2BHK apartments in Marathahalli to ₹15-lakh dedicated media rooms in Whitefield villas — every Qloud Tech installation is custom-engineered for the room, the family, and the budget. Here's a curated look at our recent work.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 text-center">
                <Users className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-400">Projects delivered</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 text-center">
                <MapPin className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">17+</div>
                <div className="text-xs text-gray-400">Bangalore neighbourhoods</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 text-center">
                <Award className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-xs text-gray-400">Google reviews avg.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <Projects />

      {/* Gallery */}
      <Gallery />

      {/* Project categories */}
      <section className="py-16 bg-[#070a13] border-t border-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Project <span className="text-cyan-400">Categories</span>
          </h2>
          <p className="text-gray-400 mb-10">Our 500+ Bangalore installations span six categories. Click any to see real customer work, pricing, and case studies.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dolby Atmos Home Theatres', count: '320+ projects', slug: 'home-theatre', desc: '5.1, 7.1, 5.1.2, 7.1.4 configurations with full acoustic treatment.' },
              { name: 'Smart Home Automation', count: '180+ projects', slug: 'home-automation', desc: 'App + voice control of lights, climate, AV, security, blinds.' },
              { name: 'CCTV & Security Systems', count: '240+ projects', slug: 'security-systems', desc: '4K cameras, NVR, motion alerts, cloud + on-prem storage.' },
              { name: 'Smart Switches & Lighting', count: '420+ projects', slug: 'smart-switches', desc: 'Touch panels, scene control, dimming, retrofit installations.' },
              { name: 'Digital Door Locks', count: '160+ projects', slug: 'digital-door-locks', desc: 'Yale, Samsung, Godrej fingerprint + Wi-Fi smart locks.' },
              { name: 'Motorised Gates & Curtains', count: '95+ projects', slug: 'motorised-gates', desc: 'Sliding/swing gates, Somfy/Lutron motorised curtains.' }
            ].map((cat, i) => (
              <Link
                key={i}
                to={`/services/${cat.slug}`}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-900/30 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="text-xs text-cyan-400 font-semibold mb-2">{cat.count}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cat.name}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{cat.desc}</p>
                <span className="inline-flex items-center gap-1 text-cyan-400 text-sm font-medium">
                  See projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By neighbourhood */}
      <section className="py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Projects <span className="text-cyan-400">By Neighbourhood</span>
          </h2>
          <p className="text-gray-400 mb-10">We've installed home theatres and smart home systems in 17+ Bangalore neighbourhoods. See real customer work and locally relevant pricing.</p>

          {Object.entries(NEIGHBOURHOODS_BY_TYPE).map(([type, locations]) => (
            <div key={type} className="mb-10">
              <h3 className="text-xl font-bold text-white mb-4">{type} in Bangalore</h3>
              <div className="flex flex-wrap gap-3">
                {locations.map(loc => (
                  <Link
                    key={loc.slug}
                    to={`/${loc.slug}`}
                    className="px-4 py-2 rounded-full bg-gray-900/60 border border-gray-800 text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-sm"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Your Home to Be <span className="text-cyan-400">Project #501</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free on-site consultation. We'll measure your space, photograph it, and send you a tailored proposal within 48 hours — at zero cost or obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-6 py-3 rounded-lg">
              <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-lg">
                Contact Form <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
