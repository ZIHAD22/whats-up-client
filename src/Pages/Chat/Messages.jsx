import "../../CustomCss/Messages.css";
import React from "react";
import Header from "./Header";
import Friend from "./Friend";


const Messages = ({allUsers , selectedFriendId}) => {
  return (
    <div className="h-screen pr-0">
      <div className="shadow-md p-3 rounded-md">
        <Header />
        <div className="overflow-y-scroll p-5 messageAreaHeight no-scrollbarChrome no-scrollbarFirefox">
          {allUsers?.map(user => <Friend key={user._id} user={user} selectedFriendId={selectedFriendId} />)}
        </div>
      </div>
    </div>
  );
};

export default Messages;
