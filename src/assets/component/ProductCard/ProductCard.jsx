import { useState } from 'react';
import { Favorite, FavoriteBorder, Visibility } from '@mui/icons-material';
import { useCart } from '../../../context/CartContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // ← import useNavigate
import 'react-toastify/dist/ReactToastify.css';
import style from './ProductCard.module.css';

function ProductCard({ product }) {
  const [isFav, setIsFav] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate(); // ← hook للتنقل

  const handleFavorite = () => setIsFav(prev => !prev);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // ← جديد: عند الضغط على العين
  const handleViewDetails = () => {
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  return (
    <div className={style.card}>
      <div className={style.badges}>
        {product.isHot && <span className={style.hot}>Hot</span>}
        {product.discount && <span className={style.discount}>-{product.discount}%</span>}
      </div>

      <div className={style.imageWrapper}>
        <img src={product.image} alt={product.name} />
        <div className={style.actions}>
          <button onClick={handleFavorite}>
            {isFav ? <Favorite color="error" /> : <FavoriteBorder />}
          </button>
          <button onClick={handleViewDetails}> {/* ← هنا */}
            <Visibility />
          </button>
        </div>
      </div>

      <h4 className={style.name}>{product.name}</h4>
      <div className={style.rating}>
        ⭐ {product.rating || 3.4} <span>(25)</span>
      </div>

      <p className={style.price}>
        ${product.price}
        {product.oldPrice && <span>${product.oldPrice}</span>}
      </p>

      <button className={style.btn} onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
