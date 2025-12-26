import { useMutation } from "@tanstack/react-query";
import { resetPasswordRequest } from "../API/auth.api";

export const useResetPassword = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: resetPasswordRequest,
    onSuccess,
    onError,
  });
};
