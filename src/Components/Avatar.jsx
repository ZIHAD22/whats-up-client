import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSelectedUserId, getSelectedUserInfo } from "../features/chat/allUserSlice";
import Logo from "../img/logo.png";

const Avatar = ({ width }) => {
  const dispatch = useDispatch()
  return (
    <div className="avatar">
      <div onClick={() => {
        dispatch(getSelectedUserId(""))
        dispatch(getSelectedUserInfo())
      }} className={`${width || "w-24"} rounded`}>
        <Link to={`/`}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
