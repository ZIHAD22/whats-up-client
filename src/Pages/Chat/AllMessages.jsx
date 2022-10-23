import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../Components/Spinner'
import MessageItem from './MessageItem'
import io from 'socket.io-client'
import { updateMessages } from '../../features/chat/messagesSlice'
import getSocketServerUrl from '../../util/socketServerUrl'
import { useState } from 'react'
import findSelectedConversationMember from '../../util/findSelectedConversation'
import findSelectedConversationId from '../../util/findSelectedConversationId'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { getSelectedConversationUserId } from '../../features/chat/conversationUserSlice'

const AllMessages = () => {
  const { width } = useWindowDimensions()
  const socketServerUrl = getSocketServerUrl()
  const [conversationId, setConversationId] = useState(false)
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const dispatch = useDispatch()
  const socket = useRef()
  const scrollRef = useRef()

  useEffect(() => {
    socket.current = io(socketServerUrl)
  }, [])

  const [messages, isLoading, error, authUser, selectedConversationUserId, allConversation, selectedId] = useSelector((state) => [
    state.messages.messages,
    state.messages.isLoading,
    state.messages.error,
    state.authUser.user.user,
    state.conversation.selectedConversation.selectedConversationUserId,
    state.conversation.allConversation.conversation,
    state.conversation.selectedConversation.selectedConversationUserId
  ])

  // for avoid welcome page in mobile case when any one chick back button in mobile then welcome page show unexpectedly this is why i avoid welcome page is mobile
  window.addEventListener('popstate', function (event) {
    if (width < 768 && selectedId) {
      dispatch(getSelectedConversationUserId(""))
    }
  });


  // this is all for socket server data receive and send 
  useEffect(() => {
    const selectedConId = findSelectedConversationId(allConversation, selectedConversationUserId)
    if (selectedConId) {
      setConversationId(selectedConId)
    }
  }, [allConversation, selectedConversationUserId])

  useEffect(() => {
    socket.current.emit('addUser', authUser._id)
    socket.current.on('getUsers', (users) => {
      console.log(users)
    })
  }, [authUser])

  useEffect(() => {
    socket.current.on("getMessage", (newMessages) => {
      setArrivalMessage(newMessages)
    })
  }, [])


  useEffect(() => {
    const updateMessageState = findSelectedConversationMember(allConversation, selectedConversationUserId, arrivalMessage?.sender, conversationId)

    arrivalMessage && updateMessageState && dispatch(updateMessages(arrivalMessage))

  }, [arrivalMessage, dispatch])


  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="overflow-y-scroll h-[calc(100vh-155px)] no-scrollbarChrome no-scrollbarFirefox">
      <div className="grid grid-cols-1 content-end p-5">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {messages.length === 0 ? (
              <h1 className="text-center font-bold">{error}</h1>
            ) : (
              <>
                {messages?.map((message) => (
                  <div
                    ref={scrollRef}
                    key={message._id}
                    className={
                      message.sender === authUser._id
                        ? 'text-right mt-3'
                        : 'mt-3'
                    }
                  >
                    <MessageItem
                      message={message.message}
                      ownMsg={message.sender === authUser._id}
                    />
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AllMessages
