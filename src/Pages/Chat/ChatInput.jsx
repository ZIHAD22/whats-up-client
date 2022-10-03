import axios from "../../util/axios";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";
import useAuthUser from "../../hooks/useAuthUser";

const ChatInput = ({ selectedFriend }) => {
  const [user] = useAuthUser();
  const [sendingMessages, setSenddingMessages] = useState("");
  const handleMessages = (e) => {
    setSenddingMessages(e.target.value);
  };

  const handleSenddingMessages = async () => {
    const { data } = await axios.put("/messages", {
      user: [user.user._id, selectedFriend._id],
      firstSender: user.user._id,
      lastSender: user.user._id,
      lastMessages: sendingMessages,
      senddingTo: selectedFriend._id,
    });
    console.log(data);
    setSenddingMessages("");
  };

  return (
    <div className="grid grid-cols-6 mt-5">
      <div className="flex justify-center items-center">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              className="h-12 w-16 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content top-[-140px] mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <a href=".">Homepage</a>
            </li>
            <li>
              <a href=".">Portfolio</a>
            </li>
            <li>
              <a href=".">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-4">
        <input
          type="text"
          onChange={handleMessages}
          value={sendingMessages}
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
        />
      </div>
      <button
        className="flex justify-center items-center"
        onClick={handleSenddingMessages}
      >
        <ArrowCircleRightIcon className="h-12 w-16 text-primary" />
      </button>
    </div>
  );
};

export default ChatInput;
