import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetPassword } from "./useResetPassword";

export const useResetPasswordForm = () => {
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");

  const resetPasswordMutation = useResetPassword({
    onSuccess: (data) => {
      alert(data.message || "Password reset successfully");
      localStorage.removeItem("resetEmail");
      navigate("/auth/login");
    },
    onError: (err) => {
      setServerErrors([err.message || "Something went wrong"]);
    },
  });

  return {
    serverErrors,
    resetPasswordMutation,
    email,
  };
};
