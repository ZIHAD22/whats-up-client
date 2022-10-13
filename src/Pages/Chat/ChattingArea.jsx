import React from "react";
import ChatNavBar from "./ChatNavBar";
import ChatInput from "./ChatInput";
import AllMessages from "./AllMessages";
import { useParams } from "react-router-dom";

const ChattingArea = () => {

  return (
    <div className="block overflow-hidden">
      <ChatNavBar
      />
      <AllMessages />
      <ChatInput />
    </div>
  );
};

export default ChattingArea;
