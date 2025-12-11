import React from 'react'
import { Box, Button, Paper, Typography, TextField, Link } from '@mui/material'
import { Form, useForm } from 'react-hook-form'
import axios from 'axios'
function Register() {

  const { register, handleSubmit } = useForm();
  const registerForm = async (values) => {
    
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/Auth/Account/Register', values);
      console.log(response);
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", py: 6, px: 2 }}>
      <Paper elevation={3} sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px", background: "#fff" }} >
        <Typography variant='h4' sx={{ textAlign: 'center', mb: 1, color: "#222", fontWeight: '700' }}>Create Account</Typography>
        <Typography sx={{ textAlign: "center", mb: 4, color: "#666", fontSize: "15px" }}>Join Boimela and start your journey!</Typography>
        <Box component="form" onSubmit={handleSubmit(registerForm)} sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}>
          <TextField label="User Name" {...register("userName")} fullWidth variant="outlined" ></TextField>
          <TextField label="Full Name" {...register("fullName")} fullWidth variant="outlined" ></TextField>
          <TextField label="Email" {...register("email")} fullWidth variant="outlined" ></TextField>
          <TextField label="Password" {...register("password")} fullWidth variant="outlined" ></TextField>
          <TextField label="PhoneNumber" {...register("phoneNumber")} fullWidth variant="outlined" ></TextField>
          <Button type="submit" variant="contained" sx={{ mt: 2, py: 1.4, fontSize: "16px", backgroundColor: "#ff6b6b", borderRadius: "10px", fontWeight: 600, "&:hover": { backgroundColor: "#ff5252" } }}>Register</Button>
        </Box>
        <Typography sx={{ mt: 3, textAlign: "center" }}>Already have an account? <Link href="/auth/login" underline="hover" sx={{ color: "#ff6b6b", fontWeight: 600 }}>Login</Link></Typography>

      </Paper>
    </Box>
  )

}

export default Register
