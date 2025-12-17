import * as yup from 'yup'

const ResetPasswordSchema = yup.object({
    code: yup.string().required("Code is required"),
    newPassword: yup.string()
        .required("Password is required")
        .min(8, "At least 8 characters")
        .matches(/[A-Z]/, "One uppercase letter")
        .matches(/[a-z]/, "One lowercase letter")
        .matches(/\d/, "One number")
        .matches(/[@$!%*?&]/, "One special character"),
});
export default ResetPasswordSchema