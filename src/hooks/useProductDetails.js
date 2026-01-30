
import { useQuery } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useProductDetails(productId) {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const response = await axiosAuthInstance.get(`/Products/${productId}`);
      return response.data?.response || {};
    },
    staleTime: 5 * 60 * 1000,
  });
}
