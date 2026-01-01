// import { useCart } from '../../../context/CartContext';
// import style from './Cart.module.css';

// function Cart() {
//   const {
//     cartItems,
//     removeFromCart,
//     increaseQty,
//     decreaseQty,
//     cartCount
//   } = useCart();

//   // حساب الـ subtotal
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <section className={style.page}>
//       <h2>Cart</h2>

//       <div className={style.wrapper}>
//         {/* TABLE */}
//         <div className={style.table}>
//           <div className={style.head}>
//             <span>Product</span>
//             <span>Price</span>
//             <span>Quantity</span>
//             <span>Subtotal</span>
//           </div>

//           {cartItems.length === 0 && (
//             <div className={style.empty}>Your cart is empty</div>
//           )}

//           {cartItems.map(item => (
//             <div className={style.row} key={item.id}>
//               <div className={style.product}>
//                 <button
//                   className={style.remove}
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   ×
//                 </button>
//                 <img src={item.image} alt={item.name} />
//                 <span>{item.name}</span>
//               </div>

//               <span>${item.price.toFixed(2)}</span>

//               <div className={style.qty}>
//                 <button onClick={() => decreaseQty(item.id)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => increaseQty(item.id)}>+</button>
//               </div>

//               <span className={style.sub}>
//                 ${(item.price * item.quantity).toFixed(2)}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* SUMMARY */}
//         <aside className={style.summary}>
//           <h4>Cart Total</h4>

//           <div className={style.line}>
//             <span>Subtotal</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>

//           <div className={style.line}>
//             <span>Shipping</span>
//             <span>Free</span>
//           </div>

//           <div className={style.total}>
//             <span>Total</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>

//           <button className={style.checkout}>
//             Proceed To Checkout
//           </button>
//         </aside>
//       </div>
//     </section>
//   );
// }

// export default Cart;
import { useCart } from "../../../context/CartContext";
import style from "./Cart.module.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartCount
  } = useCart();

  const subtotal = (cartItems || []).reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cartItems || cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <section className={style.page}>
      <h2>Cart ({cartCount} items)</h2>

      <div className={style.wrapper}>
        {/* TABLE */}
        <div className={style.table}>
          <div className={style.head}>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {cartItems.map(item => (
            <div className={style.row} key={item.id || item.sku}>
              <div className={style.product}>
                <button className={style.remove} onClick={() => removeFromCart(item.id || item.sku)}>
                  ×
                </button>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>

              <span>${item.price.toFixed(2)}</span>

              <div className={style.qty}>
                <button onClick={() => decreaseQty(item.id || item.sku)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id || item.sku)}>+</button>
              </div>

              <span className={style.sub}>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <aside className={style.summary}>
          <h4>Cart Total</h4>

          <div className={style.line}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className={style.line}>
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className={style.total}>
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <button className={style.checkout}>
            Proceed To Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
