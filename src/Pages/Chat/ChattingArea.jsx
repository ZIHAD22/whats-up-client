import React from "react";
import ChatNavBar from "./ChatNavBar";
import ChatInput from "./ChatInput";
import AllMessages from "./AllMessages";
import useSelectedFriend from "../../hooks/useSelectedFriend";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ChattingArea = () => {
  let {id} = useParams()

  const [selectedFriend] = useSelectedFriend(id)

  return (
    <div className="">
      <ChatNavBar selectedFriend={selectedFriend} />
      <AllMessages />
      <ChatInput />
    </div>
  );
};

export default ChattingArea;
