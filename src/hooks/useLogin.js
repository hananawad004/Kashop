import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../API/auth.api";

export const useLogin = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: loginRequest,
    onSuccess,
    onError,
  });
};
