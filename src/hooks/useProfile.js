// import { useQuery } from "@tanstack/react-query";
// import axiosAuthInstance from "../API/axiosAuthInstance";

// export default function useProfile() {
//   return useQuery({
//     queryKey: ["profile"],
//     queryFn: async () => {
//       const { data } = await axiosAuthInstance.get("/Profile");
//       return data;
//     },
//     staleTime: 1000 * 60 * 5, 
//   });
// }
import { useQuery } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useProfile() {
  return useQuery({
    queryKey: ["profile"],    // key كـ array
    queryFn: async () => {
      const { data } = await axiosAuthInstance.get("/Profile");
      return data;
    },
  });
}
