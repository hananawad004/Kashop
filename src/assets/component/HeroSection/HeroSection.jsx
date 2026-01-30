// src/assets/components/HeroSection/HeroSection.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "300px", md: "400px" },
        backgroundImage: `url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1350&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        px: 2,
        mb: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 97, 86, 0.8)",
          width: "100%",
          height: "100%",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Get 25%
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Discount In All Kind Of Super Selling
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleShopNow}
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          Shop Now →
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
