
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import useProductDetails from "../../../hooks/useProductDetails";
import useAddToCart from "../../../hooks/useAddToCart";
import useAddReview from "../../../hooks/useAddReview";
import useCheckout from "../../../hooks/useCheckout";

import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const { t } = useTranslation();
  const { productId } = useParams();

  const { data: product, isLoading } = useProductDetails(productId);
  const addToCartMutation = useAddToCart();
  const addReviewMutation = useAddReview();
  const checkoutMutation = useCheckout();

  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Visa");

  if (isLoading) return <p>{t("productDetails.loading")}</p>;
  if (!product || !product.id)
    return <p className={styles.notFound}>{t("productDetails.notFound")}</p>;

  
  const handleAddToCart = () => {
    addToCartMutation.mutate(
      { ProductId: product.id, Count: quantity, Price: product.price },
      {
        onSuccess: () =>
          toast.success(t("productDetails.added", { count: quantity }), { autoClose: 2000 }),
        onError: () =>
          toast.error(t("productDetails.addFailed"), { autoClose: 2000 }),
      }
    );
  };

  const handleCheckout = () => {

  if (quantity <= 0) {
    toast.error("Quantity must be at least 1");
    return;
  }

  addToCartMutation.mutate(
    { ProductId: product.id, Count: quantity, Price: product.price },
    {
      onSuccess: () => {
        toast.success(`Added ${quantity} item(s) to cart`);

      
        checkoutMutation.mutate(
          { PaymentMethod: paymentMethod }, 
          {
            onSuccess: (res) => {
              if (res.success) {
                toast.success("Order created successfully!");
              } else {
                toast.error(res.message || "Checkout failed");
              }
            },
            onError: (err) => {
              console.log(err.response?.data);
              toast.error("Checkout failed");
            },
          }
        );
      },
      onError: () => toast.error("Failed to add product to cart"),
    }
  );
};



const handleSubmitReview = () => {
  if (!comment.trim()) {
    toast.error("Please write a comment");
    return;
  }

  addReviewMutation.mutate(
    {
      productId: product.id,
      Rating: rating,  
      Comment: comment,  
    },
    {
      onSuccess: () => {
        toast.success("Review added successfully");
        setComment("");
        setRating(5);
      },
      onError: (err) => {
        console.log(err?.response?.data);
        toast.error("Failed to add review");
      },
    }
  );
};


  return (
    <div className={styles.productDetails}>
   
      <div className={styles.productImages}>
        <img src={product.image} alt={product.name} className={styles.mainImage} />
        <div className={styles.thumbnailList}>
          {product.subImages?.length > 0 ? (
            product.subImages.map((img, i) => (
              <img key={i} src={img} alt={`thumb-${i}`} />
            ))
          ) : (
            <p>{t("productDetails.noImages")}</p>
          )}
        </div>
      </div>

      <div className={styles.productInfo}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>
          {product.description || t("productDetails.noDescription")}
        </p>

        {/* ADD TO CART */}
        <div className={styles.actions}>
          <div className={styles.quantity}>
            <button onClick={() => setQuantity((q) => Math.max(q - 1, 1))}>−</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>

          <button
            className={styles.cartBtn}
            onClick={handleAddToCart}
            disabled={addToCartMutation.isPending}
          >
            {addToCartMutation.isPending
              ? t("productDetails.adding")
              : t("productDetails.addToCart")}
          </button>
        </div>

        {/* PAYMENT METHOD */}
        <div className={styles.payment}>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Visa">Visa</option>
            <option value="Cash">Cash</option>
          </select>

          <button
            className={styles.checkoutBtn}
            onClick={handleCheckout}
            disabled={checkoutMutation.isLoading}
          >
            {checkoutMutation.isLoading ? "Processing..." : "Checkout"}
          </button>
        </div>

        {/* REVIEW */}
        <div className={styles.reviewBox}>
          <h3>Add Review</h3>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} ⭐
              </option>
            ))}
          </select>
          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className={styles.reviewBtn}
            onClick={handleSubmitReview}
            disabled={addReviewMutation.isPending}
          >
            {addReviewMutation.isPending ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
