import React from 'react';
import { Star, Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8 border border-black/10 rounded-full pl-4 pr-3 py-2 bg-black/[0.02]">
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600">Bangalore &amp; Karnataka's #1 Home Theatre &amp; Automation Specialists</span>
              <span className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D62828] text-[#D62828]" />
                ))}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0B0C0E] leading-[1.08] tracking-tight mb-6">
              Where Smart Living
              <br />
              Meets{' '}
              <span className="font-serif-accent italic text-[#D62828]">Cinematic Magic</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl mb-10">
              From voice-controlled automation to{' '}
              <span className="text-[#0B0C0E] font-normal">Dolby Atmos theatres</span>—we craft
              intelligent spaces that entertain, protect, and inspire.
            </p>

            {/* Starting-price metrics */}
            <div className="flex items-center gap-8 mb-10">
              <div className="border-l-2 border-[#D62828] pl-4">
                <div className="text-2xl font-light text-[#0B0C0E]">₹50K+</div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mt-1">Automation Starts</div>
              </div>
              <div className="border-l-2 border-[#D62828] pl-4">
                <div className="text-2xl font-light text-[#0B0C0E]">₹3.5L+</div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mt-1">Theatre Starts</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('packages')}
                data-testid="hero-view-packages-btn"
                className="group inline-flex items-center gap-2 bg-[#D62828] text-white hover:bg-[#B91C1C] font-medium px-7 py-3.5 rounded-md text-sm transition-all active:scale-95"
              >
                View Packages
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => window.open('https://wa.me/917204746043', '_blank')}
                data-testid="hero-book-demo-btn"
                className="inline-flex items-center gap-2 border border-black/20 bg-transparent text-[#0B0C0E] hover:bg-black/5 px-7 py-3.5 text-sm font-medium rounded-md transition-all"
              >
                <Play className="w-4 h-4" />
                Book Demo
              </button>
            </div>
          </div>

          {/* Right: framed cinematic image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
              <img
                src="https://images.unsplash.com/photo-1724061409979-420a38c25bcc?w=1200&q=85"
                alt="Luxury Dolby Atmos home theatre in Bangalore"
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white border border-black/10 rounded-xl px-5 py-4 shadow-lg">
              <div className="flex items-center gap-1 mb-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D62828] text-[#D62828]" />
                ))}
              </div>
              <div className="text-xs text-neutral-600">5/5 · 70 verified reviews</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-12 border-t border-black/10">
          {[
            { v: '450+', l: 'Happy\nCustomers' },
            { v: '8+', l: 'Years of\nExperience' },
            { v: '100+', l: 'Home Theatres\nDesigned' },
            { v: '5/5', l: 'Customer\nRatings' },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-3xl lg:text-4xl font-light text-[#0B0C0E] mb-2">{s.v}</div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 leading-relaxed whitespace-pre-line">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
