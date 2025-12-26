// useRegister.js
import { useMutation } from "@tanstack/react-query";
import { registerRequest } from "../API/auth.api";

export const useRegister = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: registerRequest,
    onSuccess,
    onError,
  });
};
