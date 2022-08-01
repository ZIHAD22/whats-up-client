import { CogIcon } from '@heroicons/react/solid'
import React from "react";
import { Link } from 'react-router-dom';
import Avatar from "../../Components/Avatar";
const flexCss = "flex justify-center items-center";

const Header = () => {
  return (
    <div>
      <div className={`flex items-center justify-start`}>
        <div className="indicator">
          <span className="indicator-item badge badge-primary">99+</span>
          <Avatar width="w-[50px]" />
        </div>
        <span className="text-3xl px-10">Whats-Up <span className="text-sm block">Verson: 1.00</span></span>
        
      <Link to="settings">
      <CogIcon className="h-8 w-8 cursor-pointer text-gry-500"/>
      </Link>

      </div>
      <div className={`${flexCss} my-4`}>
        <input
          type="text"
          placeholder="Search People and chats"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Header;
