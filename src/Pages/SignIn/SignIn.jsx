import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../../Components/Title";
import Logo from "../../img/logo.png";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleSignIn = (data) => console.log(data);

  return (
    <div className="lg:w-1/2 w-full mx-auto">
      <Title title="Sign In" />
      <form
        className="flex flex-col justify-center items-center h-screen mx-4"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <h1 className="text-center text-3xl font-serif font-bold my-5">
          Sing In
        </h1>

        <div className="lg:w-1/2 w-full">
          <div className="w-full text-center my-2">
            <input
              type="email"
              placeholder="Phone Number or Email"
              className="input input-bordered w-full"
              {...register("email", { required: "required" })}
            />
            {errors && (
              <p className="text-red-600 text-left">{errors.email?.message}</p>
            )}
          </div>
          <div className="w-full text-center my-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full pr-[46px]"
              {...register("password", { required: "required" })}
            />
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="checkbox checkbox-primary ml-[-30px]"
            />
            {errors && (
              <p className="text-red-600 text-left">
                {errors.password?.message}
              </p>
            )}
          </div>
          <button className="btn btn-primary w-full md:w-full text-white">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
