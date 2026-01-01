// src/API/products.api.js
import axiosInstance from "./axiosInstance";

export const getCategories = async () => {
  const res = await axiosInstance.get("/Categories");
  return res.data;
};

export const getProducts = async () => {
  const res = await axiosInstance.get("/Products");
  return res.data;
};
