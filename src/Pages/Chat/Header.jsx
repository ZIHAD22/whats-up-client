import { CogIcon, UserAddIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../Components/Avatar";
import { fetchAddFriendUsers, fetchAllUser, getSearchKey, searchUsersData } from "../../features/chat/allUserSlice";
import { handleNotificationModal } from "../../features/notification/notificationSlice";
import Notification from "../Notification/Notification";
import SettingsModal from "../Settings/SettingsModal";
import SearchModal from "./SearchModal";
const flexCss = "flex justify-center items-center";

const Header = () => {
  const [showSearchModal, setSearchModal] = useState(false)
  const [isSettingsModalShow, setSettingsModa] = useState(false);
  const [authUser] = useSelector(state => [state.authUser.user.user])
  const dispatch = useDispatch()

  const handleSearchModalOpen = () => {
    setSearchModal(true)
    dispatch(fetchAllUser(authUser._id))
    dispatch(fetchAddFriendUsers(authUser._id))

  }

  const handleToggleNotification = () => {
    dispatch(handleNotificationModal(true))
  }

  return (
    <div className="relative">
      <div className={`flex items-center justify-center`}>
        <div className="indicator">
          <span className="indicator-item badge badge-primary">99+</span>
          <div onClick={handleToggleNotification} className="cursor-pointer">
            <Avatar width="w-[50px]" />
          </div>
        </div>
        <span className="text-2xl px-8 text-center">
          <span>Whats-Up</span> <span className="text-sm block">Verson: 1.00</span>
        </span>

        <label
          onClick={() => setSettingsModa(!isSettingsModalShow)}
          htmlFor="settings-modal"
          className=""
        >
          <CogIcon className="h-8 w-8 cursor-pointer text-gry-500" />
        </label>

        <label htmlFor="search-modal" className="ml-3" onClick={handleSearchModalOpen}>
          <UserAddIcon className="h-8 w-8 cursor-pointer text-gry-500" />
        </label>
      </div>
      <div className={`${flexCss} my-4`}>
        <input
          type="text"
          placeholder="Search People and chats"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      {isSettingsModalShow && (
        <SettingsModal setSettingsModa={setSettingsModa} />
      )}

      {
        showSearchModal && <SearchModal />
      }
    </div>
  );
};

export default Header;
