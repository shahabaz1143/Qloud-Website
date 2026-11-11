import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ShopLayout from '../components/ShopLayout';
import { loadShopCatalog, formatInr, lowestMrp, lowestSale, SHOP_DISCOUNT_PERCENT } from '../lib/shop';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catalog, setCatalog] = useState(null);
  const [error, setError] = useState('');
  const [sort, setSort] = useState('featured');
  const active = searchParams.get('category') || 'all';
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  useEffect(() => {
    document.title = 'Yale Digital Door Locks Shop Bangalore | Qloud Tech';
    loadShopCatalog()
      .then(setCatalog)
      .catch(() => setError('The lock catalogue could not be loaded. Refresh and try again.'));
  }, []);

  const counts = useMemo(() => {
    const map = {};
    (catalog?.products || []).forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, [catalog]);

  const products = useMemo(() => {
    if (!catalog) return [];
    let list = catalog.products;
    if (active !== 'all') list = list.filter((p) => p.category === active);
    if (q) {
      list = list.filter((p) =>
        `${p.name} ${p.sku} ${p.description}`.toLowerCase().includes(q)
      );
    }
    const next = [...list];
    if (sort === 'price_asc') next.sort((a, b) => lowestMrp(a) - lowestMrp(b));
    if (sort === 'price_desc') next.sort((a, b) => lowestMrp(b) - lowestMrp(a));
    if (sort === 'name') next.sort((a, b) => a.name.localeCompare(b.name));
    return next;
  }, [catalog, active, q, sort]);

  const setCategory = (slug) => {
    const params = {};
    if (slug !== 'all') params.category = slug;
    if (q) params.q = q;
    setSearchParams(params);
  };

  return (
    <ShopLayout>
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-10">
        <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500 mb-2">Shop by type</p>
        <h1 className="text-3xl font-semibold tracking-tight">Yale digital door locks in Bangalore</h1>
        <p className="text-sm text-stone-500 mt-2">
          {catalog ? `${products.length} products` : 'Loading…'} · {SHOP_DISCOUNT_PERCENT}% off Yale MRP · Enquire on WhatsApp to order
        </p>
        {error && <p className="text-red-600 mt-4">{error}</p>}

        <div className="lg:hidden mt-6 grid grid-cols-2 gap-2">
          <select
            className="h-10 rounded-full border border-stone-200 bg-white px-3 text-sm"
            value={active}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All types</option>
            {(catalog?.categories || []).map((cat) => (
              <option key={cat.slug} value={cat.slug}>{cat.name}</option>
            ))}
          </select>
          <select
            className="h-10 rounded-full border border-stone-200 bg-white px-3 text-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price_asc">Price: low to high</option>
            <option value="price_desc">Price: high to low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="mt-8 grid lg:grid-cols-[220px_1fr] gap-10">
          <aside className="hidden lg:block space-y-1">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-3">Type</p>
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={`block w-full text-left text-sm py-1.5 ${
                active === 'all' ? 'font-semibold text-stone-900' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              All products
              <span className="text-stone-400 font-normal"> {catalog?.products?.length || 0}</span>
            </button>
            {(catalog?.categories || []).map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setCategory(cat.slug)}
                className={`block w-full text-left text-sm py-1.5 ${
                  active === cat.slug ? 'font-semibold text-stone-900' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {cat.name}
                <span className="text-stone-400 font-normal"> {counts[cat.slug] || 0}</span>
              </button>
            ))}
            <div className="pt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-3">Sort</p>
              <select
                className="w-full h-10 rounded-full border border-stone-200 bg-white px-3 text-sm"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price_asc">Price: low to high</option>
                <option value="price_desc">Price: high to low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </aside>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/shop/${product.slug}`}
                className="flex flex-col bg-white border border-stone-100 hover:border-stone-300 transition-colors"
              >
                <div className="relative aspect-square flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-6"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <p className="text-sm sm:text-base font-medium text-[#0a1220] leading-snug">{product.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-stone-400">{product.sku}</p>
                  <div className="mt-auto pt-3">
                    <span className="text-base font-semibold text-stone-900">{formatInr(lowestSale(product))}</span>
                    <span className="ml-2 text-xs text-stone-400 line-through">{formatInr(lowestMrp(product))}</span>
                    <span className="block text-xs text-amber-700 mt-0.5">{SHOP_DISCOUNT_PERCENT}% off</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </ShopLayout>
  );
};

export default ShopPage;
