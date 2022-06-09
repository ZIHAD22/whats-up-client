import React from "react";
import curvedArrow from "../../img/curved-arrow-left.svg";

const Friend = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center hover:bg-[#30af91a1] bg-[#30AF91] cursor-pointer text-white px-1 py-2 rounded-lg my-2">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=28212" alt="user" />
        </div>
      </div>
      <div className="col-span-2">
        <h1>MD. ZIHAD</h1>

        <small className="flex">
          <img className="w-[10px] mr-2" src={curvedArrow} alt="arrow" /> Lorem,
          ipsum dolor sit
        </small>
      </div>
    </div>
  );
};

export default Friend;
