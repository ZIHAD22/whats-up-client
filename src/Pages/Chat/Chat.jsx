import React from "react";
import Messages from "./Messages";
import Title from "../../Components/Title";
import { Outlet } from "react-router-dom";
import FriendProfile from "./FriendProfile";
import useAllUser from "../../hooks/useAllUser";
import { useState } from "react";
import useSelectedFriend from "../../hooks/useSelectedFriend";
import { useEffect } from "react";

const Chat = ({ selectedId, setSelectedId, selectedFriendId }) => {
  const [searchKey, setSearchKey] = useState("");
  const [allUsers, isLoading] = useAllUser(searchKey);
  const [isAutoSelected, setAutoSelect] = useState(false);

  const [selectedFriend] = useSelectedFriend(selectedId);
  useEffect(() => {
    setAutoSelect(!isAutoSelected);
  }, []);

  const handleSearchKey = (e, searchKey) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <Title title="messages" />
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className={`${selectedId ? "hidden" : "block"} md:block`}>
          {/* div for see all message */}
          <Messages
            allUsers={allUsers}
            selectedFriendId={selectedFriendId}
            setSelectedId={setSelectedId}
            isLoading={isLoading}
            selectedId={selectedId}
            isAutoSelected={isAutoSelected}
            handleSearch={handleSearchKey}
            searchKey={searchKey}
          />
        </div>
        <div
          className={`col-span-2 ${!selectedId ? "hidden" : "block"} md:block`}
        >
          {/* div for selected message see  */}
          <Outlet />
        </div>
        <div className="md:block hidden">
          {/* div for profile */}
          <FriendProfile selectedFriend={selectedFriend} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
