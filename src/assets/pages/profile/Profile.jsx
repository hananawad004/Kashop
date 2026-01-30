// src/assets/pages/profile/Profile.jsx
import React from "react";
import { Box, List, ListItem, ListItemText, Paper } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", gap: 3, p: 3 }}>
      {/* Sidebar */}
      <Paper sx={{ width: 220, p: 2 }}>
        <List>
          <ListItem button component={Link} to="">
            <ListItemText primary={t("profile.overview")} />
          </ListItem>
          <ListItem button component={Link} to="change-password">
            <ListItemText primary={t("profile.changePassword")} />
          </ListItem>
        </List>
      </Paper>

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Profile;
