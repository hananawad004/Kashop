
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   Menu,
//   MenuItem,
//   Badge,
//   IconButton,
//   Button,
//   Avatar,
//   Paper,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import styles from "./Navbar.styles";

// import { useAuthStore } from "../../../store/authStore";
// import { useCartStore } from "../../../store/cartStore";
// import LanguageSwitcher from "../../../LanguageSwitcher";
// import { useThemeContext } from "../../../ThemeContext";

// function Navbar() {
//   const token = useAuthStore((state) => state.token);
//   const user = useAuthStore((state) => state.user);
//   const logout = useAuthStore((state) => state.logout);

//   const cartCount = useCartStore((state) => state.cartCount());

//   const [pagesAnchor, setPagesAnchor] = useState(null);

//   const openPagesMenu = (e) => setPagesAnchor(e.currentTarget);
//   const closePagesMenu = () => setPagesAnchor(null);

//   const { toggleTheme, mode } = useThemeContext(); // ✅ استخدم ThemeContext

//   return (
//     <AppBar position="static" sx={styles.appBar}>
//       <Toolbar sx={styles.toolbar}>
//         {/* Logo */}
//         <Box sx={styles.logo}>
//           <Box sx={styles.logoIcon}>📕</Box>
//           <Typography sx={styles.logoText}>Boimela</Typography>
//         </Box>

//         {/* Menu */}
//         <Box sx={styles.menu}>
//           {token ? (
//             <>
//               <NavItem text="Home" to="/home" />

//               <Typography sx={styles.navText} onClick={openPagesMenu}>
//                 Pages ▾
//               </Typography>

//               <Menu anchorEl={pagesAnchor} open={Boolean(pagesAnchor)} onClose={closePagesMenu}>
//                 <MenuItem component={Link} to="/products" onClick={closePagesMenu}>
//                   Product Page
//                 </MenuItem>
//               </Menu>

//               <NavItem text="Blog" to="/blog" />
//               <NavItem text="Contact" to="/contact" />
//             </>
//           ) : (
//             <>
//               <NavItem text="Register" to="/auth/register" />
//               <NavItem text="Login" to="/auth/login" />
//             </>
//           )}
//         </Box>

//         {/* Right Side */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           {/* Language Switcher */}
//           <LanguageSwitcher />

//           {/* Theme Toggle Button */}
//           <Button
//             variant="outlined"
//             size="small"
//             onClick={toggleTheme}
//             sx={{ color: "#fff", minWidth: "36px" }}
//           >
//             {mode === "light" ? "🌙" : "☀️"}
//           </Button>

//           {/* User Card */}
//           {token && user && (
//             <Paper
//               elevation={3}
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1.5,
//                 px: 1.8,
//                 py: 0.6,
//                 borderRadius: "14px",
//                 backgroundColor: "rgba(255,255,255,0.15)",
//                 backdropFilter: "blur(6px)",
//               }}
//             >
//               <Avatar
//                 sx={{
//                   bgcolor: "#fff",
//                   color: "#ff6b6b",
//                   width: 34,
//                   height: 34,
//                   fontWeight: 700,
//                 }}
//               >
//                 {user.name.charAt(0).toUpperCase()}
//               </Avatar>

//               <Box>
//                 <Typography sx={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>
//                   {user.name}
//                 </Typography>
//                 <Typography
//                   onClick={logout}
//                   sx={{
//                     color: "#ffd6d8",
//                     fontSize: 11,
//                     cursor: "pointer",
//                     "&:hover": { textDecoration: "underline" },
//                   }}
//                 >
//                   Logout
//                 </Typography>
//               </Box>
//             </Paper>
//           )}

//           {/* Cart */}
//           <IconButton component={Link} to={token ? "/cart" : "/auth/login"}>
//             <Badge badgeContent={cartCount} color="error">
//               <ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />
//             </Badge>
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// function NavItem({ text, to }) {
//   return (
//     <Typography component={Link} to={to} sx={styles.navText}>
//       {text}
//     </Typography>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
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
  Avatar,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styles from "./Navbar.styles";

import { useAuthStore } from "../../../store/authStore";
import { useCartStore } from "../../../store/cartStore";
import LanguageSwitcher from "../../../LanguageSwitcher";
import { useThemeContext } from "../../../ThemeContext";

function Navbar() {
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const cartCount = useCartStore((state) => state.cartCount());

  const [pagesAnchor, setPagesAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);

  const openPagesMenu = (e) => setPagesAnchor(e.currentTarget);
  const closePagesMenu = () => setPagesAnchor(null);

  const openProfileMenu = (e) => setProfileAnchor(e.currentTarget);
  const closeProfileMenu = () => setProfileAnchor(null);

  const { toggleTheme, mode } = useThemeContext();

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

              <Typography sx={styles.navText} onClick={openPagesMenu}>
                Pages ▾
              </Typography>
              <Menu anchorEl={pagesAnchor} open={Boolean(pagesAnchor)} onClose={closePagesMenu}>
                <MenuItem component={Link} to="/products" onClick={closePagesMenu}>
                  Product Page
                </MenuItem>
              </Menu>

              <NavItem text="Blog" to="/blog" />
              <NavItem text="Contact" to="/contact" />
            </>
          ) : (
            <>
              <NavItem text="Register" to="/auth/register" />
              <NavItem text="Login" to="/auth/login" />
            </>
          )}
        </Box>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle Button */}
          <Button
            variant="outlined"
            size="small"
            onClick={toggleTheme}
            sx={{ color: "#fff", minWidth: "36px" }}
          >
            {mode === "light" ? "🌙" : "☀️"}
          </Button>

          {/* User Card / Profile Dropdown */}
          {token && user && (
            <Box>
              <Button
                onClick={openProfileMenu}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                <Avatar sx={{ bgcolor: "#fff", color: "#ff6b6b" }}>
                  {user.name.charAt(0).toUpperCase()}
                </Avatar>
                {user.name}
              </Button>

              <Menu
                anchorEl={profileAnchor}
                open={Boolean(profileAnchor)}
                onClose={closeProfileMenu}
              >
                <MenuItem component={Link} to="/profile" onClick={closeProfileMenu}>
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/profile/change-password" onClick={closeProfileMenu}>
                  Change Password
                </MenuItem>
                <MenuItem onClick={() => { logout(); closeProfileMenu(); }}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}

          {/* Cart */}
          <IconButton component={Link} to={token ? "/cart" : "/auth/login"}>
            <Badge badgeContent={cartCount} color="error">
              <ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />
            </Badge>
          </IconButton>
        </Box>
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
