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
    className="relative overflow-hidden border-y border-white/10 bg-[#08090B] py-20 md:py-28"
    data-testid="qloud-audio-home-section"
  >
    <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      <div className="relative overflow-hidden rounded-md border border-white/10 bg-black aspect-[4/3]">
        <img
          src="https://www.qloudaudio.com/services/hero-shop.jpg?v=20"
          alt="Qloud Audio home theatre product catalogue and installation showroom"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">Qloud Audio · Bangalore</p>
          <p className="mt-2 max-w-md text-lg font-medium text-white sm:text-xl">
            Shop the equipment. Build the room with the same local team.
          </p>
        </div>
      </div>

      <div>
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Meet Qloud Audio</p>
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          Ready to choose the <span className="font-serif-accent italic font-medium text-[#E5E7EB]">actual models?</span>
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed text-neutral-300">
          Qloud Audio is our dedicated home theatre catalogue and package builder. Browse projectors,
          screens, speakers, subwoofers and AV receivers with listed prices, then add products to your
          cart or assemble a complete quote around your room and budget.
        </p>

        <div className="mt-8 space-y-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-sm text-neutral-200">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="h-12 rounded-md bg-white px-6 font-medium text-black hover:bg-neutral-200">
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
          <Button asChild variant="outline" className="h-12 rounded-md border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white">
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
        <p className="mt-4 text-xs text-neutral-600">Opens qloudaudio.com in a new tab.</p>
      </div>
    </div>
  </section>
);

export default QloudAudioPromo;