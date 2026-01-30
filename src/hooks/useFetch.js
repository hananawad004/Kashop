
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../API/axiosInstance";

export default function useFetch(queryKey, url) {
  const fetchData = async () => {
    const res = await axiosInstance.get(url);
    return Array.isArray(res.data?.response) ? res.data.response : [];
  };

  return useQuery({
    queryKey,
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000,
  });
}
