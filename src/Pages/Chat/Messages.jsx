import "../../CustomCss/Messages.css";
import React, { useState } from "react";
import Header from "./Header";
import Friend from "./Friend";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuthUser from "../../hooks/useAuthUser";
import { fetchAllUser, getSearchKey, searchUsersData } from "../../features/chat/allUserSlice";
import Spinner from "../../Components/Spinner";

const Messages = ({
  selectedFriendId,
  selectedId,
  setSelectedId,
  isAutoSelected,
}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  
  const currentWindowWidth = window.innerWidth
  const [searchKey, setSearchKey] = useState("");
  const [user, loading] = useAuthUser();
  const loginUser = user.user?.email;
  
  const [allUser , {isLoading:searchLoading} , isLoading , ] = useSelector(state => [state.allUser.allUser.result , state.allUser.userSearch , state.allUser.isLoading  ])
  useEffect(() => {
    if(searchKey){
      dispatch(getSearchKey(searchKey))
      dispatch(searchUsersData(loginUser))
    }else{
      dispatch(fetchAllUser(loginUser))
    }
  } , [loginUser , searchKey])
  
  const handleSearch = (e, searchKey) => {
    setSearchKey(e.target.value);
  };
  
  useEffect(() => {
    if (!selectedId && !isLoading && allUser && currentWindowWidth >= 411) {
      navigate(`/chatResult/${allUser && allUser[0]._id}`);
      setSelectedId(allUser[0]._id);
    }
  }, [
    allUser,
    isAutoSelected,
    isLoading,
    setSelectedId,
    selectedId,
    navigate,
    currentWindowWidth
  ]);

  return (
    <div className="h-screen pr-0">
      <div className="shadow-md p-3 rounded-md">
        <Header
          selectedId={selectedId}
          handleSearch={handleSearch}
          searchKey={searchKey}
          />
        <div className="overflow-y-scroll p-5 messageAreaHeight no-scrollbarChrome no-scrollbarFirefox">
          {(isLoading || searchLoading) ? <Spinner/> : 
          <>
          {allUser?.map((user) => (
            <Friend
              key={user._id}
              user={user}
              selectedFriendId={selectedFriendId}
            />
          ))}
          </> 
          }
        </div>
      </div>
    </div>
  );
};

export default Messages;
