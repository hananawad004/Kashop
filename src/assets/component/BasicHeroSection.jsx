import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BasicHeroSection() {
  const navigate = useNavigate();
  const goToProducts = () => navigate("/products");

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 420, md: 520 },
        mt: { xs: 8, md: 10 }, // 👈 مسافة عن الناف
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(90deg, #2b193f 0%, #6a3f57 45%, #ff7a6b 100%)",
        color: "#fff",
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* النص */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontWeight: 900,
                lineHeight: 1.1,
                fontSize: { xs: "2.2rem", md: "3.4rem" },
                mb: 2,
              }}
            >
              Your Next Favorite Book <br />
              <Box component="span" sx={{ color: "#ff7a6b" }}>
                Is Just A Click Away
              </Box>
            </Typography>

            <Typography sx={{ mb: 3, maxWidth: 600 }}>
              Discover amazing books from different categories. Adventures and
              knowledge are waiting for you.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                onClick={goToProducts}
                sx={{
                  background: "#fff",
                  color: "#111",
                  px: 4,
                  py: 1.2,
                  borderRadius: 50,
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                Shop Now →
              </Button>

              <Button
                onClick={goToProducts}
                sx={{
                  background: "#ff7a6b",
                  color: "#fff",
                  px: 4,
                  py: 1.2,
                  borderRadius: 50,
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                View All Books →
              </Button>
            </Box>
          </Box>

          {/* الصورة */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="https://ex-coders.com/html/boimela/assets/img/hero/hero-girl-1.png"
              alt="Hero"
              sx={{
                height: { xs: 320, md: 520 }, 
                transform: { md: "translateY(20px)" },
                objectFit: "contain",
                filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.45))",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default BasicHeroSection;
