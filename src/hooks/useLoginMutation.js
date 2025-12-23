import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../API/auth.api";

export const useLoginMutation = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: loginRequest,
    onSuccess,
    onError,
  });
};
