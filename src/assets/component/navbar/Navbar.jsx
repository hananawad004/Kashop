import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Badge,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styles from "./Navbar.styles";
import { AuthContext } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext"; // ← استدعاء الـ CartContext

function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const { cartCount } = useCart(); // ← هنا نجيب العدد من الـ context

  const [pagesAnchor, setPagesAnchor] = useState(null);

  const openPagesMenu = (e) => setPagesAnchor(e.currentTarget);
  const closePagesMenu = () => setPagesAnchor(null);

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        {/* Logo */}
        <Box sx={styles.logo}>
          <Box sx={styles.logoIcon}>📕</Box>
          <Typography sx={styles.logoText}>Boimela</Typography>
        </Box>

        {/* Menu */}
        <Box sx={styles.menu}>
          {token ? (
            <>
              <NavItem text="Home" to="/home" />

              {/* Pages Dropdown */}
              <Typography sx={styles.navText} onClick={openPagesMenu}>
                Pages ▾
              </Typography>

              <Menu
                anchorEl={pagesAnchor}
                open={Boolean(pagesAnchor)}
                onClose={closePagesMenu}
              >
                <MenuItem
                  component={Link}
                  to="/products"
                  onClick={closePagesMenu}
                >
                  Product Page
                </MenuItem>

                <MenuItem
                  component={Link}
                  to="/product-details"
                  onClick={closePagesMenu}
                >
                  Product Details
                </MenuItem>
              </Menu>

              <NavItem text="Blog" to="/blog" />
              <NavItem text="Contact" to="/contact" />

              <Button onClick={logout} sx={styles.logoutBtn}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavItem text="Register" to="/auth/register" />
              <NavItem text="Login" to="/auth/login" />
            </>
          )}
        </Box>

        {/* Cart Icon مع العداد */}
        <IconButton component={Link} to="/cart">
          <Badge badgeContent={cartCount} color="error">
            <ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function NavItem({ text, to }) {
  return (
    <Typography component={Link} to={to} sx={styles.navText}>
      {text}
    </Typography>
  );
}

export default Navbar;
