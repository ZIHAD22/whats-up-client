import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  getSelectedConversationUserId,
  getSelectedConversationUserInfo,
} from '../../features/chat/conversationUserSlice'
import { fetchSelectedConversationMeg } from '../../features/chat/messagesSlice'
import curvedArrow from '../../img/curved-arrow-left.svg'
import ActiveFriend from './ActiveFriend'

const Friend = ({ user: { name, profilePic, _id } }) => {
  const dispatch = useDispatch()
  const { conversationUserId } = useParams()

  useEffect(() => {
    if (conversationUserId) {
      dispatch(getSelectedConversationUserId(conversationUserId))
      dispatch(getSelectedConversationUserInfo())
      dispatch(fetchSelectedConversationMeg())
    }
  }, [])

  return (
    <Link
      to={`chatResult/${_id}`}
      onClick={() => {
        dispatch(getSelectedConversationUserId(_id))
        dispatch(getSelectedConversationUserInfo())
        dispatch(fetchSelectedConversationMeg())
      }}
      className="grid grid-cols-3 justify-items-center hover:bg-[#30af91a1] bg-[#30AF91] cursor-pointer text-white px-1 py-2 rounded-lg my-2"
    >
      <ActiveFriend activePic={profilePic} />
      <div className="col-span-2">
        <h1>{name}</h1>

        <small className="flex">
          <img className="w-[10px] mr-2" src={curvedArrow} alt="arrow" /> Lorem,
          ipsum dolor sit
        </small>
      </div>
    </Link>
  )
}

export default Friend
