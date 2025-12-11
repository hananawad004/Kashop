import { Paper, TextField, Typography, Box, Button } from '@mui/material';
import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
function Login() {

  const { register, handleSubmit } = useForm();

  const loginForm = async (values) => {
    console.log(values);

    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/Auth/Account/Login', values);
      if (response.status == 200) {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
      }
      console.log(response);
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", py: 6, px: 2 }}>
      <Paper elevation={3} sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px", background: "#fff" }}>
        <Typography variant="h4" sx={{ color: "#222", mb: 3, textAlign: 'center' }}> Login</Typography>
        <Box component="form" onSubmit={handleSubmit(loginForm)} sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}>
          <TextField label="Email" {...register("email")} fullWidth variant="outlined" ></TextField>
          <TextField label="Password" {...register("password")} fullWidth variant="outlined" ></TextField>
          <Button type="submit" variant="contained" sx={{ mt: 2, py: 1.4, fontSize: "16px", backgroundColor: "#ff6b6b", borderRadius: "10px", fontWeight: 600, "&:hover": { backgroundColor: "#ff5252" } }}>Login</Button>
        </Box>


      </Paper>
    </Box>
  )
}

export default Login
