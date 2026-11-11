import React, { useEffect, useState } from 'react';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import {
  CART_CHANGE_EVENT,
  CART_OPEN_EVENT,
  cartCount,
  cartMrpTotal,
  cartTotal,
  clearCart,
  formatInr,
  readCart,
  salePrice,
  SHOP_DISCOUNT_PERCENT,
  updateCartQty,
  whatsappCartUrl,
} from '../lib/shop';

const ShopCartBar = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const refresh = () => setItems(readCart());

  useEffect(() => {
    refresh();
    const onOpen = () => {
      refresh();
      setOpen(true);
    };
    window.addEventListener(CART_CHANGE_EVENT, refresh);
    window.addEventListener(CART_OPEN_EVENT, onOpen);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(CART_CHANGE_EVENT, refresh);
      window.removeEventListener(CART_OPEN_EVENT, onOpen);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const count = cartCount(items);

  return (
    <>
      {count > 0 && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-3 rounded-full bg-stone-900 text-white pl-2 pr-5 py-2 shadow-xl"
        >
          <span className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
            <ShoppingBag className="w-4 h-4" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-sm font-medium">Cart · {count}</span>
            <span className="block text-[11px] text-white/70">
              {formatInr(cartTotal(items))} · {SHOP_DISCOUNT_PERCENT}% off
            </span>
          </span>
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-[70]">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close cart"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-50 shadow-2xl flex flex-col text-stone-900">
            <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-stone-100">
              <div>
                <p className="font-semibold">Your cart</p>
                <p className="text-xs text-stone-400 mt-0.5">
                  {count ? `${count} lock${count === 1 ? '' : 's'} · ${SHOP_DISCOUNT_PERCENT}% off` : 'Empty'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-auto px-5 py-4 space-y-3">
              {!items.length && (
                <p className="text-sm text-stone-500 py-10 text-center">
                  No locks yet. Add a Yale lock, then send us the quote on WhatsApp.
                </p>
              )}
              {items.map((row) => (
                <div key={`${row.slug}:${row.sku}`} className="flex gap-3 rounded-3xl bg-white border border-stone-100 shadow-sm p-3">
                  {row.image && (
                    <img src={row.image} alt="" className="w-16 h-16 object-contain rounded-2xl bg-slate-50" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm leading-snug">{row.name}</p>
                    <p className="text-xs text-stone-400 mt-0.5">{row.finish} · {row.sku}</p>
                    <p className="text-sm mt-1.5">
                      {formatInr(salePrice(row.mrp) * row.quantity)}
                      <span className="ml-2 text-xs text-stone-400 line-through">{formatInr(row.mrp * row.quantity)}</span>
                    </p>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white">
                      <button type="button" className="p-1.5" onClick={() => updateCartQty(row.slug, row.sku, row.quantity - 1)} aria-label="Decrease">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm w-5 text-center">{row.quantity}</span>
                      <button type="button" className="p-1.5" onClick={() => updateCartQty(row.slug, row.sku, row.quantity + 1)} aria-label="Increase">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border-t border-stone-100 p-5 space-y-3">
              <div className="rounded-3xl bg-slate-50 p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">MRP</span>
                  <span className="text-stone-400 line-through">{formatInr(cartMrpTotal(items))}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">{SHOP_DISCOUNT_PERCENT}% off</span>
                  <span className="font-semibold">{formatInr(cartTotal(items))}</span>
                </div>
              </div>
              <button
                type="button"
                disabled={!items.length}
                onClick={() => window.open(whatsappCartUrl(items), '_blank')}
                className="w-full bg-stone-900 text-white font-medium py-3 rounded-full disabled:opacity-40"
              >
                WhatsApp this quote
              </button>
              {!!items.length && (
                <button
                  type="button"
                  onClick={() => clearCart()}
                  className="w-full text-xs text-stone-400 inline-flex items-center justify-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Clear cart
                </button>
              )}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default ShopCartBar;
