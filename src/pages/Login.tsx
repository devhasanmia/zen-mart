import { FiLogIn } from "react-icons/fi";
import ZmInput from "../components/ZmInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { TUserLogin } from "../types/login.type";
import { toast } from "sonner";
import ZmButton from "../components/ui/ZmButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../validations/login.validation";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUserLogin>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<TUserLogin> = (data) => {
    toast.success("Logged in successfully!");
    console.log(data);
    reset();
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="p-2 bg-zm-p w-10 flex items-center justify-center text-white rounded-lg mx-auto">
          <FiLogIn size={20} />
        </div>
        <h1 className="text-3xl font-bold text-center my-4">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <ZmInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
            error={errors.email?.message}
          />
          <ZmInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            register={register("password")}
            error={errors.password?.message}
          />
          {/* Submit Button Start */}
          <ZmButton text="Login" type="submit" />
          {/* Submit Button End */}
        </form>
      </div>
    </div>
  );
};

export default Login;
