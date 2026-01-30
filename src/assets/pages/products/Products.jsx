// // import { useState, useMemo } from "react";
// // import { useParams } from "react-router-dom";
// // import { CircularProgress, Typography } from "@mui/material";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // import useProducts from "../../../hooks/useProducts";
// // import useCategories from "../../../hooks/useCategories";
// // import useAddToCart from "../../../hooks/useAddToCart";

// // import ProductCard from "../../component/ProductCard/ProductCard";
// // import style from "./Products.module.css";

// // function Products() {
// //   const { categoryId } = useParams();
// //   const { data: products = [], isLoading: productsLoading, isError: productsError } = useProducts(categoryId);
// //   const { data: categories = [], isLoading: categoriesLoading, isError: categoriesError } = useCategories();

// //   const [search, setSearch] = useState("");
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [price, setPrice] = useState(1000);
// //   const [selectedRating, setSelectedRating] = useState(null);

// //   console.log("Products data:", products);

// //   const addToCartMutation = useAddToCart();

// //   const filteredProducts = useMemo(() => {
// //     return products
// //       .filter((p) => p.name?.toLowerCase().includes(search.toLowerCase()))
// //       .filter((p) => (selectedCategory ? p.categoryId === selectedCategory : true))
// //       .filter((p) => p.price <= price)
// //       .filter((p) => (selectedRating ? p.rating >= selectedRating : true));
// //   }, [products, search, selectedCategory, price, selectedRating]);

// //   const handleAddToCart = (product) => {
// //     addToCartMutation.mutate(
// //       { ProductId: product.id, Count: 1 },
// //       {
// //         onSuccess: () => {
// //           toast.success(`${product.name} added to cart!`, {
// //             position: "top-right",
// //             autoClose: 2000,
// //           });
// //         },
// //         onError: (err) => {
// //           toast.error(`Failed to add ${product.name} to cart.`, {
// //             position: "top-right",
// //             autoClose: 2000,
// //           });
// //           console.error(err);
// //         },
// //       }
// //     );
// //   };

// //   const handleReset = () => {
// //     setSearch("");
// //     setSelectedCategory(null);
// //     setPrice(1000);
// //     setSelectedRating(null);
// //   };

// //   if (productsLoading || categoriesLoading) return <CircularProgress />;
// //   if (productsError || categoriesError) return <Typography>Error loading data</Typography>;

// //   return (
// //     <section className={style.page}>
// //       <aside className={style.sidebar}>
// //         <input className={style.search} placeholder="Search here" value={search} onChange={(e) => setSearch(e.target.value)} />
// //         <h4>Categories</h4>
// //         <ul className={style.list}>
// //           {categories.map((cat) => (
// //             <li key={cat.id} className={selectedCategory === cat.id ? style.active : ""} onClick={() => setSelectedCategory(cat.id)}>
// //               {cat.name || `Category ${cat.id}`}
// //             </li>
// //           ))}
// //         </ul>

// //         <h4>Filter By Price</h4>
// //         <input type="range" min="100" max="1000" value={price} onChange={(e) => setPrice(+e.target.value)} />
// //         <p>$100 - ${price}</p>

// //         <h4>By Review</h4>
// //         <div className={style.reviews}>
// //           {[5, 4, 3, 2].map((star) => (
// //             <button key={star} className={selectedRating === star ? style.activeReview : style.reviewBtn} onClick={() => setSelectedRating(star)}>
// //               {"⭐".repeat(star)}
// //             </button>
// //           ))}
// //         </div>

// //         <button className={style.clear} onClick={handleReset}>Reset Filters</button>
// //       </aside>

// //       <div className={style.productsArea}>
// //         {filteredProducts.length > 0 ? (
// //           <div className={style.grid}>
// //             {filteredProducts.map((product) => (
// //               <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
// //             ))}
// //           </div>
// //         ) : (
// //           <Typography textAlign="center" color="text.secondary">No products available.</Typography>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // export default Products;
// import { useState, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import { CircularProgress, Typography } from "@mui/material";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import useProducts from "../../../hooks/useProducts";
// import useCategories from "../../../hooks/useCategories";
// import useAddToCart from "../../../hooks/useAddToCart";

// import ProductCard from "../../component/ProductCard/ProductCard";
// import style from "./Products.module.css";
// import { useTranslation } from "react-i18next";

// function Products() {
//   const { t } = useTranslation();
//   const { categoryId } = useParams();
//   const { data: products = [], isLoading: productsLoading, isError: productsError } = useProducts(categoryId);
//   const { data: categories = [], isLoading: categoriesLoading, isError: categoriesError } = useCategories();

//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [price, setPrice] = useState(1000);
//   const [selectedRating, setSelectedRating] = useState(null);

//   const addToCartMutation = useAddToCart();

//   const filteredProducts = useMemo(() => {
//     return products
//       .filter((p) => p.name?.toLowerCase().includes(search.toLowerCase()))
//       .filter((p) => (selectedCategory ? p.categoryId === selectedCategory : true))
//       .filter((p) => p.price <= price)
//       .filter((p) => (selectedRating ? p.rating >= selectedRating : true));
//   }, [products, search, selectedCategory, price, selectedRating]);

//   const handleAddToCart = (product) => {
//     addToCartMutation.mutate({
//       ProductId: product.id,
//       Count: 1,
//       Price: product.price, // ✅
//     }),

