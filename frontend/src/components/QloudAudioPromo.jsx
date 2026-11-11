import React from 'react';
import { Link } from 'react-router-dom';

const QLOUD_AUDIO_URL = 'https://www.qloudaudio.com';
const IMG = (id) => `https://www.qloudaudio.com/api/static/item_images/${id}.jpg`;

const products = [
  { name: 'Polk Audio ES60', off: '25% off', price: '₹1,04,250', slug: 'polk-audio-es60', image: IMG('addb3c3d7a0b4620a5a6012a4b562050') },
  { name: 'Polk Audio ES55', off: '25% off', price: '₹79,500', slug: 'polk-audio-es55', image: IMG('30a09ce5263f404ba7c393090bb1cb7b') },
  { name: 'Polk Audio ES50', off: '25% off', price: '₹66,750', slug: 'polk-audio-es50', image: IMG('9896c863c5134d4f8f4d5a930b4e17d8') },
  { name: 'Polk Monitor XT60', off: '25% off', price: '₹48,750', slug: 'polk-audio-monitor-xt60', image: IMG('e368a689cfd142cc894a6f5380c11b47') },
  { name: 'Denon AVR-X1800H', off: '50% off', price: '₹59,950', slug: 'denon-avr-x1800h', image: IMG('86b6cd177b6f45e7bf3314a1933f3781') },
  { name: 'Denon AVR-S770H', off: '50% off', price: '₹64,950', slug: 'denon-avr-s770h', image: IMG('8ad5e17f0c884626a1396ff3aaca8118') },
  { name: 'Denon AVR-S670H', off: '50% off', price: '₹55,950', slug: 'denon-avr-s670h', image: IMG('ab049db085c645bda8fd9dca47950b35') },
  { name: 'Denon AVR-S980H', off: '50% off', price: '₹77,450', slug: 'denon-avr-s980h', image: IMG('b17b41610939498aaf2d5f4a1f3a6abb') },
];

const highlights = [
  'Compare exact models and listed prices',
  'Add products to your cart',
  'Build a complete home theatre quote',
];

const QloudAudioPromo = () => (
  <section
    id="qloud-audio"
    className="relative overflow-hidden border-y border-white/10 bg-[#08090B] py-20 md:py-24"
    data-testid="qloud-audio-home-section"
  >
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-12 lg:items-center">
        <div className="max-w-md">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Meet Qloud Audio</p>
          <h2 className="text-3xl font-semibold leading-[1.15] text-white md:text-[2.15rem]">
            Ready to choose the <span className="font-serif-accent italic font-medium text-[#E5E7EB]">actual models?</span>
          </h2>
          <p className="mt-4 text-[15px] font-light leading-relaxed text-neutral-300">
            Browse Polk Audio speakers and AV receivers with listed prices on Qloud Audio — then add to cart or build a full-room quote.
          </p>
          <Link
            to="/blog/qloud-audio-by-qloud-tech"
            className="mt-3 inline-flex text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            data-testid="qloud-audio-learn-more-link"
          >
            How Qloud Audio and Qloud Tech work together →
          </Link>

          <ol className="mt-6 space-y-2.5">
            {highlights.map((label, index) => (
              <li key={label} className="flex items-center gap-3 text-sm text-neutral-200">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-[11px] text-white">
                  {index + 1}
                </span>
                {label}
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`${QLOUD_AUDIO_URL}/catalog`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-medium text-black hover:bg-neutral-200"
              data-testid="qloud-audio-browse-products-button"
            >
              Browse Models & Prices
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`${QLOUD_AUDIO_URL}/build`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-medium text-white hover:bg-white/10"
              data-testid="qloud-audio-build-quote-button"
            >
              Build Your Quote
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {products.map((product) => (
            <a
              key={product.slug}
              href={`${QLOUD_AUDIO_URL}/p/${product.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-xl bg-white p-2.5 hover:-translate-y-0.5 transition-transform"
            >
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 min-h-[2rem] text-[11px] font-medium text-stone-900 leading-snug line-clamp-2">{product.name}</p>
              <p className="text-xs font-semibold text-stone-900">{product.price}</p>
              <span className="mt-1 w-fit rounded-full bg-amber-100 text-amber-800 text-[9px] font-medium px-1.5 py-0.5">
                {product.off}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default QloudAudioPromo;
