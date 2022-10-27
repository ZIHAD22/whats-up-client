import React from 'react'
import Messages from './Messages'
import Title from '../../Components/Title'
import { Outlet } from 'react-router-dom'
import FriendProfile from './FriendProfile'
import { useSelector } from 'react-redux'
import WelcomeChat from './WelcomeChat'
import Notification from '../Notification/Notification'

const Chat = ({ setSelectedId, selectedFriendId }) => {
  const [selectedId, isOpen] = useSelector((state) => [
    state.conversation.selectedConversation.selectedConversationUserId,
    state.notification.isOpen
  ])

  return (
    <div className='relative'>
      <Title title="messages" />
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className={`${selectedId ? 'hidden' : 'block'} md:block`}>
          {/* div for see all message */}
          <Messages />
        </div>
        <div
          className={`col-span-2 ${!selectedId ? 'hidden' : 'block'} md:block`}
        >
          {/* div for selected message see  */}
          {selectedId ? <Outlet /> : <WelcomeChat />}
        </div>
        <div className="md:block hidden">
          {/* div for profile */}
          <FriendProfile />
        </div>
      </div>
      {isOpen &&
        <div className="absolute top-[-53px]  md:top-0 md:left-0">
          <div>
            <Notification />
          </div>
        </div>
      }
    </div>
  )
}

export default Chat
