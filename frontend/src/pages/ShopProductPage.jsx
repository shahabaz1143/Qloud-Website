import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  BadgeCheck,
  BatteryCharging,
  ChevronLeft,
  CreditCard,
  Fingerprint,
  Hash,
  KeyRound,
  Phone,
  Ruler,
  ScanFace,
  Shield,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import ShopLayout from '../components/ShopLayout';
import { addToCart, formatInr, loadShopCatalog, openCart, salePrice, SHOP_DISCOUNT_PERCENT, SHOP_PHONE, whatsappCartUrl } from '../lib/shop';

const accessStyle = (label) => {
  const t = label.toLowerCase();
  if (t.includes('face')) return { Icon: ScanFace, wrap: 'bg-violet-50 text-violet-700' };
  if (t.includes('finger')) return { Icon: Fingerprint, wrap: 'bg-sky-50 text-sky-700' };
  if (t.includes('pin')) return { Icon: Hash, wrap: 'bg-amber-50 text-amber-800' };
  if (t.includes('rfid') || t.includes('card')) return { Icon: CreditCard, wrap: 'bg-emerald-50 text-emerald-700' };
  if (t.includes('key')) return { Icon: KeyRound, wrap: 'bg-stone-100 text-stone-700' };
  if (t.includes('app') || t.includes('wifi') || t.includes('bluetooth')) return { Icon: Smartphone, wrap: 'bg-indigo-50 text-indigo-700' };
  return { Icon: Sparkles, wrap: 'bg-stone-100 text-stone-700' };
};

