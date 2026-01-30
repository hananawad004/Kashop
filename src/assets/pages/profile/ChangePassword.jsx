// src/assets/pages/profile/ChangePassword.jsx
import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function ChangePassword() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    if (newPass !== confirm) {
      toast.error(t("profile.passwordMismatch"));
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://knowledgeshop.runasp.net/api/Profile/change-password", {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CurrentPassword: current,
          NewPassword: newPass,
          ConfirmNewPassword: confirm
        }),
      });

      if (!res.ok) throw new Error("Error updating password");
      toast.success(t("profile.passwordChanged"));
      setCurrent(""); setNewPass(""); setConfirm("");
    } catch (err) {
      toast.error(t("profile.passwordError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>{t("profile.changePassword")}</Typography>
      <TextField
        label={t("profile.currentPassword")}
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        type="password"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label={t("profile.newPassword")}
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
        type="password"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label={t("profile.confirmPassword")}
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        type="password"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleChangePassword} disabled={loading}>
        {loading ? t("profile.saving") : t("profile.save")}
      </Button>
    </Paper>
  );
}

export default ChangePassword;
