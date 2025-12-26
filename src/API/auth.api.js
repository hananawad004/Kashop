
import axiosInstance from "./axiosInstance";

export const loginRequest = async (credentials) => {
  const response = await axiosInstance.post("/auth/Account/Login", credentials);
  return response.data;
};

export const registerRequest = async (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (values.email === "test@example.com") {
        resolve({ success: false, message: "Email already exists" });
      } else {
        resolve({ success: true, message: "Account created successfully!" });
      }
    }, 1000);
  });
};

// Send Code
export const sendCodeRequest = async ({ email }) => {
  const response = await axiosInstance.post("/auth/Account/SendCode", { email });
  return response.data;
};

// Reset Password
export const resetPasswordRequest = async ({ email, code, newPassword }) => {
  const response = await axiosInstance.patch("/api/auth/Account/ResetPassword", {
    email,
    code,
    newPassword,
  });
  return response.data;
};
