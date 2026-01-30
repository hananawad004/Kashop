import { useMutation } from "@tanstack/react-query";
import axiosAuthInstance from "../API/axiosAuthInstance";

export default function useChangePassword() {
  return useMutation(async ({ CurrentPassword, NewPassword, ConfirmNewPassword }) => {
    await axiosAuthInstance.patch("/Profile/change-password", {
      CurrentPassword,
      NewPassword,
      ConfirmNewPassword,
    });
  });
}
