import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (product, quantity = 1) => {
    const identifier = product.id || product.sku || Math.random().toString();
    const existing = get().cartItems.find(
      (item) => (item.id || item.sku) === identifier
    );

    if (existing) {
      set({
        cartItems: get().cartItems.map((item) =>
          (item.id || item.sku) === identifier
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set({
        cartItems: [
          ...get().cartItems,
          { ...product, quantity, id: product.id || identifier },
        ],
      });
    }
  },

  removeFromCart: (productIdOrSku) =>
    set({
      cartItems: get().cartItems.filter(
        (item) => (item.id || item.sku) !== productIdOrSku
      ),
    }),

  increaseQty: (productIdOrSku) =>
    set({
      cartItems: get().cartItems.map((item) =>
        (item.id || item.sku) === productIdOrSku
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }),

  decreaseQty: (productIdOrSku) =>
    set({
      cartItems: get().cartItems.map((item) =>
        (item.id || item.sku) === productIdOrSku && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }),

  cartCount: () => get().cartItems.reduce((sum, i) => sum + i.quantity, 0),

  subtotal: () =>
    get().cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
}));
