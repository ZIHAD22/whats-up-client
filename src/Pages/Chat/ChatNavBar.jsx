import React from "react";
import ActiveFriend from "./ActiveFriend";

const ChatNavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md ">
      <div className="flex-1">
        <ActiveFriend />
        <div className="ml-2">
          <h1 className="normal-case text-xl">MD. ZIHAD</h1>
          <small className="">Active Now</small>
        </div>
      </div>
      <div className="dropdown">
        <label tabindex="0" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </label>
        {/* <ul
          tabindex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default ChatNavBar;
