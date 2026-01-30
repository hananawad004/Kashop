import { useQuery } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useCanReview(productId) {
  return useQuery({
    queryKey: ["canReview", productId],
    queryFn: async () => {
      try {
        const { data } = await axiosAuthInstance.get(
          `/Products/${productId}/can-review`
        );
        return data; 
      } catch (err) {

        if (err?.response?.status === 404) return true;
        throw err; 
      }
    },
    enabled: !!productId,
  });
}
