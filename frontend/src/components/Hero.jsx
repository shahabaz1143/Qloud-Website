import React from 'react';
import { Star, Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cinematic background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1547426562-ffa17ebb4ca0?w=1920&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/85 to-[#0B0C0E]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-[#0B0C0E]/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Overline (existing specialist copy) */}
          <div className="inline-flex items-center gap-3 mb-8 border border-white/10 rounded-full pl-4 pr-3 py-2 bg-white/[0.03] backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-300">Bangalore &amp; Karnataka's #1 Home Theatre &amp; Automation Specialists</span>
            <span className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3 h-3 fill-[#C9AE72] text-[#C9AE72]" />
              ))}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] tracking-tight mb-6">
            Where Smart Living
            <br />
            Meets{' '}
            <span className="font-serif-accent italic text-[#C9AE72]">Cinematic Magic</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl mb-10">
            From voice-controlled automation to{' '}
            <span className="text-white font-normal">Dolby Atmos theatres</span>—we craft
            intelligent spaces that entertain, protect, and inspire.
          </p>

          {/* Starting-price metrics */}
          <div className="flex items-center gap-8 mb-10">
            <div className="border-l border-white/15 pl-4">
              <div className="text-2xl font-light text-white">₹50K+</div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mt-1">Automation Starts</div>
            </div>
            <div className="border-l border-white/15 pl-4">
              <div className="text-2xl font-light text-white">₹3.5L+</div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mt-1">Theatre Starts</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <button
              onClick={() => scrollToSection('packages')}
              data-testid="hero-view-packages-btn"
              className="group inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 font-medium px-7 py-3.5 rounded-md text-sm transition-all active:scale-95"
            >
              View Packages
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/917204746043', '_blank')}
              data-testid="hero-book-demo-btn"
              className="inline-flex items-center gap-2 border border-white/20 bg-transparent text-white hover:bg-white/10 px-7 py-3.5 text-sm font-medium rounded-md transition-all"
            >
              <Play className="w-4 h-4" />
              Book Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {[
              { v: '450+', l: 'Happy\nCustomers' },
              { v: '8+', l: 'Years of\nExperience' },
              { v: '100+', l: 'Home Theatres\nDesigned' },
              { v: '5/5', l: 'Customer\nRatings' },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">{s.v}</div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 leading-relaxed whitespace-pre-line">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
