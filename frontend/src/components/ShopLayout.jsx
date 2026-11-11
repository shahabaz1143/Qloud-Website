import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Menu, MessageCircle, Phone, Search, ShieldCheck, ShoppingBag, Sparkles, X } from 'lucide-react';
import ShopCartBar from './ShopCartBar';
import { cartCount, openCart, readCart, SHOP_PHONE } from '../lib/shop';

const ShopLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [menu, setMenu] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const refresh = () => setCount(cartCount(readCart()));
    refresh();
    window.addEventListener('qloud-cart-change', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('qloud-cart-change', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    const next = q.trim();
    navigate(next ? `/shop?q=${encodeURIComponent(next)}` : '/shop');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-stone-900">
      <div className="bg-white text-center text-[11px] tracking-wide text-stone-500 py-1.5 border-b border-stone-100">
        Qloud Tech shop · Yale digital door locks · Bangalore
      </div>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center gap-4">
          <Link to="/" className="flex-shrink-0" aria-label="Qloud Tech Home">
            <img src="/qloud-logo.png" alt="Qloud Tech" className="h-7 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            <Link
              to="/shop"
              className={`rounded-full px-3.5 py-1.5 font-medium ${
                location.pathname.startsWith('/shop') ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Shop
            </Link>
            <Link to="/services/digital-door-locks" className="px-3 py-1.5 text-stone-600 hover:text-stone-900">
              Installation
            </Link>
            <Link to="/contact" className="px-3 py-1.5 text-stone-600 hover:text-stone-900">
              Contact
            </Link>
          </nav>
          <form onSubmit={onSearch} className="hidden md:flex flex-1 max-w-md ml-auto">
            <div className="flex w-full items-center rounded-full border border-stone-200 bg-white px-3">
              <Search className="w-4 h-4 text-stone-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products"
                className="h-9 w-full bg-transparent px-2 text-sm outline-none"
                aria-label="Search products"
              />
            </div>
          </form>
          <button
            type="button"
            onClick={openCart}
            className="ml-auto md:ml-0 relative inline-flex items-center gap-1.5 text-sm text-stone-700"
          >
            <ShoppingBag className="w-4 h-4" />
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-3 min-w-[18px] h-[18px] rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center px-1">
                {count}
              </span>
            )}
          </button>
          <a
            href="https://wa.me/917204746043"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-9 items-center rounded-full bg-stone-900 px-4 text-sm font-medium text-white hover:bg-stone-800"
          >
            Enquire
          </a>
          <button type="button" className="lg:hidden p-2" onClick={() => setMenu((v) => !v)} aria-label="Menu">
            {menu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menu && (
          <div className="lg:hidden border-t border-stone-100 px-4 py-3 space-y-2 bg-white">
            <Link to="/shop" onClick={() => setMenu(false)} className="block py-1.5">Shop</Link>
            <Link to="/services/digital-door-locks" onClick={() => setMenu(false)} className="block py-1.5">Installation</Link>
            <Link to="/contact" onClick={() => setMenu(false)} className="block py-1.5">Contact</Link>
          </div>
        )}
      </header>

      <div className="hidden md:flex max-w-7xl mx-auto px-4 lg:px-8 py-3 gap-6 text-[12px] text-stone-500">
        <span>Authorised Yale stock</span>
        <span>Brand-new only</span>
        <span>WhatsApp quote · installation in Bangalore</span>
        <a href="https://maps.app.goo.gl/rFxj5mbnaSVcbx8k7" className="ml-auto text-stone-700">5.0 ★ · 73 Google reviews</a>
      </div>

      {children}

      <footer className="mt-16 border-t border-stone-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid sm:grid-cols-3 gap-3 mb-12">
            {[
              { Icon: ShieldCheck, label: 'Authorised stock', note: 'Brand-new Yale only', wrap: 'bg-emerald-50 text-emerald-700' },
              { Icon: Sparkles, label: 'Door check', note: 'Fit quoted on WhatsApp', wrap: 'bg-violet-50 text-violet-700' },
              { Icon: MapPin, label: 'Kothanur studio', note: 'Byrathi, Bangalore 560077', wrap: 'bg-sky-50 text-sky-700' },
            ].map((row) => (
              <div key={row.label} className="rounded-3xl bg-white border border-stone-100 shadow-sm p-5">
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${row.wrap}`}>
                  <row.Icon className="w-4 h-4" />
                </span>
                <p className="mt-4 text-sm font-semibold text-stone-900">{row.label}</p>
                <p className="text-sm text-stone-500 mt-1">{row.note}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 text-sm">
            <div>
              <img src="/qloud-logo.png" alt="Qloud Tech" className="h-7 w-auto mb-4" />
              <p className="text-stone-500 leading-relaxed max-w-xs">
                Yale digital door locks from Qloud Tech in Bangalore.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/917204746043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 text-white px-4 py-2 text-xs font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
                <a
                  href={`tel:${SHOP_PHONE.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-stone-200 text-stone-800 px-4 py-2 text-xs font-medium"
                >
                  <Phone className="w-3.5 h-3.5" /> {SHOP_PHONE}
                </a>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-4">Shop</p>
              <div className="space-y-2">
                <Link to="/shop" className="block text-stone-600 hover:text-stone-900">All locks</Link>
                <Link to="/shop?category=smart-door-locks" className="block text-stone-600 hover:text-stone-900">Smart door locks</Link>
                <Link to="/shop?category=digital-door-locks" className="block text-stone-600 hover:text-stone-900">Digital door locks</Link>
                <Link to="/shop?category=speciality-door-locks" className="block text-stone-600 hover:text-stone-900">Speciality locks</Link>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-4">Company</p>
              <div className="space-y-2">
                <Link to="/" className="block text-stone-600 hover:text-stone-900">Qloud Tech</Link>
                <Link to="/services/digital-door-locks" className="block text-stone-600 hover:text-stone-900">Installation</Link>
                <Link to="/contact" className="block text-stone-600 hover:text-stone-900">Contact</Link>
                <a href="https://maps.app.goo.gl/rFxj5mbnaSVcbx8k7" className="block text-stone-600 hover:text-stone-900">5.0 ★ · 73 reviews</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white border border-stone-100 shadow-sm p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-3">Studio</p>
              <p className="text-stone-600 leading-relaxed">
                First Floor 11, 102/1, above Sufyan, Byrathi, Kothanur, Bangalore 560077
              </p>
              <a href={`tel:${SHOP_PHONE.replace(/\s/g, '')}`} className="mt-4 inline-block font-medium text-stone-900">
                {SHOP_PHONE}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-200 bg-white py-4 text-center text-xs text-stone-400">
          © 2026 Qloud Tech
        </div>
      </footer>
      <ShopCartBar />
    </div>
  );
};

export default ShopLayout;
