import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useClearCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await axiosAuthInstance.delete("/Carts/clear");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
}
