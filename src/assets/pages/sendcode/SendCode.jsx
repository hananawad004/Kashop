import React, { useState } from 'react'
import { Box, Button, Paper, Typography, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

const sendCodeSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
});

function SendCode() {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState([]);

  const { register, handleSubmit, formState: { errors , isSubmitting} } = useForm({
    resolver: yupResolver(sendCodeSchema),
    mode: "onBlur"
  });

  const sendCodeForm = async (values) => {
    try {
      await axios.post(
        'https://knowledgeshop.runasp.net/api/Auth/Account/SendCode',
        values
      );


      localStorage.setItem("resetEmail", values.email);

      navigate("/auth/resetpassword");
    }
    catch (err) {
      setServerErrors(err.response?.data?.errors || ["Something went wrong"]);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper sx={{ width: 450, p: 5 }}>
        <Typography variant="h5" textAlign="center" mb={3}>
          Forgot Password
        </Typography>

        {serverErrors.map((err, i) => (
          <Typography key={i} color="error">{err}</Typography>
        ))}

        <Box component="form" onSubmit={handleSubmit(sendCodeForm)} sx={{ mt: 3 }}>
          <TextField
            label="Email"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <Button type="submit" disabled={isSubmitting} fullWidth variant="contained" sx={{ mt: 3 ,backgroundColor: "#ff6b6b" }}>
            Send Code
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default SendCode;
