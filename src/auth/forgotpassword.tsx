import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../ui/input";

const ForgotSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
});

const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgotSchema),
  });

  const onSubmit = (data : unknown) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("email")} type="email" placeholder="Enter your email" />
        {errors.email?.message && <p>{String(errors.email.message)}</p>}
        <button type="submit">Submit</button>
        <p>OTP send to the please check your email</p>
      </form>
    </div>
  );
};

export default ForgotPassword;
