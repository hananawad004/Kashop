import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import useProducts from '../../../hooks/useProducts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductsSlider() {
  const { data } = useProducts();
  console.log("Products data:", data);
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3.5, 
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2.5 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1.2 } },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h5" fontWeight="bold" mb={4} textAlign="center">
        🔥 New Arrivals
      </Typography>

      <Box sx={{ position: 'relative' }}>
        <Slider {...settings}>
          {data?.map(product => (
            <Box key={product.id} px={1}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default ProductsSlider;
