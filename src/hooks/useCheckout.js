// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axiosAuthInstance from "../API/axiosAuthInstance"; // نسخة axios مع Authorization

// export default function useCheckout() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async ({ PaymentMethod }) => {
//       const response = await axiosAuthInstance.post("/Checkouts", { PaymentMethod });
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["cart"]); // لتحديث الكارت بعد الدفع
//     },
//   });
// }
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useCheckout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ PaymentMethod }) => {
      // backend يريد فقط PaymentMethod
      const response = await axiosAuthInstance.post("/Checkouts", { PaymentMethod });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]); // لتحديث الكارت بعد الدفع
    },
  });
}
