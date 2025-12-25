import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  MenuItem,
  Badge,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styles from "./Navbar.styles";
import { AuthContext } from "../../../context/AuthContext";

function Navbar({ categories = [], cartCount = 0 }) {
  const { token, logout } = useContext(AuthContext);

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(90deg, #ff9a9e 0%, #ff6b6b 50%, #c74a4a 100%)",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{...styles.toolbar}}>
      
        <Box sx={styles.logo}>
          <Box sx={styles.logoIcon}>📕</Box>
          <Typography sx={styles.logoText}>Boimela</Typography>
        </Box>

  
        <Box sx={{...styles.menu,justifyContent:"center"}}>
          {token ? (
            <>
              <NavItem text="Home" to="/home" />
              <NavItem text="Pages" to="/pages" />
              <NavItem text="Blog" to="/blog" />
              <NavItem text="Contact" to="/contact" />

              <Button
                onClick={logout}
                sx={{ color: "#fff", fontWeight: 600 }}
              >
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

       
        <IconButton>
          <Badge badgeContent={cartCount} color="error">
            <ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />
          </Badge>
        </IconButton>

    
        {categories.map((cat) => (
          <MenuItem key={cat.id} component={Link} to={`/shop/${cat.id}`}>
            {cat.name}
          </MenuItem>
        ))}
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
