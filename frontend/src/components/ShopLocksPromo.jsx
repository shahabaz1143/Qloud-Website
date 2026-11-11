import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatInr, loadShopCatalog, lowestMrp, lowestSale, SHOP_DISCOUNT_PERCENT } from '../lib/shop';

const ShopLocksPromo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadShopCatalog()
      .then((catalog) => setProducts(catalog?.products || []))
      .catch(() => setProducts([]));
  }, []);

  if (!products.length) return null;

  const loop = [...products, ...products];

  return (
    <section
      id="shop-locks"
      className="border-y border-white/10 bg-[#08090B] py-16 md:py-20 overflow-hidden"
      data-testid="shop-locks-home-section"
    >
      <div className="container mx-auto px-6">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-3">Shop locks</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Buy the lock here. We fit it in Bangalore.
          </h2>
        </div>
        <Link
          to="/shop"
          className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-black hover:bg-neutral-200"
        >
          Shop all locks
        </Link>
      </div>

      <div className="lock-marquee">
        <div className="lock-marquee-track">
          {loop.map((product, i) => (
            <Link
              key={`${product.slug}-${i}`}
              to={`/shop/${product.slug}`}
              className="lock-marquee-card rounded-2xl bg-white p-3"
            >
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs font-medium text-stone-900 leading-snug line-clamp-2">{product.name}</p>
              <p className="mt-1.5 text-sm font-semibold text-stone-900">{formatInr(lowestSale(product))}</p>
              <p className="text-[11px] text-stone-400">
                <span className="line-through">{formatInr(lowestMrp(product))}</span>
                <span className="ml-1.5 text-amber-700">{SHOP_DISCOUNT_PERCENT}% off</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default ShopLocksPromo;
