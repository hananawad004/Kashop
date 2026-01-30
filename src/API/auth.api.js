
// import axiosInstance from "./axiosInstance";

// export const loginRequest = async (credentials) => {
//   const response = await axiosInstance.post("/auth/Account/Login", credentials);
//   return response.data;
// };
// // export const loginRequest = async (credentials) => {
// //   const response = await axiosInstance.post(
// //     "/auth/Account/Login",
// //     {
// //       userName: credentials.email, // مهم
// //       password: credentials.password,
// //     }
// //   );
// //   return response.data;
// // };
// // auth.mock.js
// // let users = [
// //   { email: "test@example.com", password: "123456", accessToken: "token123" }
// // ];

// // export const registerRequest = async ({ email, password }) => {
// //   if (users.find(u => u.email === email)) {
// //     return { success: false, message: "Email already exists" };
// //   }
// //   const token = Math.random().toString(36).substring(2);
// //   users.push({ email, password, accessToken: token });
// //   return { success: true, accessToken: token, message: "Account created!" };
// // };

// // export const loginRequest = async ({ email, password }) => {
// //   const user = users.find(u => u.email === email && u.password === password);
// //   if (user) return { success: true, accessToken: user.accessToken };
// //   return { success: false, message: "Invalid email or password" };
// // };

// export const registerRequest = async (values) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (values.email === "test@example.com") {
//         resolve({ success: false, message: "Email already exists" });
//       } else {
//         resolve({ success: true, message: "Account created successfully!" });
//       }
//     }, 1000);
//   });
// };

// // Send Code
// export const sendCodeRequest = async ({ email }) => {
//   const response = await axiosInstance.post("/auth/Account/SendCode", { email });
//   return response.data;
// };

// // Reset Password
// export const resetPasswordRequest = async ({ email, code, newPassword }) => {
//   const response = await axiosInstance.patch("/api/auth/Account/ResetPassword", {
//     email,
//     code,
//     newPassword,
//   });
//   return response.data;
// };
import axiosInstance from "./axiosInstance"; // Axios مع الـbaseURL مضبوط

export const registerRequest = async (values) => {
  // قيم الفورم: { email, password, userName, fullName, phoneNumber }
  const response = await axiosInstance.post("/Auth/Account/Register", values, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

// Login
export const loginRequest = async (credentials) => {
  const response = await axiosInstance.post("/Auth/Account/Login", credentials);
  return response.data;
};

// Send code
export const sendCodeRequest = async ({ email }) => {
  const response = await axiosInstance.post("/Auth/Account/SendCode", { email });
  return response.data;
};

// Reset password
export const resetPasswordRequest = async ({ email, code, newPassword }) => {
  const response = await axiosInstance.patch("/Auth/Account/ResetPassword", {
    email,
    code,
    newPassword,
  });
  return response.data;
};
