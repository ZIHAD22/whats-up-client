import "../../CustomCss/Messages.css";
import React from "react";
import Header from "./Header";
import Friend from "./Friend";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Components/Spinner";
import { fetchUserConversation } from "../../features/chat/conversationUserSlice";

const Messages = () => {
  const dispatch = useDispatch()

  const [friend, isLoading] = useSelector(state => [state.conversation?.allConversation.friend, state.conversation.allConversation.conversation.isLoading])

  useEffect(() => {
    dispatch(fetchUserConversation())
  }, [])


  return (
    <div className="h-screen pr-0">
      <div className="shadow-md p-3 rounded-md">
        <Header />
        <div className="overflow-y-scroll p-5 messageAreaHeight no-scrollbarChrome no-scrollbarFirefox">
          {friend?.length === 0 && !isLoading && <h1 className="text-center font-bold">Please Add Users To Conversation</h1>}
          {(isLoading) ? <Spinner /> :
            <>
              {friend?.map((user) => (
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
