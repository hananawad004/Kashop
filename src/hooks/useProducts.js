import axiosInstance from '../API/axiosInstance';
import { useQuery } from '@tanstack/react-query';

export default function useProducts(categoryId) {
  const fetchProducts = async () => {
    const res = await axiosInstance.get('/Products', {
      params: { limit: 1000, ...(categoryId && { categoryId }) },
    });

    const products = res?.data?.response?.data || [];
    return Array.isArray(products) ? products : [];
  };

  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });
}
