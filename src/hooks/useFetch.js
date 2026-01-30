// import React from "react";
// import axiosInstance from "../API/axiosInstance";
// import { useQuery } from "@tanstack/react-query";


// export default function useFetch(queryKey,url){

//     const fetchData=async()=>{
//         const response=await axiosInstance.get(url);
//         return response.response.data.data;
//     }
//   const query=useQuery({
//     queryKey:queryKey,
//     staleTime:5*60*1000,
//    queryFn:fetchData
//   })
//   return query;
// }
// export default function useFetch(queryKey, url) {
//   const fetchData = async () => {
//     const response = await axiosInstance.get(url);
//     const data = response.data?.response?.data || [];
//     return Array.isArray(data) ? data : [];
//   };

//   const query = useQuery({
//     queryKey: queryKey,
//     queryFn: fetchData,
//     staleTime: 5 * 60 * 1000,
//   });

//   return query;
// }

// useFetch.js
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
