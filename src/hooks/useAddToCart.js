// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axiosAuthInstance from "../API/axiosAuthInstance";

// export default function useAddToCart() {
//    const queryClient = useQueryClient();
// return useMutation({
//   mutationFn: async ({ ProductId, Count, Price }) => {
//     await axiosAuthInstance.post("/Carts", {
//       ProductId,
//       Count,
//       Price, 
//     });
//   },
//   onSuccess: () => {
//     queryClient.invalidateQueries(["cart"]);
//   },
// });
// }
 

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ ProductId, Count }) => {
      await axiosAuthInstance.post("/Carts", {
        ProductId,
        Count,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
}
