import React from "react";
import ActiveFriend from "./ActiveFriend";
import ProfileOptions from "./ProfileOptions";

const FriendProfile = ({selectedFriend}) => {
  // console.log(selectedFriend);
  return (
    <div className="p-5 text-center shadow-md h-screen">
      <ActiveFriend width="w-[150px]" activePic={selectedFriend?.profilePic} />
      <h1 className="text-xl">{selectedFriend?.name}</h1>
      <ProfileOptions />
    </div>
  );
};

export default FriendProfile;
