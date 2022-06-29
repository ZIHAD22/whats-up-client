import React from "react";

const ActiveFriend = ({ width = null }) => {
  return (
    <div className="avatar online">
      <div className={`${width || "w-16"} rounded-full`}>
        <img src="https://api.lorem.space/image/face?hash=28212" alt="user" />
      </div>
    </div>
  );
};

export default ActiveFriend;
