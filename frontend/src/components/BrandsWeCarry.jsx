import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Home-theatre / audio brands Qloud Tech supplies & installs.
// Rendered as crawlable text (not just logos) so Google indexes brand keywords
// like "JBL dealer Bangalore", "KEF dealer Bangalore", etc.
const brands = [
  { name: 'JBL', tagline: 'Cinema & Synthesis speakers', href: '/jbl-dealer-bangalore' },
  { name: 'Polk Audio', tagline: 'American hi-fi value', href: '/polk-audio-dealer-bangalore' },
  { name: 'Monitor Audio', tagline: 'British audiophile sound', href: '/monitor-audio-dealer-bangalore' },
  { name: 'KEF', tagline: 'Uni-Q reference speakers', href: '/kef-dealer-bangalore' },
  { name: 'Klipsch', tagline: 'Horn-loaded high efficiency', href: '/klipsch-dealer-bangalore' },
  { name: 'Denon', tagline: 'AV receivers & processors' },
  { name: 'Marantz', tagline: 'Reference-grade AVRs' },
  { name: 'Yamaha', tagline: 'Aventage AV receivers' },
  { name: 'Focal', tagline: 'French high-end audio' },
  { name: 'Bowers & Wilkins', tagline: 'Reference monitors' },
  { name: 'SVS', tagline: 'Powered subwoofers' },
  { name: 'Sony', tagline: '4K home cinema projectors' },
  { name: 'Epson', tagline: '4K laser projectors' },
  { name: 'BenQ', tagline: 'CinePrime projectors' },
];

const BrandsWeCarry = () => {
  return (
    <section className="py-20 bg-[#0f1419]" data-testid="brands-we-carry-section" id="brands">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Authorised Dealer & Installer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Home Theatre & Audio <span className="text-cyan-400">Brands</span> in Bangalore
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Qloud Tech is your trusted dealer and professional installer for the world's finest
            home theatre and audio brands in Bangalore — including <strong className="text-gray-200">JBL, Polk Audio,
            Monitor Audio, KEF and Klipsch</strong>. As a vendor-neutral specialist, we supply, sell,
            calibrate and install premium speakers, AV receivers and projectors across Bangalore &amp; Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {brands.map((brand) => {
            const testId = `brand-${brand.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
            const cardClass = "group p-5 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-gray-800 hover:border-cyan-500/50 transition-colors text-center block";
            const inner = (
              <>
                <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{brand.tagline}</p>
                {brand.href && (
                  <span className="text-cyan-400 text-[11px] font-semibold mt-2 inline-block">Dealer in Bangalore →</span>
                )}
              </>
            );
            return brand.href ? (
              <Link key={brand.name} to={brand.href} data-testid={testId} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <div key={brand.name} data-testid={testId} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog/home-theatre-audio-brand-dealers-bangalore"
            data-testid="brands-read-more-link"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Where to buy these brands in Bangalore
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandsWeCarry;