//     {
//       onSuccess: () => {
//         toast.success(t(`${product.name} added to cart!`), {
//           position: "top-right",
//           autoClose: 2000,
//         });
//       },
//         onError: (err) => {
//           toast.error(t(`Failed to add ${product.name} to cart.`), {
//             position: "top-right",
//             autoClose: 2000,
//           });
//           console.error(err);
//         },
//       }
//     );
// };

// const handleReset = () => {
//   setSearch("");
//   setSelectedCategory(null);
//   setPrice(1000);
//   setSelectedRating(null);
// };

// if (productsLoading || categoriesLoading) return <CircularProgress />;
// if (productsError || categoriesError) return <Typography>{t("Error loading data")}</Typography>;

// return (
//   <section className={style.page}>
//     <aside className={style.sidebar}>
//       <input className={style.search} placeholder={t("Search here")} value={search} onChange={(e) => setSearch(e.target.value)} />
//       <h4>{t("Categories")}</h4>
//       <ul className={style.list}>
//         {categories.map((cat) => (
//           <li key={cat.id} className={selectedCategory === cat.id ? style.active : ""} onClick={() => setSelectedCategory(cat.id)}>
//             {cat.name || t(`Category ${cat.id}`)}
//           </li>
//         ))}
//       </ul>

//       <h4>{t("Filter By Price")}</h4>
//       <input type="range" min="100" max="1000" value={price} onChange={(e) => setPrice(+e.target.value)} />
//       <p>{t("$100 -")} ${price}</p>

//       <h4>{t("By Review")}</h4>
//       <div className={style.reviews}>
//         {[5, 4, 3, 2].map((star) => (
//           <button key={star} className={selectedRating === star ? style.activeReview : style.reviewBtn} onClick={() => setSelectedRating(star)}>
//             {"⭐".repeat(star)}
//           </button>
//         ))}
//       </div>

//       <button className={style.clear} onClick={handleReset}>{t("Reset Filters")}</button>
//     </aside>

//     <div className={style.productsArea}>
//       {filteredProducts.length > 0 ? (
//         <div className={style.grid}>
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
//           ))}
//         </div>
//       ) : (
//         <Typography textAlign="center" color="text.secondary">{t("No products available.")}</Typography>
//       )}
//     </div>
//   </section>
// );
// }

// export default Products;
import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

import useProducts from "../../../hooks/useProducts";
import useCategories from "../../../hooks/useCategories";
import useAddToCart from "../../../hooks/useAddToCart";

import ProductCard from "../../component/ProductCard/ProductCard";
import style from "./Products.module.css";

function Products() {
  const { t } = useTranslation();
  const { categoryId } = useParams();

  const {
    data: products = [],
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts(categoryId);

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useCategories();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [price, setPrice] = useState(1000);
  const [selectedRating, setSelectedRating] = useState(null);

  const addToCartMutation = useAddToCart();

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.name?.toLowerCase().includes(search.toLowerCase()))
      .filter((p) =>
        selectedCategory ? p.categoryId === selectedCategory : true
      )
      .filter((p) => p.price <= price)
      .filter((p) =>
        selectedRating ? p.rating >= selectedRating : true
      );
  }, [products, search, selectedCategory, price, selectedRating]);

  // ✅ هنا التصليح المهم
  const handleAddToCart = (product) => {
    addToCartMutation.mutate(
      {
        ProductId: product.id,
        Count: 1,
        Price: product.price, // ✅ السعر
      },
      {
        onSuccess: () => {
          toast.success(
            t("{{name}} added to cart!", { name: product.name }),
            { autoClose: 2000 }
          );
        },
        onError: (err) => {
          toast.error(
            t("Failed to add {{name}} to cart.", { name: product.name }),
            { autoClose: 2000 }
          );
          console.error(err);
        },
      }
    );
  };

  const handleReset = () => {
    setSearch("");
    setSelectedCategory(null);
    setPrice(1000);
    setSelectedRating(null);
  };

  if (productsLoading || categoriesLoading) return <CircularProgress />;
  if (productsError || categoriesError)
    return <Typography>{t("Error loading data")}</Typography>;

  return (
    <section className={style.page}>
      <aside className={style.sidebar}>
        <input
          className={style.search}
          placeholder={t("Search here")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h4>{t("Categories")}</h4>
        <ul className={style.list}>
          {categories.map((cat) => (
            <li
              key={cat.id}
              className={selectedCategory === cat.id ? style.active : ""}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </li>
          ))}
        </ul>

        <h4>{t("Filter By Price")}</h4>
        <input
          type="range"
          min="100"
          max="1000"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <p>$100 - ${price}</p>

        <h4>{t("By Review")}</h4>
        <div className={style.reviews}>
          {[5, 4, 3, 2].map((star) => (
            <button
              key={star}
              className={
                selectedRating === star
                  ? style.activeReview
                  : style.reviewBtn
              }
              onClick={() => setSelectedRating(star)}
            >
              {"⭐".repeat(star)}
            </button>
          ))}
        </div>

        <button className={style.clear} onClick={handleReset}>
          {t("Reset Filters")}
        </button>
      </aside>

      <div className={style.productsArea}>
        {filteredProducts.length > 0 ? (
          <div className={style.grid}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        ) : (
          <Typography textAlign="center" color="text.secondary">
            {t("No products available.")}
          </Typography>
        )}
      </div>
    </section>
  );
}

export default Products;
