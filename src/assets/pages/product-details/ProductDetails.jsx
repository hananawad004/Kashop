// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "./../../../context/CartContext"; 
// import styles from './ProductDetails.module.css';

// function ProductDetails() {
//   const location = useLocation();
//   const product = location.state?.product;

//   const { addToCart } = useCart(); 
//   const [quantity, setQuantity] = useState(1);
//   const [toast, setToast] = useState(""); 

//   if (!product) return <p className={styles.notFound}>Product not found!</p>;

//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleAddToCart = () => {
//     addToCart(product, quantity); // إضافة المنتج مع الكمية
//     setToast(`✅ Added ${quantity} item(s) to cart`); 
//     setTimeout(() => setToast(""), 2000); 
//   };

//   return (
//     <div className={styles.productDetails}>
//       {/* LEFT */}
//       <div className={styles.productImages}>
//         <img src={product.image} alt={product.name} className={styles.mainImage} />
//         <div className={styles.thumbnailList}>
//           <img src={product.image} alt="thumb" />
//           <img src={product.image} alt="thumb" />
//           <img src={product.image} alt="thumb" />
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className={styles.productInfo}>
//         <h1 className={styles.title}>{product.name}</h1>
//         <p className={styles.rating}>
//           <span className={styles.stars}>⭐⭐⭐⭐☆</span> <span>(1 Customer Review)</span>
//         </p>
//         <p className={styles.description}>{product.description || "No description available."}</p>
//         <p className={styles.price}>${product.price}</p>

//         <div className={styles.actions}>
//           <div className={styles.quantity}>
//             <button onClick={decreaseQty}>-</button>
//             <span>{quantity}</span>
//             <button onClick={increaseQty}>+</button>
//           </div>

//           <button className={styles.readBtn}>Read A Little</button>
//           <button className={styles.cartBtn} onClick={handleAddToCart}>
//             Add To Cart
//           </button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> {product.sku || "FTC1020865D"}</p>
//           <p><strong>Category:</strong> Kids Toys</p>
//           <p><strong>Language:</strong> English</p>
//           <p><strong>Publish Year:</strong> 2021</p>
//         </div>

//         <div className={styles.features}>
//           <p>✔ Free shipping orders from $150</p>
//           <p>✔ 30 days exchange & return</p>
//           <p>✔ Safe & Secure online shopping</p>
//         </div>
//       </div>

//       {/* Toast Notification */}
//       {toast && <div className={styles.toast}>{toast}</div>}
//     </div>
//   );
// }

// export default ProductDetails;
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const location = useLocation();
  const product = location.state?.product;

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState("");

  if (!product) return <p className={styles.notFound}>Product not found!</p>;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setToast(`✅ Added ${quantity} item(s) to cart`);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className={styles.productDetails}>
      {/* LEFT */}
      <div className={styles.productImages}>
        <img src={product.image} alt={product.name} className={styles.mainImage} />
        <div className={styles.thumbnailList}>
          <img src={product.image} alt="thumb" />
          <img src={product.image} alt="thumb" />
          <img src={product.image} alt="thumb" />
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.productInfo}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.rating}>
          <span className={styles.stars}>⭐⭐⭐⭐☆</span> <span>(1 Customer Review)</span>
        </p>
        <p className={styles.description}>{product.description || "No description available."}</p>
        <p className={styles.price}>${product.price}</p>

        <div className={styles.actions}>
          <div className={styles.quantity}>
            <button onClick={decreaseQty}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div>

          <button className={styles.readBtn}>Read A Little</button>
          <button className={styles.cartBtn} onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>

        <div className={styles.meta}>
          <p><strong>SKU:</strong> {product.sku || "FTC1020865D"}</p>
          <p><strong>Category:</strong> Kids Toys</p>
          <p><strong>Language:</strong> English</p>
          <p><strong>Publish Year:</strong> 2021</p>
        </div>

        <div className={styles.features}>
          <p>✔ Free shipping orders from $150</p>
          <p>✔ 30 days exchange & return</p>
          <p>✔ Safe & Secure online shopping</p>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && <div className={styles.toast}>{toast}</div>}
    </div>
  );
}

export default ProductDetails;
