// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems(prev => {
//       const exists = prev.find(item => item.id === product.id);
//       if (exists) {
//         return prev.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   const increaseQty = (id) => {
//     setCartItems(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCartItems(prev =>
//       prev.map(item =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       cartCount,
//       addToCart,
//       removeFromCart,
//       increaseQty,
//       decreaseQty
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // إضافة المنتج للكارت مع الكمية
  const addToCart = (product, quantity = 1) => {
    const identifier = product.id || product.sku || Math.random().toString();

    setCart((prev) => {
      const existing = prev.find((item) => (item.id || item.sku) === identifier);

      if (existing) {
        return prev.map((item) =>
          (item.id || item.sku) === identifier
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity, id: product.id || identifier }];
      }
    });
  };

  // حذف منتج
  const removeFromCart = (productIdOrSku) => {
    setCart((prev) =>
      prev.filter((item) => (item.id || item.sku) !== productIdOrSku)
    );
  };

  // تعديل كمية المنتج
  const updateQuantity = (productIdOrSku, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        (item.id || item.sku) === productIdOrSku ? { ...item, quantity } : item
      )
    );
  };

  // زيادة كمية واحدة
  const increaseQty = (productIdOrSku) => {
    updateQuantity(productIdOrSku, getQuantity(productIdOrSku) + 1);
  };

  // إنقاص كمية واحدة
  const decreaseQty = (productIdOrSku) => {
    const current = getQuantity(productIdOrSku);
    if (current > 1) updateQuantity(productIdOrSku, current - 1);
  };

  const getQuantity = (productIdOrSku) => {
    const item = cart.find((i) => (i.id || i.sku) === productIdOrSku);
    return item ? item.quantity : 0;
  };

  // مجموع الكميات
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems: cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
