import { useMutation } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";


export default function useAddReview() {
  return useMutation({
    mutationFn: ({ productId, Rating, Comment }) => {
      console.log("Submitting review payload:", { productId, Rating, Comment });
      return axiosAuthInstance.post(`/Products/${productId}/reviews`, { Rating, Comment });
    },
    onSuccess: (res) => {
      console.log("✅ Review Success:", res.data);
    },
    onError: (err) => {
      console.error("❌ Review Failed:", err);
      console.error("❌ Server Response:", err?.response?.data);
    },
  });
}