const ShopProductPage = () => {
  const { productSlug } = useParams();
  const [catalog, setCatalog] = useState(null);
  const [sku, setSku] = useState('');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    loadShopCatalog().then(setCatalog);
  }, []);

  const product = useMemo(
    () => catalog?.products?.find((p) => p.slug === productSlug),
    [catalog, productSlug]
  );

  const variant = useMemo(() => {
    if (!product) return null;
    return product.variants.find((v) => v.sku === sku) || product.variants[0];
  }, [product, sku]);

  useEffect(() => {
    if (!product) return;
    setSku(product.variants[0].sku);
    document.title = `${product.name} | Yale Lock Shop | Qloud Tech`;
  }, [product]);

  if (catalog && !product) {
    return (
      <ShopLayout>
        <main className="max-w-7xl mx-auto px-4 py-16">
          <p className="text-stone-500">This lock is not in the catalogue.</p>
          <Link to="/shop" className="text-stone-900 underline mt-4 inline-block">Back to shop</Link>
        </main>
      </ShopLayout>
    );
  }

  if (!product || !variant) {
    return (
      <ShopLayout>
        <main className="max-w-7xl mx-auto px-4 py-16 text-stone-500">Loading lock…</main>
      </ShopLayout>
    );
  }

  const cartItem = {
    slug: product.slug,
    sku: variant.sku,
    name: product.name,
    finish: variant.finish,
    mrp: variant.mrp,
    quantity: 1,
    image: product.image,
  };

  const onAdd = () => {
    addToCart(cartItem);
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 1600);
  };

  const specs = [
    { label: 'SKU', value: variant.sku, Icon: Hash },
    { label: 'Door thickness', value: product.doorThickness, Icon: Ruler },
    { label: 'Warranty', value: product.warrantyYears ? `${product.warrantyYears} years` : null, Icon: Shield },
    { label: 'Finish', value: variant.finish, Icon: Sparkles },
  ].filter((row) => row.value);

  const showVariants = (product.variants || []).length > 1;
  const batteryNote = (product.features || []).find((f) => /battery/i.test(f));

  return (
    <ShopLayout>
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900 mb-8">
          <ChevronLeft className="w-4 h-4" /> All products
        </Link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.name,
              sku: variant.sku,
              brand: { '@type': 'Brand', name: 'Yale' },
              description: product.description,
              image: `https://www.qloudsmarthomes.com${(product.image || '').split('?')[0]}`,
              offers: {
                '@type': 'Offer',
                priceCurrency: 'INR',
                price: salePrice(variant.mrp),
                availability: 'https://schema.org/InStock',
                url: `https://www.qloudsmarthomes.com/shop/${product.slug}`,
                seller: { '@type': 'Organization', name: 'Qloud Tech' },
              },
            }),
          }}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="rounded-3xl bg-white border border-stone-100 shadow-sm aspect-square flex items-center justify-center lg:sticky lg:top-24">
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain p-10" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded-full bg-stone-900 text-white text-[11px] font-medium px-3 py-1">Yale</span>
              <span className="rounded-full bg-amber-100 text-amber-800 text-[11px] font-medium px-3 py-1">Authorised stock</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">{product.name}</h1>
            <p className="text-stone-500 mb-6 leading-relaxed">{product.description}</p>

            <div className="rounded-3xl bg-white border border-stone-100 shadow-sm p-5 mb-6">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Our price</p>
                  <p className="text-4xl font-semibold tracking-tight mt-1">{formatInr(salePrice(variant.mrp))}</p>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-stone-400 line-through">{formatInr(variant.mrp)}</span>
                    <span className="rounded-full bg-amber-100 text-amber-800 text-[11px] font-medium px-2.5 py-0.5">
                      {SHOP_DISCOUNT_PERCENT}% off
                    </span>
                  </p>
                </div>
                {batteryNote && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 text-stone-600 text-xs px-3 py-1.5">
                    <BatteryCharging className="w-3.5 h-3.5" /> {batteryNote}
                  </span>
                )}
              </div>
            </div>

            {showVariants && (
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400 mb-3">Finish</p>
                <div className="grid grid-cols-2 gap-2">
                  {product.variants.map((v) => {
                    const on = variant.sku === v.sku;
                    return (
                      <button
                        key={v.sku}
                        type="button"
                        onClick={() => setSku(v.sku)}
                        className={`rounded-2xl px-4 py-3 text-left border transition-colors ${
                          on
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        <span className="block text-sm font-medium">
                          {v.finish}{v.bundle ? ` · ${v.bundleName || 'Wi-Fi bundle'}` : ''}
                        </span>
                        <span className={`block text-xs mt-1 ${on ? 'text-white/70' : 'text-stone-400'}`}>{formatInr(salePrice(v.mrp))}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                type="button"
                onClick={onAdd}
                className="h-12 px-7 rounded-full bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 shadow-md"
              >
                {added ? 'Added — view cart' : 'Add to cart'}
              </button>
              <button
                type="button"
                onClick={() => {
                  addToCart(cartItem);
                  window.open(whatsappCartUrl([cartItem]), '_blank');
                }}
                className="h-12 px-6 rounded-full bg-white border border-stone-200 font-medium text-sm hover:bg-stone-50"
              >
                Enquire on WhatsApp
              </button>
              <a
                href={`tel:${SHOP_PHONE.replace(/\s/g, '')}`}
                className="inline-flex h-12 items-center gap-2 px-5 rounded-full bg-slate-50 text-sm text-stone-700 hover:bg-slate-100"
              >
                <Phone className="w-4 h-4" /> {SHOP_PHONE}
              </a>
            </div>

            {(product.access || []).length > 0 && (
              <section className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400 mb-3">Unlock with</p>
                <div className="grid grid-cols-2 gap-2">
                  {product.access.map((item) => {
                    const { Icon, wrap } = accessStyle(item);
                    return (
                      <div key={item} className="rounded-2xl bg-white border border-stone-100 shadow-sm p-3 flex items-center gap-3">
                        <span className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${wrap}`}>
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-medium text-stone-800 leading-snug">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            <section className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400 mb-3">Specifications</p>
              <div className="grid grid-cols-2 gap-2">
                {specs.map((row) => (
                  <div key={row.label} className="rounded-2xl bg-white border border-stone-100 shadow-sm p-4">
                    <row.Icon className="w-4 h-4 text-stone-400 mb-2" />
                    <p className="text-[11px] uppercase tracking-wide text-stone-400">{row.label}</p>
                    <p className="mt-1 text-sm font-medium text-stone-900 leading-snug">{row.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {(product.features || []).length > 0 && (
              <section className="mb-8 rounded-3xl bg-white border border-stone-100 shadow-sm p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400 mb-4">What you get</p>
                <ul className="space-y-3">
                  {product.features.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <BadgeCheck className="w-3.5 h-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </main>
    </ShopLayout>
  );
};

export default ShopProductPage;
