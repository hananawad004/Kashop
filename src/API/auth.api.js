
import axiosInstance from "./axiosInstance"; 

export const registerRequest = async (values) => {
  
  const response = await axiosInstance.post("/Auth/Account/Register", values, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};


export const loginRequest = async (credentials) => {
  const response = await axiosInstance.post("/Auth/Account/Login", credentials);
  return response.data;
};


export const sendCodeRequest = async ({ email }) => {
  const response = await axiosInstance.post("/Auth/Account/SendCode", { email });
  return response.data;
};


export const resetPasswordRequest = async ({ email, code, newPassword }) => {
  const response = await axiosInstance.patch("/Auth/Account/ResetPassword", {
    email,
    code,
    newPassword,
  });
  return response.data;
};
