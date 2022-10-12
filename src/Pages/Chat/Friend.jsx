import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSelectedConversationId, getSelectedConversationInfo } from "../../features/chat/conversationUserSlice";
import { fetchSelectedConversationMeg } from "../../features/chat/messagesSlice";
import curvedArrow from "../../img/curved-arrow-left.svg";
import ActiveFriend from "./ActiveFriend";

const Friend = ({ user: { name, profilePic, _id } }) => {
  const dispatch = useDispatch()
  return (
    <Link
      to={`chatResult/${_id}`}
      onClick={() => {
        // dispatch(getSelectedUserId(_id))
        // dispatch(getSelectedUserInfo())
        dispatch(getSelectedConversationId(_id))
        dispatch(getSelectedConversationInfo())
        dispatch(fetchSelectedConversationMeg())
      }}
      className="grid grid-cols-3 justify-items-center hover:bg-[#30af91a1] bg-[#30AF91] cursor-pointer text-white px-1 py-2 rounded-lg my-2"
    >
      <ActiveFriend activePic={profilePic} />
      <div className="col-span-2">
        <h1>{name}</h1>

        <small className="flex">
          <img className="w-[10px] mr-2" src={curvedArrow} alt="arrow" /> Lorem,
          ipsum dolor sit
        </small>
      </div>
    </Link>
  );
};

export default Friend;
