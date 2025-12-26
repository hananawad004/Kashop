import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSendCode } from "./useSendCode";

export const useSendCodeForm = () => {
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();

  const sendCodeMutation = useSendCode({
    onSuccess: (data) => {
      navigate("/auth/resetpassword"); 
    },
    onError: (err) => {
      setServerErrors([err.message || "Something went wrong"]);
    },
  });

  return {
    serverErrors,
    sendCodeMutation,
  };
};
