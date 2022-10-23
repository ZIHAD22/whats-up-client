import React from "react";

const ActiveFriend = ({ width = null, activePic }) => {
  return (
    <div className="avatar online">
      <div className={`${width || "w-16"} rounded-full`}>
        <img src={activePic} alt="user" />
      </div>
    </div>
  );
};

export default ActiveFriend;
