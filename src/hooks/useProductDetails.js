// import useFetch from "./useFetch";
// export default function useProductDetails(productId) {
//     return useFetch(['product', productId], `/Products/${productId}`);
// }

// import { useQuery } from "@tanstack/react-query";
// import axiosInstance from "../API/axiosInstance";

// export default function useProductDetails(productId) {
//   return useQuery({
//     queryKey: ['product', productId],
//     queryFn: async () => {
//       const response = await axiosInstance.get(`/Products/${productId}`);
//       return response.data?.response || {}; // ← هنا نأخذ object من response
//     },
//     staleTime: 5 * 60 * 1000,
//   });
// }
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
