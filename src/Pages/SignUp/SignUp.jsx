import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Avatar from "../../Components/Avatar";
import Title from "../../Components/Title";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
    navigate("/chat", { replace: true });
  };

  return (
    <div className="lg:w-1/2 w-full mx-auto">
      <Title title="Sign Up" />
      <form
        className="flex flex-col justify-center items-center h-screen mx-4"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Avatar />

        <h1 className="text-center text-3xl font-serif font-bold my-5">
          Sing Up
        </h1>

        <div className="lg:w-1/2 w-full">
          <div className="w-full text-center my-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              {...register("userName", { required: "required" })}
            />
            {errors && (
              <p className="text-red-600 text-left">
                {errors.userName?.message}
              </p>
            )}
          </div>
          <div className="w-full text-center my-2">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("userEmail", { required: "required" })}
            />
            {errors && (
              <p className="text-red-600 text-left">
                {errors.userEmail?.message}
              </p>
            )}
          </div>
          <div className="w-full text-center my-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full pr-[46px]"
              {...register("userPassword", { required: "required" })}
            />
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="checkbox checkbox-primary ml-[-30px]"
            />
            {errors && (
              <p className="text-red-600 text-left">
                {errors.userPassword?.message}
              </p>
            )}
          </div>
          <div className="w-full text-center my-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="input input-bordered w-full pr-[46px]"
              {...register("confirmPassword", { required: "required" })}
            />
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="checkbox checkbox-primary ml-[-30px]"
            />
            {errors && (
              <p className="text-red-600 text-left">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
          <div className="w-full text-center my-2">
            <input
              type="file"
              className="input input-bordered w-full"
              {...register("profileImg", { required: "required" })}
            />
            {errors && (
              <p className="text-red-600 text-left">
                {errors.profileImg?.message}
              </p>
            )}
          </div>
          <button className="btn btn-primary w-full md:w-full text-white">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
