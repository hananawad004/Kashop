import React, { useState } from 'react';
import { Box, Button, Paper, Typography, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../../validations/RegisterSchema';

function Register() {
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate(); 

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur"
  });

  const registerForm = async (values) => {
    setServerErrors([]);

    if (values.email === "test@example.com") {
      setServerErrors(["Email already exists"]);
      return;
    }

    setTimeout(() => {
      navigate("/auth/login");
    }, 1500);

    alert("Account created successfully! Redirecting to Login...");
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", py: 6, px: 2 }}>
      <Paper elevation={3} sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px", background: "#fff" }}>
        <Typography variant='h4' sx={{ textAlign: 'center', mb: 1, color: "#222", fontWeight: '700' }}>
          Create Account
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 4, color: "#666", fontSize: "15px" }}>
          Join Boimela and start your journey!
        </Typography>

        {serverErrors.length > 0 &&
          serverErrors.map((err, index) => (
            <Typography key={index} sx={{ p: 2, color: "red" }}>
              {err}
            </Typography>
          ))
        }

        <Box component="form" onSubmit={handleSubmit(registerForm)} sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}>
          <TextField
            label="User Name"
            {...register("userName")}
            fullWidth
            variant="outlined"
            error={!!errors.userName}
            helperText={errors.userName?.message}
          />
          <TextField
            label="Full Name"
            {...register("fullName")}
            fullWidth
            variant="outlined"
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
          <TextField
            label="Email"
            {...register("email")}
            fullWidth
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            {...register("password")}
            fullWidth
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label="PhoneNumber"
            {...register("phoneNumber")}
            fullWidth
            variant="outlined"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              mt: 2,
              py: 1.4,
              fontSize: "16px",
              backgroundColor: "#ff6b6b",
              borderRadius: "10px",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#ff5252" }
            }}
          >
            Register
          </Button>
        </Box>

        <Typography sx={{ mt: 3, textAlign: "center" }}>
          Already have an account? <Link to="/auth/login" style={{ color: "#ff6b6b", fontWeight: 600, textDecoration: "none" }}>Login</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Register;
