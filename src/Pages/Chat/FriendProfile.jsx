import React from "react";
import ActiveFriend from "./ActiveFriend";
import ProfileOptions from "./ProfileOptions";

const FriendProfile = () => {
  return (
    <div className="p-5 text-center shadow-md h-screen">
      <ActiveFriend width="w-[150px]" />
      <h1 className="text-xl">MD. ZIHAD</h1>
      <ProfileOptions />
    </div>
  );
};

export default FriendProfile;
