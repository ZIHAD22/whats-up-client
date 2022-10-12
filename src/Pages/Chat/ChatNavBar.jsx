import { ArrowCircleLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSelectedUserId } from '../../features/chat/allUserSlice'
import { getSelectedConversationUserId } from '../../features/chat/conversationUserSlice'
import ActiveFriend from './ActiveFriend'

const ChatNavBar = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [selectedFriend] = useSelector((state) => [
    state.conversation.selectedConversation.selectedConversationUserInfo,
  ])

  const handleNavigationMobile = () => {
    navigate('/')
    dispatch(getSelectedConversationUserId(''))
  }

  return (
    <div className="navbar bg-base-100 shadow-md ">
      <div className="flex-1">
        <div className="md:hidden block cursor-pointer">
          <ArrowCircleLeftIcon
            onClick={handleNavigationMobile}
            className="h-12 w-16 text-primary"
          />
        </div>
        <ActiveFriend activePic={selectedFriend?.profilePic} />
        <div className="ml-2">
          <h1 className="normal-case text-xl">{selectedFriend?.name}</h1>
          <small className="">Active Now</small>
        </div>
      </div>
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a href=".">Homepage</a>
          </li>
          <li>
            <a href=".">Homepage</a>
          </li>
          <li>
            <a href=".">Homepage</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ChatNavBar
