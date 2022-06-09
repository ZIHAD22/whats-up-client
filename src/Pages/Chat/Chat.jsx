import React from "react";
import Messages from "./Messages";
import Title from "../../Components/Title";

const Chat = () => {
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
          <h1>this is result options</h1>
        </div>
        <div>
          {/* div for profile */}
          <h1>this is profile options</h1>
        </div>
      </div>
    </div>
  );
};

export default Chat;
