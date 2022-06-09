import React from "react";
import { Link } from "react-router-dom";
import curvedArrow from "../../img/curved-arrow-left.svg";
import ActiveFriend from "./ActiveFriend";

const Friend = () => {
  return (
    <Link
      to="chatResult"
      className="grid grid-cols-3 justify-items-center hover:bg-[#30af91a1] bg-[#30AF91] cursor-pointer text-white px-1 py-2 rounded-lg my-2"
    >
      <ActiveFriend/>
      <div className="col-span-2">
        <h1>MD. ZIHAD</h1>

        <small className="flex">
          <img className="w-[10px] mr-2" src={curvedArrow} alt="arrow" /> Lorem,
          ipsum dolor sit
        </small>
      </div>
    </Link>
  );
};

export default Friend;
