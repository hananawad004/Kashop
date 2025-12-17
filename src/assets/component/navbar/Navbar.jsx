import React from "react";
import {
  AppBar, Toolbar, Box,Typography, Menu, MenuItem,Badge, IconButton,} from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styles from "./Navbar.styles"; 

function Navbar({ categories = [], cartCount = 0 }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #ff9a9e 0%, #ff6b6b 50%, #c74a4a 100%)",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={styles.toolbar}>
        {/* Logo */}
        <Box sx={styles.logo}>
          <Box sx={styles.logoIcon}>📕</Box>
          <Typography sx={styles.logoText}>Boimela</Typography>
        </Box>

        {/* Menu */}
        <Box sx={styles.menu}>
          <NavItem text="Home" to="/home" />

          {/* Shop Dropdown */}
          <Box
            sx={styles.shopDropdown}
            onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
          >
            <Typography sx={styles.navText}>Shop</Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#fff" }} />
          </Box>

          <NavItem text="Pages" to="/pages" />
          <NavItem text="Blog" to="/blog" />
          <NavItem text="Contact" to="/contact" />
        </Box>

        {/* Cart Icon */}
        <IconButton>
          <Badge badgeContent={cartCount} color="error">
            <ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />
          </Badge>
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{ onMouseLeave: () => setAnchorEl(null) }}
          sx={{
            mt: 1,
            "& .MuiPaper-root": {
              borderTop: "4px solid #fff",
              minWidth: 220,
            },
          }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat.id} component={Link} to={`/shop/${cat.id}`}>
              {cat.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

/* Nav link */
function NavItem({ text, to }) {
  return (
    <Typography
      component={Link}
      to={to}
      sx={styles.navText}
    >
      {text}
    </Typography>
  );
}

export default Navbar;
