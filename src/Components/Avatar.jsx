import React from "react";
import Logo from "../img/logo.png";

const Avatar = ({ width }) => {
  return (
    <div className="avatar">
      <div className={`${width || "w-24"} rounded`}>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Avatar;
