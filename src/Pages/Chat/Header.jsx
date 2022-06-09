import React from "react";
import Avatar from "../../Components/Avatar";
const flexCss = "flex justify-center items-center";

const Header = () => {
  return (
    <div>
      <div className={`flex items-center justify-start`}>
        <div class="indicator">
          <span class="indicator-item badge badge-primary">99+</span>
          <Avatar width="w-[50px]" />
        </div>
        <span className="text-3xl uppercase">messages</span>
      </div>
      <div className={`${flexCss} my-4`}>
        <input
          type="text"
          placeholder="Search People and chats"
          class="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Header;
