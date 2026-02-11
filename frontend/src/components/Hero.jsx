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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1710131459450-7c384b8be18f?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/70 via-[#0a0e1a]/60 to-[#0a0e1a]"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute right-0 top-0 h-full w-64 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent"
            style={{ left: `${i * 20}%` }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              WHERE SMART LIVING
              <br />
              MEETS
              <br />
              <span className="text-cyan-400">CINEMATIC MAGIC</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-xl">
              From voice-controlled automation to{' '}
              <span className="text-cyan-400 font-semibold">Dolby Atmos theatres</span>—we craft
              intelligent spaces that entertain, protect, and inspire.
            </p>
          </div>

          {/* Info Cards */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 max-w-xs px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <div className="text-cyan-400 text-2xl font-bold">₹50K+</div>
              <div className="text-white text-xs uppercase tracking-wide">AUTOMATION STARTS</div>
            </div>
            <div className="flex-1 max-w-xs px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <div className="text-cyan-400 text-2xl font-bold">₹3.5L+</div>
              <div className="text-white text-xs uppercase tracking-wide">THEATRE STARTS</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('packages')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-base font-semibold rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              VIEW PACKAGES
              <span className="ml-2">→</span>
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/917204746043', '_blank')}
              variant="outline"
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-3 text-base font-semibold rounded-full transition-all duration-200"
            >
              <Play className="w-4 h-4 mr-2" />
              BOOK DEMO
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 md:gap-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">200+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide leading-tight">
                HOMES MADE
                <br />
                SMARTER
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">8+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide leading-tight">
                YEARS OF
                <br />
                EXPERIENCE
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">100+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide leading-tight">
                HOME THEATRES
                <br />
                DESIGNED
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">4.9/5</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide leading-tight">
                CUSTOMER
                <br />
                RATINGS
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="mt-8 flex items-center gap-3">
            <div className="text-white text-sm md:text-base font-medium">
              Bangalore's #1 Home Theatre & Automation Specialists
            </div>
            <div className="flex items-center gap-1 bg-cyan-500/20 px-3 py-1 rounded-full">
              <span className="text-cyan-400 font-bold text-sm">4.9/5</span>
              <span className="text-yellow-400">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
