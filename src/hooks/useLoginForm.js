import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { useAuthStore } from "../store/authStore";
import { useLogin } from "./useLogin";

export const useLoginForm = () => {
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();

  // ⬅️ بدل setAccessToken
  const setAuth = useAuthStore((state) => state.setAuth);

  const loginMutation = useLogin({
    onSuccess: (data) => {
      // حسب API تبعك
      if (data.accessToken) {
        const token = data.accessToken;

        // فك التوكن
        const decoded = jwtDecode(token);

        const user = {
          name: decoded[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
          ],
          role: decoded[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ],
        };

        // تخزين التوكن + اليوزر
        setAuth(token, user);

        navigate("/home");
      } else {
        setServerErrors([data.message || "Something went wrong"]);
      }
    },

    onError: (err) => {
      if (Array.isArray(err.response?.data?.errors)) {
        setServerErrors(err.response.data.errors);
      } else if (err.response?.data?.message) {
        setServerErrors([err.response.data.message]);
      } else {
        setServerErrors(["Something went wrong"]);
      }
    },
  });

  return {
    serverErrors,
    loginMutation,
  };
};
