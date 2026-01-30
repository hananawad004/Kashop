import React from "react";
import { Box, Typography, Paper, Chip, Stack, Button } from "@mui/material";

const newsData = [
  {
    id: 1,
    category: "Activities",
    image: "https://ex-coders.com/html/boimela/assets/img/news/09.jpg",
    date: "Feb 10, 2024",
    author: "Admin",
    title: "Montes Suspendisse Massa Curae Malesuada",
  },
  {
    id: 2,
    category: "Activities",
    image: "https://ex-coders.com/html/boimela/assets/img/news/11.jpg",
    date: "Mar 20, 2024",
    author: "Admin",
    title: "Playful Picks Paradise: Kids’ Essentials With Dash.",
  },
  {
    id: 3,
    category: "Activities",
    image: "https://ex-coders.com/html/boimela/assets/img/news/12.jpg",
    date: "Jun 14, 2024",
    author: "Admin",
    title: "Tiny Emporium: Playful Picks For Kids’ Delightful Days.",
  },
  {
    id: 4,
    category: "Activities",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    date: "Mar 12, 2024",
    author: "Admin",
    title: "Eu Parturient Dictumst  ",
  },
];

function LatestNewsSection() {
  return (
    <Box sx={{ py: 10, background: "#fff3f0" }}>
      <Box sx={{ maxWidth: "1400px", mx: "auto", px: 3 }}>
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" mb={2}  sx={{ color: "#ccc" }}>
            Our Latest News
          </Typography>
          <Typography color="text.secondary" maxWidth={600} mx="auto"  sx={{ color: "#ccc" }}>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Donec at nulla nulla. Duis posuere ex lacus.
          </Typography>
        </Box>

        {/* Cards Container */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "nowrap",
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {newsData.map((item) => (
            <Paper
              key={item.id}
              elevation={3}
              sx={{
                minWidth: 300, 
                flex: "1 0 25%", 
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "#fff",
              }}
            >
              {/* Image */}
              <Box sx={{ position: "relative" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <Chip
                  label={item.category}
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "#ff8a65",
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                />
              </Box>

              {/* Content */}
              <Box p={3} flexGrow={1} display="flex" flexDirection="column">
                <Stack direction="row" spacing={2} mb={1} flexWrap="wrap">
                  <Typography variant="body2" color="text.secondary"  sx={{ color: "#ccc" }}>
                    📅 {item.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"  sx={{ color: "#ccc" }}>
                    👤 By {item.author}
                  </Typography>
                </Stack>

                <Typography variant="h6" fontWeight={600} mb={2}  sx={{ color: "#ccc" }}>
                  {item.title}
                </Typography>

                <Box mt="auto">
                  <Button
                    size="small"
                    sx={{
                      color: "#ff7043",
                      fontWeight: "bold",
                    }}
                  >
                    Read More →
                  </Button>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LatestNewsSection;
