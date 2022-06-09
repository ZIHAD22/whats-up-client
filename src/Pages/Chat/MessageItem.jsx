import React from "react";

const MessageItem = ({ message }) => {
  return (
    <h1 className="text-lg text-white inline-block bg-primary max-w-[40%] p-3 rounded-lg break-words">
      {message}
    </h1>
  );
};

export default MessageItem;
