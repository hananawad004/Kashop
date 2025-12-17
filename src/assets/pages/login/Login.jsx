import { Paper, TextField, Typography, Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react'
// import axios from 'axios'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../../validations/LoginSchema';
import axiosInstance from '../../../API/axiosInstance';
function Login() {
  const [serverErrors, setServerErrors] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur"
  });

  const loginForm = async (values) => {
    console.log(values);

    try {
      const response = await axiosInstance.post('/Auth/Account/Login', values);
      if (response.status == 200) {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
      }
      console.log(response);
    }
    catch (err) {
      console.log(err);
      setServerErrors(err.response.data.errors);
    }
  }
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", py: 6, px: 2 }}>
      <Paper elevation={3} sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px", background: "#fff" }}>
        <Typography variant="h4" sx={{ color: "#222", mb: 3, textAlign: 'center' }}> Login</Typography>
        {serverErrors.length > 0 ?
          serverErrors.map((err) => {
            return <Typography sx={{ p: 2 }}>{err}</Typography>
          })
          : null}
        <Box component="form" onSubmit={handleSubmit(loginForm)} sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}>
          <TextField label="Email" {...register("email")} fullWidth variant="outlined" error={errors.email} helperText={errors.email?.message} ></TextField>
          <TextField label="Password" {...register("password")} fullWidth variant="outlined" error={errors.password} helperText={errors.password?.message}  ></TextField>
          <Button type="submit" variant="contained" disabled={isSubmitting} sx={{ mt: 2, py: 1.4, fontSize: "16px", backgroundColor: "#ff6b6b", borderRadius: "10px", fontWeight: 600, "&:hover": { backgroundColor: "#ff5252" } }}>Login</Button>
        </Box>
        <Typography sx={{ mt: 3, textAlign: "center" }}><Link to="/auth/sendcode" underline="hover" sx={{ color: "#ff6b6b", fontWeight: 600 }}>Forgett Password?</Link></Typography>

      </Paper>
    </Box>
  )
}

export default Login
