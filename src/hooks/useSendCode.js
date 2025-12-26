import { useMutation } from "@tanstack/react-query";
import { sendCodeRequest } from "../API/auth.api";

export const useSendCode = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: sendCodeRequest,
    onSuccess,
    onError,
  });
};
