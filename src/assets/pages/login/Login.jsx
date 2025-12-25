import React, { useContext, useState } from "react";
import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validations/LoginSchema";
import { AuthContext } from "../../../context/AuthContext";
import { useLoginMutation } from "../../../hooks/useLoginMutation";

function Login() {
  const [serverErrors, setServerErrors] = useState([]);
  const { setToken, setAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const { mutate, isPending } = useLoginMutation({
    onSuccess: (data) => {
      if (data.success) {
        const token = data.accessToken;
        setAccessToken(token);
        setToken(token);
        navigate("/");
      } else {
        const messageArray = data.message ? [data.message] : ["Something went wrong"];
        setServerErrors(messageArray);
      }
    },
    onError: (err) => {
      if (Array.isArray(err.response?.data?.errors)) {
        setServerErrors(err.response.data.errors);
      } else if (err.response?.data?.message) {
        setServerErrors([err.response.data.message]);
      } else {
        setServerErrors(["Something went wrong"]);
      }
    },
  });

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", py: 6, px: 2 }}>
      <Paper elevation={3} sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px" }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>Login</Typography>

        {serverErrors.length > 0 &&
          serverErrors.map((err, i) => (
            <Typography key={i} color="error" sx={{ mb: 1 }}>
              {err}
            </Typography>
          ))
        }

        <Box component="form" onSubmit={handleSubmit((values) => mutate(values))} sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}>
          <TextField label="Email" {...register("email")} error={!!errors.email} helperText={errors.email?.message} fullWidth />
          <TextField label="Password" type="password" {...register("password")} error={!!errors.password} helperText={errors.password?.message} fullWidth />

          <Button type="submit" variant="contained" disabled={isPending} sx={{ mt: 2, py: 1.4, backgroundColor: "#ff6b6b", borderRadius: "10px", fontWeight: 600, "&:hover": { backgroundColor: "#ff5252" } }}>
            Login
          </Button>
        </Box>

        <Typography sx={{ mt: 3, textAlign: "center" }}>
          <Link to="/auth/sendcode" style={{ textDecoration: "none", color: "#ff6b6b" }}>
            Forget Password?
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
