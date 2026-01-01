import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';

import useProducts from './../../../hooks/useProducts';
import useCategories from './../../../hooks/useCategories';

import ProductCard from './../../component/ProductCard/ProductCard';
import style from './Products.module.css';

function Products() {
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

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [price, setPrice] = useState(1000);
  const [selectedRating, setSelectedRating] = useState(null);

  const filteredProducts = useMemo(() => {
    return products
      .filter(p =>
        p.name?.toLowerCase().includes(search.toLowerCase())
      )
      .filter(p =>
        selectedCategory ? p.categoryId === selectedCategory : true
      )
      .filter(p => p.price <= price)
      .filter(p =>
        selectedRating ? p.rating >= selectedRating : true
      );
  }, [products, search, selectedCategory, price, selectedRating]);

  const handleReset = () => {
    setSearch('');
    setSelectedCategory(null);
    setPrice(1000);
    setSelectedRating(null);
  };

  if (productsLoading || categoriesLoading)
    return <CircularProgress />;

  if (productsError || categoriesError)
    return <Typography>Error loading data</Typography>;

  return (
    <section className={style.page}>
      {/* SIDEBAR */}
      <aside className={style.sidebar}>
        <input
          className={style.search}
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h4>Categories</h4>
        <ul className={style.list}>
          {categories.map(cat => (
            <li
              key={cat.id}
              className={selectedCategory === cat.id ? style.active : ''}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </li>
          ))}
        </ul>

        <h4>Filter By Price</h4>
        <input
          type="range"
          min="100"
          max="1000"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <p>$100 - ${price}</p>

        <h4>By Review</h4>
        <div className={style.reviews}>
          {[5, 4, 3, 2].map(star => (
            <button
              key={star}
              className={
                selectedRating === star
                  ? style.activeReview
                  : style.reviewBtn
              }
              onClick={() => setSelectedRating(star)}
            >
              {'⭐'.repeat(star)}
            </button>
          ))}
        </div>

        <button className={style.clear} onClick={handleReset}>
          Reset Filters
        </button>
      </aside>

      {/* PRODUCTS */}
      <div className={style.productsArea}>
        <div className={style.grid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
