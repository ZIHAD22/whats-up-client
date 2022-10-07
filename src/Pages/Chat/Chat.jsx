import React from "react";
import Messages from "./Messages";
import Title from "../../Components/Title";
import { Outlet } from "react-router-dom";
import FriendProfile from "./FriendProfile";
import { useState } from "react";
import useSelectedFriend from "../../hooks/useSelectedFriend";
import { useEffect } from "react";
import { useSelector } from "react-redux";




const Chat = ({ setSelectedId, selectedFriendId }) => {
  const [selectedId] = useSelector(state => [state.allUser.selectedUser.selectedUserId])

  return (
    <div>
      <Title title="messages" />
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className={`${selectedId ? "hidden" : "block"} md:block`}>
          {/* div for see all message */}
          <Messages />
        </div>
        <div
          className={`col-span-2 ${!selectedId ? "hidden" : "block"} md:block`}
        >
          {/* div for selected message see  */}
          <Outlet />
        </div>
        <div className="md:block hidden">
          {/* div for profile */}
          <FriendProfile />
        </div>
      </div>
    </div>
  );
};

export default Chat;
