import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import Input from "../ui/input";

interface ResetPasswordData {
  newPassword: string;
  confirmPassword: string;
}

const ResetSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, "Password should be at least 8 characters")
    .matches(/[A-Z]/, "Password should contain at least 1 uppercase letter")
    .matches(/[0-9]/, "Password should contain at least 1 number")
    .matches(/[\W_]/, "Password should contain at least 1 special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match") // Ensure both passwords match
    .required("Confirm Password is required"),
});

const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: yupResolver(ResetSchema),
  });

  const onSubmit = (data: ResetPasswordData) => {
    console.log("Password Reset Data:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("newPassword")} type="password" placeholder="Enter new password" />
        {errors.newPassword && <p>{errors.newPassword.message}</p>}

        <Input {...register("confirmPassword")} type="password" placeholder="Re-enter to confirm password" />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
