import React, { useEffect } from "react";
import { Box, Button, Paper, Typography, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ResetPasswordSchema from "../../../validations/ResetPasswordSchema";
import { useResetPasswordForm } from "../../../hooks/useResetPasswordForm";

function ResetPassword() {
    const { serverErrors, resetPasswordMutation, email } = useResetPasswordForm();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(ResetPasswordSchema),
        mode: "onBlur"
    });

    useEffect(() => {
        if (!email) window.location.href = "/auth/sendcode"; 
    }, [email]);

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper sx={{ width: 450, p: 5 }}>
                <Typography variant="h5" textAlign="center" mb={3}>Reset Password</Typography>

                {serverErrors.map((err, i) => (
                    <Typography key={i} color="error">{err}</Typography>
                ))}

                <Box component="form" onSubmit={handleSubmit((values) => resetPasswordMutation.mutate({ ...values, email }))}>
                    <TextField label="Code" fullWidth {...register("code")} error={!!errors.code} helperText={errors.code?.message} sx={{ mb: 2 }} />
                    <TextField label="New Password" type="password" fullWidth {...register("newPassword")} error={!!errors.newPassword} helperText={errors.newPassword?.message} />
                    <Button type="submit" fullWidth variant="contained" disabled={resetPasswordMutation.isLoading || isSubmitting} sx={{ mt: 3, backgroundColor: "#ff6b6b" }}>
                        Reset Password
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default ResetPassword;
