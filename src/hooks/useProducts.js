
// import useFetch from "./useFetch";

// export default function useProducts(categoryId) {
//   const url = categoryId ? `/Products/category/${categoryId}` : `/Products?limit=1000`;
//   return useFetch(['products', categoryId], url);
// }
import { useQuery } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useProducts(categoryId) {
  const url = categoryId ? `/Products/category/${categoryId}` : `/Products?limit=1000`;

  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: async () => {
      const res = await axiosAuthInstance.get(url);
    
      return Array.isArray(res.data?.response?.data) ? res.data.response.data : [];
    },
    staleTime: 5 * 60 * 1000,
  });
}
