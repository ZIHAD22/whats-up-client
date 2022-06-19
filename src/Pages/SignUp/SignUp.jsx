import axios from "../../util/axios.js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Avatar from "../../Components/Avatar";
import Title from "../../Components/Title";
import { toast } from "react-toastify";
import useImgUpload from "../../hooks/useImgUpload.js";
import useSetAccessToken from "../../hooks/useSetAccessToken.js";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [imgUpload, ImgUploadLoading, setUploadLoading] = useImgUpload();
  const [setAccessToken] = useSetAccessToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = async (data) => {
    const {
      name,
      email,
      password,
      confirmPassword,
      profileImg: notSavedImg,
    } = data;

    if (password !== confirmPassword) {
      return toast.warning("Password and confirm password not matched");
    }
    let uploadedProfileUrl;
    const profImg = notSavedImg[0];
    if (profImg) {
      setUploadLoading(true);
      uploadedProfileUrl = await imgUpload(profImg);
    }

    const { data: newUser } = await axios.post("signUp", {
      name,
      email,
      password,
      profilePic: uploadedProfileUrl,
    });

    if (newUser.result._id) {
      setAccessToken(newUser.userToken);
      toast.success("User Successfully Created");
      navigate("/chat", { replace: true });
    }
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
              {...register("name", { required: "required" })}
            />
            {errors && (
              <p className="text-red-600 text-left">{errors.name?.message}</p>
            )}
          </div>
          <div className="w-full text-center my-2">
            <input
              type="email"
              placeholder="Email"
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
              {...register("profileImg")}
            />
          </div>
          <button
            className={` ${
              ImgUploadLoading && "loading"
            } btn btn-primary w-full md:w-full text-white`}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
