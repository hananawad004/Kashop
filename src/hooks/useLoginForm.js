import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLogin } from "./useLogin";

export const useLoginForm = () => {
    const [serverErrors, setServerErrors] = useState([]);
    const { setToken, setAccessToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginMutation = useLogin({
        onSuccess: (data) => {
            if (data.success) {
                const token = data.accessToken;
                setAccessToken(token);
                setToken(token);
                navigate("/");
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
