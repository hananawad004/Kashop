// import React from "react";
// import { Paper, TextField, Typography, Box, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { loginSchema } from "../../../validations/LoginSchema";
// import { useLoginForm } from "../../../hooks/useLoginForm";
// import {jwtDecode} from 'jwt-decode';
// import LanguageSwitcher from "../../../LanguageSwitcher";
// function Login() {
//   const { serverErrors, loginMutation } = useLoginForm();
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(loginSchema),
//     mode: "onBlur",
//   });

//   return (
//     <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", py: 6, px: 2 }}>
//       <Paper elevation={3} sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px" }}>
//         <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>Login</Typography>
//           <LanguageSwitcher/>
//         {serverErrors.length > 0 && serverErrors.map((err, i) => (
//           <Typography key={i} color="error" sx={{ mb: 1 }}>{err}</Typography>
//         ))}

//         <Box component="form" onSubmit={handleSubmit((values) => loginMutation.mutate(values))} sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}>
//           <TextField label="Email" {...register("email")} error={!!errors.email} helperText={errors.email?.message} fullWidth />
//           <TextField label="Password" type="password" {...register("password")} error={!!errors.password} helperText={errors.password?.message} fullWidth />

//           <Button type="submit" variant="contained" disabled={loginMutation.isLoading} sx={{ mt: 2, py: 1.4, backgroundColor: "#ff6b6b", borderRadius: "10px", fontWeight: 600, "&:hover": { backgroundColor: "#ff5252" } }}>
//             Login
//           </Button>
//         </Box>

//         <Typography sx={{ mt: 3, textAlign: "center" }}>
//           <Link to="/auth/sendcode" style={{ textDecoration: "none", color: "#ff6b6b" }}>
//             Forget Password?
//           </Link>
//         </Typography>
//       </Paper>
//     </Box>
//   );
// }

// export default Login;
// // import React from "react";

// // import { Paper, TextField, Typography, Box, Button } from "@mui/material";
// // import { Link } from "react-router-dom";
// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import { loginSchema } from "../../../validations/LoginSchema";
// // import { useLoginForm } from "../../../hooks/useLoginForm";
// // import { useTranslation } from "react-i18next";
// // import LanguageSwitcher from "../../../LanguageSwitcher";
// // function Login() {
// //   const { t } = useTranslation();
// //   const { serverErrors, loginMutation } = useLoginForm();
// //   const { register, handleSubmit, formState: { errors } } = useForm({
// //     resolver: yupResolver(loginSchema),
// //     mode: "onBlur",
// //   });

// //   return (
// //       //  <LanguageSwitcher /> 
    
// //     <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center", py: 6, px: 2 }}>
// //       <Paper elevation={3} sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px" }}>
// //         <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>{t("Login")}</Typography>

// //         {serverErrors.length > 0 && serverErrors.map((err, i) => (
// //           <Typography key={i} color="error" sx={{ mb: 1 }}>{err}</Typography>
// //         ))}
// // <LanguageSwitcher /> 
// //         <Box component="form" onSubmit={handleSubmit((values) => loginMutation.mutate(values))} sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}>
// //           <TextField label={t("Email")} {...register("email")} error={!!errors.email} helperText={errors.email?.message} fullWidth />
// //           <TextField label={t("Password")} type="password" {...register("password")} error={!!errors.password} helperText={errors.password?.message} fullWidth />

// //           <Button type="submit" variant="contained" disabled={loginMutation.isLoading} sx={{ mt: 2, py: 1.4, backgroundColor: "#ff6b6b", borderRadius: "10px", fontWeight: 600, "&:hover": { backgroundColor: "#ff5252" } }}>
// //             {t("Login")}
// //           </Button>
// //         </Box>

// //         <Typography sx={{ mt: 3, textAlign: "center" }}>
// //           <Link to="/auth/sendcode" style={{ textDecoration: "none", color: "#ff6b6b" }}>
// //             {t("Forget Password?")}
// //           </Link>
// //         </Typography>
// //       </Paper>
// //     </Box>
     
// //   );
// // }

// // export default Login;
// // import React from "react";
// // import { Paper, TextField, Typography, Box, Button } from "@mui/material";
// // import { Link } from "react-router-dom";
// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import { loginSchema } from "../../../validations/LoginSchema";
// // import { useLoginForm } from "../../../hooks/useLoginForm";
// // import { useTranslation } from "react-i18next";
// // import LanguageSwitcher from "../../../LanguageSwitcher";

