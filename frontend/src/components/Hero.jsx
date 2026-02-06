import React from 'react';
import { Button } from './ui/button';
import { Star, Award, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1710131459450-7c384b8be18f?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/90 via-[#0a0e1a]/85 to-[#0a0e1a]/95"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute right-0 top-0 h-full w-64 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent"
            style={{ left: `${i * 20}%`, animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Bangalore's #1 Home Theatre Specialists</span>
            <div className="flex items-center gap-1 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-white ml-1">4.9/5</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            WHERE SMART LIVING
            <br />
            MEETS
            <br />
            <span className="text-cyan-400">CINEMATIC MAGIC</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From voice-controlled automation to{' '}
            <span className="text-cyan-400 font-semibold">Dolby Atmos theatres</span>—we craft
            intelligent spaces that entertain, protect, and inspire.
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="px-8 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <div className="text-cyan-400 text-sm mb-1">Free Consultation</div>
            <div className="text-white text-xs">& SITE VISIT</div>
          </div>
          <div className="px-8 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <div className="text-cyan-400 text-2xl font-bold">₹50K+</div>
            <div className="text-white text-xs">AUTOMATION STARTS</div>
          </div>
          <div className="px-8 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <div className="text-cyan-400 text-2xl font-bold">₹3.5L+</div>
            <div className="text-white text-xs">THEATRE STARTS</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            onClick={() => scrollToSection('packages')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            VIEW PACKAGES
            <span className="ml-2">→</span>
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-200"
          >
            <Play className="w-5 h-5 mr-2" />
            BOOK DEMO
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Homes Made
              <br />
              Smarter
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">8+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Years of
              <br />
              Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Home Theatres
              <br />
              Designed
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">4.9/5</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Customer
              <br />
              Ratings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
