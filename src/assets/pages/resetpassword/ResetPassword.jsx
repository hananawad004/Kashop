import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, Typography, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

const resetSchema = yup.object({
  code: yup.string().required("Code is required"),
  newPassword: yup.string()
    .required("Password is required")
    .min(8, "At least 8 characters")
    .matches(/[A-Z]/, "One uppercase letter")
    .matches(/[a-z]/, "One lowercase letter")
    .matches(/\d/, "One number")
    .matches(/[@$!%*?&]/, "One special character"),
});

function ResetPassword() {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState([]);
  const email = localStorage.getItem("resetEmail");

  useEffect(() => {
    if (!email) navigate("/auth/sendcode");
  });

  const { register, handleSubmit, formState: { errors ,isSubmitting } } = useForm({
    resolver: yupResolver(resetSchema),
    mode: "onBlur"
  });

  const resetPasswordForm = async (values) => {
    try {
      await axios.patch(
        'https://knowledgeshop.runasp.net/api/Auth/Account/ResetPassword',
        {
          ...values,
          email
        }
      );

      localStorage.removeItem("resetEmail");
      navigate("/auth/login");
    }
    catch (err) {
      setServerErrors(err.response?.data?.errors || ["Something went wrong"]);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper sx={{ width: 450, p: 5 }}>
        <Typography variant="h5" textAlign="center" mb={3}>
          Reset Password
        </Typography>

        {serverErrors.map((err, i) => (
          <Typography key={i} color="error">{err}</Typography>
        ))}

        <Box component="form" onSubmit={handleSubmit(resetPasswordForm)}>
          <TextField
            label="Code"
            fullWidth
            {...register("code")}
            error={!!errors.code}
            helperText={errors.code?.message}
            sx={{ mb: 2 }}
          />

          <TextField
            label="New Password"
            type="password"
            fullWidth
            {...register("newPassword")}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
          />

          <Button type="submit" fullWidth variant="contained" disabled={isSubmitting} sx={{ mt: 3 , backgroundColor: "#ff6b6b" }}>
            Reset Password
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default ResetPassword;
