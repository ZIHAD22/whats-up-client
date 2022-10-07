import "../../CustomCss/Messages.css";
import React from "react";
import Header from "./Header";
import Friend from "./Friend";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../../features/chat/allUserSlice";
import Spinner from "../../Components/Spinner";

const Messages = () => {
  const dispatch = useDispatch()

  const [allUser , {isLoading:searchLoading , searchKey} , isLoading , ] = useSelector(state => [state.allUser.allUser.result , state.allUser.userSearch , state.allUser.isLoading  ])

  
  useEffect(() => {
    if(!searchKey){
      dispatch(fetchAllUser())
    }
  } , [searchKey , dispatch])

  return (
    <div className="h-screen pr-0">
      <div className="shadow-md p-3 rounded-md">
        <Header/>
        <div className="overflow-y-scroll p-5 messageAreaHeight no-scrollbarChrome no-scrollbarFirefox">
          {(isLoading || searchLoading) ? <Spinner/> : 
          <>
          {allUser?.map((user) => (
            <Friend
              key={user._id}
              user={user}
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