// // function Login() {
// //   const { t } = useTranslation();
// //   const { serverErrors, loginMutation } = useLoginForm();
// //   const { register, handleSubmit, formState: { errors } } = useForm({
// //     resolver: yupResolver(loginSchema),
// //     mode: "onBlur",
// //   });

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         backgroundColor: "#f5f5f5",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         py: 6,
// //         px: 2
// //       }}
// //     >
// //       <Paper elevation={3} sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px" }}>
        
// //         {/* زر تبديل اللغة */}
// //         <Box >
// //         < LanguageSwitcher />
// //         </Box>

// //         {/* عنوان الصفحة */}
// //         <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
// //           {t("title")}
// //         </Typography>

// //         {/* أخطاء السيرفر */}
// //         {serverErrors.length > 0 && serverErrors.map((err, i) => (
// //           <Typography key={i} color="error" sx={{ mb: 1 }}>
// //             {err}
// //           </Typography>
// //         ))}

// //         {/* الفورم */}
// //         <Box
// //           component="form"
// //           onSubmit={handleSubmit((values) => loginMutation.mutate(values))}
// //           sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}
// //         >
// //           <TextField
// //             label={t("email")}
// //             {...register("email")}
// //             error={!!errors.email}
// //             helperText={errors.email?.message}
// //             fullWidth
// //           />
// //           <TextField
// //             label={t("password")}
// //             type="password"
// //             {...register("password")}
// //             error={!!errors.password}
// //             helperText={errors.password?.message}
// //             fullWidth
// //           />

// //           <Button
// //             type="submit"
// //             variant="contained"
// //             disabled={loginMutation.isLoading}
// //             sx={{
// //               mt: 2,
// //               py: 1.4,
// //               backgroundColor: "#ff6b6b",
// //               borderRadius: "10px",
// //               fontWeight: 600,
// //               "&:hover": { backgroundColor: "#ff5252" }
// //             }}
// //           >
// //             {t("login.title")}
// //           </Button>
// //         </Box>

// //         {/* رابط نسيت كلمة المرور */}
// //         <Typography sx={{ mt: 3, textAlign: "center" }}>
// //           <Link to="/auth/sendcode" style={{ textDecoration: "none", color: "#ff6b6b" }}>
// //             {t("login.forget")}
// //           </Link>
// //         </Typography>

// //       </Paper>
// //     </Box>
// //   );
// // }

// // export default Login;
import React from "react";
import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validations/LoginSchema";
import { useLoginForm } from "../../../hooks/useLoginForm";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../../LanguageSwitcher";

function Login() {
  const { t } = useTranslation(); // ⚡ useTranslation hook
  const { serverErrors, loginMutation } = useLoginForm();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
        px: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{ width: "100%", maxWidth: "480px", p: 5, borderRadius: "18px" }}
      >
        {/* زر تبديل اللغة */}
        <Box sx={{ mb: 2 }}>
          <LanguageSwitcher />
        </Box>

        {/* عنوان الصفحة */}
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          {t("login.title")}
        </Typography>

        {/* أخطاء السيرفر */}
        {serverErrors.length > 0 && serverErrors.map((err, i) => (
          <Typography key={i} color="error" sx={{ mb: 1 }}>
            {err}
          </Typography>
        ))}

        {/* الفورم */}
        <Box
          component="form"
          onSubmit={handleSubmit((values) => loginMutation.mutate(values))}
          sx={{ display: "flex", flexDirection: "column", gap: 2.8 }}
        >
          <TextField
            label={t("login.email")}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
          <TextField
            label={t("login.password")}
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loginMutation.isLoading}
            sx={{
              mt: 2,
              py: 1.4,
              backgroundColor: "#ff6b6b",
              borderRadius: "10px",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#ff5252" }
            }}
          >
            {loginMutation.isLoading ? t("login.loggingIn") : t("login.title")}
          </Button>
        </Box>

        {/* رابط نسيت كلمة المرور */}
        <Typography sx={{ mt: 3, textAlign: "center" }}>
          <Link to="/auth/sendcode" style={{ textDecoration: "none", color: "#ff6b6b" }}>
            {t("login.forget")}
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
