import axiosInstance from "./axiosInstance";

export const loginRequest = async (values) => {
  const response = await axiosInstance.post(
    "/Auth/Account/Login",
    values
  );
  return response.data;
};
