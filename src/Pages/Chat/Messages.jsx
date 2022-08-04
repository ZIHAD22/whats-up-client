import "../../CustomCss/Messages.css";
import React from "react";
import Header from "./Header";
import Friend from "./Friend";
import Spinner from "../../Components/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Messages = ({
  allUsers,
  selectedFriendId,
  isLoading,
  selectedId,
  setSelectedId,
  isAutoSelected,
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!selectedId && !isLoading && allUsers) {
      navigate(`/chatResult/${allUsers && allUsers[0]._id}`);
      setSelectedId(allUsers[0]._id);
    }
  }, [allUsers, isAutoSelected]);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="h-screen pr-0">
      <div className="shadow-md p-3 rounded-md">
        <Header selectedId={selectedId} />
        <div className="overflow-y-scroll p-5 messageAreaHeight no-scrollbarChrome no-scrollbarFirefox">
          {allUsers?.map((user) => (
            <Friend
              key={user._id}
              user={user}
              selectedFriendId={selectedFriendId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
