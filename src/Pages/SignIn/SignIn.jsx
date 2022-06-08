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
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Title title="Sign In" />
      <form
        className="flex flex-col justify-center items-center h-screen mx-4"
        action=""
      >
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <h1 className="text-center text-3xl font-serif font-bold my-5">
          Sing In
        </h1>

        <div className="w-full text-center my-2">
          <input
            type="text"
            placeholder="Phone Number or Email"
            className="input input-bordered w-full md:max-w-xs lg:max-w-lg"
          />
        </div>
        <div className="w-full text-center my-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full md:max-w-xs lg:max-w-lg pr-[46px]"
          />
          <input
            type="checkbox"
            checked={showPassword}
            onClick={() => setShowPassword(!showPassword)}
            className="checkbox checkbox-primary ml-[-30px]"
          />
        </div>
        <button className="btn btn-primary lg:w-1/5 md:w-full text-white">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
