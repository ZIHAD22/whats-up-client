import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSelectedConversationUserId, getSelectedConversationUserInfo } from "../features/chat/conversationUserSlice";
import Logo from "../img/logo.png";

const Avatar = ({ width }) => {
  const dispatch = useDispatch()
  return (
    <div className="avatar">
      <div onClick={() => {
        dispatch(getSelectedConversationUserId(""))
        dispatch(getSelectedConversationUserInfo())
      }} className={`${width || "w-24"} rounded`}>
        <Link to={`/`}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
