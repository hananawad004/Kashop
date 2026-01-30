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
        return data; // true أو false من السيرفر
      } catch (err) {
        // لو السيرفر رجع 404، اعتبر أن المستخدم يقدر يضيف review
        if (err?.response?.status === 404) return true;
        throw err; // أي خطأ آخر نعيده
      }
    },
    enabled: !!productId,
  });
}
