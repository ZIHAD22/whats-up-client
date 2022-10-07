import { CogIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../Components/Avatar";
import { getSearchKey, searchUsersData } from "../../features/chat/allUserSlice";
import SettingsModal from "../Settings/SettingsModal";
const flexCss = "flex justify-center items-center";

const Header = () => {
  const dispatch = useDispatch()
  const [isSettingsModalShow, setSettingsModa] = useState(false);
  const [searchKey] = useSelector(state => [state.allUser.userSearch.searchKey])

  const handleSearch = (e) => {
    dispatch(getSearchKey(e.target.value))
    if(searchKey){
      dispatch(searchUsersData())
    }
  };
  
  return (
    <div>
      <div className={`flex items-center justify-start`}>
        <div className="indicator">
          <span className="indicator-item badge badge-primary">99+</span>
          <Avatar width="w-[50px]"/>
        </div>
        <span className="text-3xl px-10">
          Whats-Up <span className="text-sm block">Verson: 1.00</span>
        </span>

        <label
          onClick={() => setSettingsModa(!isSettingsModalShow)}
          htmlFor="settings-modal"
          className=""
        >
          <CogIcon className="h-8 w-8 cursor-pointer text-gry-500" />
        </label>
      </div>
      <div className={`${flexCss} my-4`}>
        <input
          type="text"
          onChange={handleSearch}
          value={searchKey}
          placeholder="Search People and chats"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      {isSettingsModalShow && (
        <SettingsModal setSettingsModa={setSettingsModa} />
      )}
    </div>
  );
};

export default Header;
