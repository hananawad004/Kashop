// src/assets/pages/profile/ProfileOverview.jsx
import React from "react";
import { Paper, Typography } from "@mui/material";
import EditableField from "../../component/EditableField";
import useProfile from "../../../hooks/useProfile"; // hook يستدعي GET Profile
import { useTranslation } from "react-i18next";

function ProfileOverview() {
  const { t } = useTranslation();
  const { data, isLoading, refetch } = useProfile();

  if (isLoading) return <Typography>{t("profile.loading")}</Typography>;

  const handleUpdate = async (field, value) => {
    await fetch("https://knowledgeshop.runasp.net/api/Profile", {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [field]: value }),
    });
    refetch();
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>{t("profile.overview")}</Typography>
      <EditableField
        label={t("profile.name")}
        value={data.name}
        onSave={(val) => handleUpdate("name", val)}
      />
      <EditableField
        label={t("profile.email")}
        value={data.email}
        onSave={(val) => handleUpdate("email", val)}
      />
    </Paper>
  );
}

export default ProfileOverview;
