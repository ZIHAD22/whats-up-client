import React from "react";
import Messages from "./Messages";
import Title from "../../Components/Title";
import { Outlet, useNavigate } from "react-router-dom";
import FriendProfile from "./FriendProfile";

const Chat = () => {
  const navigate = useNavigate();

  // if (user) {
  //   navigate("/chat");
  // }
  return (
    <div>
      <Title title="messages" />
      <div className="grid grid-cols-4">
        <div>
          {/* div for see all message */}
          <Messages />
        </div>
        <div className="col-span-2">
          {/* div for selected message see  */}
          <Outlet />
        </div>
        <div>
          {/* div for profile */}
          <FriendProfile />
        </div>
      </div>
    </div>
  );
};

export default Chat;
