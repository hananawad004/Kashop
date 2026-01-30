import { useQuery } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useCartItems() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosAuthInstance.get("/Carts");
      return res.data; // { items, cartTotal }
    },
    staleTime: 0,
  });
}
