// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useRegister } from "./useRegister";

// export const useRegisterForm = () => {
//   const [serverErrors, setServerErrors] = useState([]);
//   const navigate = useNavigate();

//   const registerMutation = useRegister({
//     onSuccess: (data) => {
//       if (data.success) {
//         alert("Account created successfully! Redirecting to Login...");
//         navigate("/auth/login");
//       } else {
//         setServerErrors([data.message || "Something went wrong"]);
//       }
//     },
//     onError: (err) => {
//       if (Array.isArray(err.response?.data?.errors)) {
//         setServerErrors(err.response.data.errors);
//       } else if (err.response?.data?.message) {
//         setServerErrors([err.response.data.message]);
//       } else {
//         setServerErrors(["Something went wrong"]);
//       }
//     },
//   });

//   return {
//     serverErrors,
//     registerMutation,
//   };
// };
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "./useRegister";

export const useRegisterForm = () => {
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();

  const registerMutation = useRegister({
    onSuccess: (data) => {
      console.log("Server response:", data);
      if (data?.success) {
        alert("Account created successfully! Redirecting to Login...");
        navigate("/auth/login");
      } else {
        setServerErrors([data?.message || "Something went wrong"]);
      }
    },
    onError: (err) => {
      console.error("Server error:", err.response || err);
      if (err.response?.data?.errors) {
        setServerErrors(err.response.data.errors);
      } else if (err.response?.data?.message) {
        setServerErrors([err.response.data.message]);
      } else {
        setServerErrors(["Something went wrong"]);
      }
    },
  });

  return { serverErrors, registerMutation };
};
