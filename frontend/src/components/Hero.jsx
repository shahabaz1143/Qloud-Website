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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/50 via-[#0a0e1a]/40 to-[#0a0e1a]"></div>
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
          {/* Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm">Bangalore's #1 Home Theatre Specialists</span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white ml-1 text-sm">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
              WHERE SMART LIVING
              <br />
              MEETS
              <br />
              <span className="text-cyan-400">CINEMATIC MAGIC</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-lg">
              From voice-controlled automation to{' '}
              <span className="text-cyan-400 font-semibold">Dolby Atmos theatres</span>—we craft
              intelligent spaces that entertain, protect, and inspire.
            </p>
          </div>

          {/* Info Cards */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 max-w-[180px] px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <div className="text-cyan-400 text-xl font-bold">₹50K+</div>
              <div className="text-white text-[10px] uppercase tracking-wide">AUTOMATION STARTS</div>
            </div>
            <div className="flex-1 max-w-[180px] px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <div className="text-cyan-400 text-xl font-bold">₹3.5L+</div>
              <div className="text-white text-[10px] uppercase tracking-wide">THEATRE STARTS</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Button
              onClick={() => scrollToSection('packages')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              VIEW PACKAGES
              <span className="ml-2">→</span>
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200"
            >
              <Play className="w-4 h-4 mr-2" />
              BOOK DEMO
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 md:gap-12">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">200+</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide leading-tight">
                HOMES MADE
                <br />
                SMARTER
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">8+</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide leading-tight">
                YEARS OF
                <br />
                EXPERIENCE
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">100+</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide leading-tight">
                HOME THEATRES
                <br />
                DESIGNED
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">4.9/5</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide leading-tight">
                CUSTOMER
                <br />
                RATINGS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
