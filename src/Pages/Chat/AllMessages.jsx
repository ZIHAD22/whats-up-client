import React from "react";
import MessageItem from "./MessageItem";

const AllMessages = () => {
  return (
    <div>
      <div className="grid grid-cols-1 content-end p-5 h-[600px]">
        <div className="mt-3">
          <MessageItem message="hi" />
        </div>
        <div className="text-right mt-3">
          <MessageItem message="hello" />
        </div>
        <div className="mt-3">
          <MessageItem message="nice to meet you" />
        </div>
        <div className="text-right mt-3">
          <MessageItem message="welcome" />
        </div>
      </div>
    </div>
  );
};

export default AllMessages;
