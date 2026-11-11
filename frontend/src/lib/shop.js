export const SHOP_WHATSAPP = '917204746043';
export const SHOP_PHONE = '+91 72047 46043';
export const CART_KEY = 'qloud_shop_cart';
export const CART_OPEN_EVENT = 'qloud-cart-open';
export const CART_CHANGE_EVENT = 'qloud-cart-change';

export const SHOP_DISCOUNT_PERCENT = 40;

export const formatInr = (value) =>
  `₹${Number(value || 0).toLocaleString('en-IN')}`;

export const salePrice = (mrp) =>
  Math.round(Number(mrp || 0) * (1 - SHOP_DISCOUNT_PERCENT / 100));

export const lowestMrp = (product) => {
  const prices = (product.variants || []).map((v) => v.mrp);
  if (prices.length) return Math.min(...prices);
  return product.mrp;
};

export const lowestSale = (product) => salePrice(lowestMrp(product));

export const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
};

export const writeCart = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_CHANGE_EVENT));
};

export const addToCart = (item) => {
  const cart = readCart();
  const key = `${item.slug}:${item.sku}`;
  const existing = cart.find((row) => `${row.slug}:${row.sku}` === key);
  if (existing) existing.quantity += item.quantity || 1;
  else cart.push({ ...item, quantity: item.quantity || 1 });
  writeCart(cart);
  return cart;
};

export const updateCartQty = (slug, sku, quantity) => {
  const next = readCart()
    .map((row) => (`${row.slug}:${row.sku}` === `${slug}:${sku}` ? { ...row, quantity } : row))
    .filter((row) => row.quantity > 0);
  writeCart(next);
  return next;
};

export const clearCart = () => writeCart([]);

export const cartCount = (items) => items.reduce((sum, row) => sum + (row.quantity || 0), 0);

export const cartTotal = (items) =>
  items.reduce((sum, row) => sum + salePrice(row.mrp) * (row.quantity || 0), 0);

export const cartMrpTotal = (items) =>
  items.reduce((sum, row) => sum + row.mrp * (row.quantity || 0), 0);

export const openCart = () => window.dispatchEvent(new Event(CART_OPEN_EVENT));

export const whatsappCartUrl = (items, extra = '') => {
  const lines = items.map(
    (row) =>
      `• ${row.name}${row.finish ? ` (${row.finish})` : ''} — ${row.sku} x${row.quantity} — ${formatInr(salePrice(row.mrp))} (MRP ${formatInr(row.mrp)})`
    );
  const text = [
    'Hello Qloud Tech, I want a quote for Yale digital door locks:',
    '',
    ...lines,
    '',
    `Total after ${SHOP_DISCOUNT_PERCENT}% off: ${formatInr(cartTotal(items))}`,
    `MRP: ${formatInr(cartMrpTotal(items))}`,
    extra,
    'Please confirm stock and installation in Bangalore.',
  ]
    .filter(Boolean)
    .join('\n');
  return `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(text)}`;
};

export async function loadShopCatalog() {
  try {
    const res = await fetch('/shop/catalog.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data?.products) && data.products.length) return data;
    }
  } catch {
    /* try the API next */
  }

  const apiBase = process.env.REACT_APP_BACKEND_URL;
  if (apiBase) {
    try {
      const res = await fetch(`${apiBase.replace(/\/$/, '')}/api/shop/catalog`, {
        signal: AbortSignal.timeout(2500),
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data?.products) && data.products.length) return data;
      }
    } catch {
      /* fall through */
    }
  }

  throw new Error('Could not load shop catalogue');
}
