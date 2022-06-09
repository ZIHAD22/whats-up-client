import "../../CustomCss/Messages.css";
import React from "react";
import Avatar from "../../Components/Avatar";
const flexCss = "flex justify-center items-center";

const Messages = () => {
  return (
    <div className="h-screen p-5">
      <div className="shadow-md p-3 rounded-md">
        <div className={`flex items-center justify-start`}>
          <Avatar width="w-[50px]" />
          <span className="text-3xl uppercase">messages</span>
        </div>
        <div className={`${flexCss} my-4`}>
          <input
            type="text"
            placeholder="Search People and chats"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="overflow-y-scroll p-5 messageAreaHeight no-scrollbarChrome no-scrollbarFirefox">
          <div className={`${flexCss} my-4`}>
            <input
              type="text"
              placeholder="Search People and chats"
              class="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
