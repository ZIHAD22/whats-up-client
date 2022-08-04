import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Avatar = ({ width, selectedId }) => {
  return (
    <div className="avatar">
      <div className={`${width || "w-24"} rounded`}>
        <Link to={`/chatResult/${selectedId}`}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
