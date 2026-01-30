
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useRemoveFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId) => {
      await axiosAuthInstance.delete(`/Carts/${productId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
}
