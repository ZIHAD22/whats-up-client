import React from "react";
import MessageItem from "./MessageItem";

const AllMessages = () => {
  return (
    <div className="overflow-y-scroll h-[600px] no-scrollbarChrome no-scrollbarFirefox">
      <div className="grid grid-cols-1 content-end p-5">
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
        <div className="mt-3">
          <MessageItem message="nice to meet you" />
        </div>
        <div className="text-right mt-3">
          <MessageItem message="welcome" />
        </div>
        <div className="mt-3">
          <MessageItem message="nice to meet you" />
        </div>
        <div className="text-right mt-3">
          <MessageItem message="welcome" />
        </div>
        <div className="mt-3">
          <MessageItem message="nice to meet you" />
        </div>
        <div className="text-right mt-3">
          <MessageItem message="welcome" />
        </div>
        <div className="mt-3">
          <MessageItem message="nice to meet you" />
        </div>
        <div className="text-right mt-3">
          <MessageItem message="welcome" />
        </div>
        <div className="mt-3">
          <MessageItem message="nice to meet you" />
        </div>
        <div className="text-right mt-3">
          <MessageItem message="welcome" />
        </div>
        <div className="mt-3">
          <MessageItem message="nice to meet you" />
        </div>
        <div className="text-right mt-3">
          <MessageItem message="welcome" />
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
