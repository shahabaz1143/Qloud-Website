import React from 'react';
import { ArrowUpRight, Boxes, ShoppingCart, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';

const QLOUD_AUDIO_URL = 'https://www.qloudaudio.com';

const highlights = [
  { icon: Boxes, label: 'Compare exact models and listed prices' },
  { icon: ShoppingCart, label: 'Add products to your cart' },
  { icon: SlidersHorizontal, label: 'Build a complete home theatre quote' }
];

const QloudAudioPromo = () => (
  <section
    id="qloud-audio"
    className="relative overflow-hidden border-y border-cyan-500/15 bg-[#070a13] py-20 md:py-28"
    data-testid="qloud-audio-home-section"
  >
    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
    <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950 aspect-[4/3]">
        <img
          src="https://www.qloudaudio.com/services/hero-shop.jpg?v=20"
          alt="Qloud Audio home theatre product catalogue and installation showroom"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <p className="text-xs font-semibold uppercase text-cyan-300">Qloud Audio · Bangalore</p>
          <p className="mt-1 max-w-md text-lg font-semibold text-white sm:text-xl">
            Shop the equipment. Build the room with the same local team.
          </p>
        </div>
      </div>

      <div>
        <p className="mb-4 text-sm font-semibold uppercase text-cyan-400">Meet Qloud Audio</p>
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
          Ready to choose the actual models?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-gray-300">
          Qloud Audio is our dedicated home theatre catalogue and package builder. Browse projectors,
          screens, speakers, subwoofers and AV receivers with listed prices, then add products to your
          cart or assemble a complete quote around your room and budget.
        </p>

        <div className="mt-8 space-y-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-sm text-gray-200">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-cyan-500/25 bg-cyan-500/10 text-cyan-300">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="h-12 bg-cyan-400 px-6 font-semibold text-black hover:bg-cyan-300">
            <a
              href={`${QLOUD_AUDIO_URL}/catalog`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="qloud-audio-browse-products-button"
            >
              Browse Models & Prices
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline" className="h-12 border-gray-600 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white">
            <a
              href={`${QLOUD_AUDIO_URL}/build`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="qloud-audio-build-quote-button"
            >
              Build Your Quote
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <p className="mt-4 text-xs text-gray-500">Opens qloudaudio.com in a new tab.</p>
      </div>
    </div>
  </section>
);

export default QloudAudioPromo;