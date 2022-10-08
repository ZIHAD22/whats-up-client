import React from "react";
import { useSelector } from "react-redux";
import ActiveFriend from "./ActiveFriend";
import ProfileOptions from "./ProfileOptions";

const FriendProfile = () => {
  const [selectedFriend , authUser]  = useSelector(state => [state.allUser.selectedUser.selectedUserInfo , state.authUser.user])
  // console.log(selectedFriend);
  return (
    <div className="p-5 text-center shadow-md h-screen">
      <ActiveFriend width="w-[150px]" activePic={selectedFriend?.profilePic || authUser.user?.profilePic} />
      <h1 className="text-xl">{selectedFriend?.name || authUser.user?.name}</h1>
      {selectedFriend.email ? <ProfileOptions /> : 
      <>
        <h2 className="mt-3 text-xl">Change Background Color</h2>
        <div>
        <div className="block">
        Dark <input className="" type="radio" name="" id=""  /> 
        </div>
        <div>
        Light <input className="" type="radio" name="" id="" /> 
        </div>
        </div>
      </> }
    </div>
  );
};

export default FriendProfile;
