
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useUpdateCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cartItemId, count }) => {
      await axiosAuthInstance.patch(`/Carts/${cartItemId}`, { count });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
}
