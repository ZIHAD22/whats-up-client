import "../../CustomCss/Messages.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Friend from "./Friend";
import useAllUser from "../../hooks/useAllUser";


const Messages = () => {
  const [allUsers] = useAllUser()
  return (
    <div className="h-screen pr-0">
      <div className="shadow-md p-3 rounded-md">
        <Header />
        <div className="overflow-y-scroll p-5 messageAreaHeight no-scrollbarChrome no-scrollbarFirefox">
          {allUsers?.map(user => <Friend user={user} />)}
        </div>
      </div>
    </div>
  );
};

export default Messages;
