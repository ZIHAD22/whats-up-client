import React from "react";
import Messages from "./Messages";
import Title from "../../Components/Title";
import { Outlet } from "react-router-dom";
import FriendProfile from "./FriendProfile";
import useAllUser from "../../hooks/useAllUser";
import { useState } from "react";
import useSelectedFriend from "../../hooks/useSelectedFriend";
import Spinner from "../../Components/Spinner";
import { useEffect } from "react";

const Chat = () => {
  const [allUsers, isLoading] = useAllUser();
  const [selectedId, setSelectedId] = useState("");
  const selectedFriendId = (id) => {
    setSelectedId(id);
  };
  const [selectedFriend] = useSelectedFriend(selectedId);

  return (
    <div>
      <Title title="messages" />
      <div className="grid grid-cols-4">
        <div>
          {/* div for see all message */}
          <Messages
            allUsers={allUsers}
            selectedFriendId={selectedFriendId}
            isLoading={isLoading}
          />
        </div>
        <div className="col-span-2">
          {/* div for selected message see  */}
          <Outlet />
        </div>
        <div>
          {/* div for profile */}
          <FriendProfile selectedFriend={selectedFriend} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
