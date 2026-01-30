// import { useQuery } from "@tanstack/react-query";
// import axiosAuthInstance from "../API/axiosAuthInstance";

// export default function useCartItems() {
//   return useQuery({
//     queryKey: ["cart"],
//     queryFn: async () => {
//       const res = await axiosAuthInstance.get("/Carts");
//       return res.data; // { items, cartTotal }
//     },
//     staleTime: 0,
//   });
// }
import { useQuery } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useCartItems() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosAuthInstance.get("/Carts");

      const data = res.data || {};

      return {
        items: data.items || [],
        cartTotal: data.cartTotal ?? 0,   
      };
    },
    staleTime: 0,
  });
}
