import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../Components/Spinner'
import MessageItem from './MessageItem'
import io from 'socket.io-client'
import { updateMessages } from '../../features/chat/messagesSlice'
import getSocketServerUrl from '../../util/socketServerUrl'

const AllMessages = () => {
  const socketServerUrl = getSocketServerUrl()
  const dispatch = useDispatch(socketServerUrl)
  const socket = useRef()
  const scrollRef = useRef()

  useEffect(() => {
    socket.current = io()
  }, [])

  const [messages, isLoading, error, authUser , loadAgain] = useSelector((state) => [
    state.messages.messages,
    state.messages.isLoading,
    state.messages.error,
    state.authUser.user.user,
    state.messages.messagesLoadAgain
  ])

  useEffect(() => {
    socket.current.emit('addUser', authUser._id)
    socket.current.on('getUsers', (users) => {
      console.log(users)
    })
  }, [authUser])

  useEffect(() => {
      socket.current.on("getMessage" , (newMessages) => {
        dispatch(updateMessages(newMessages))
      })
  } , [])

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
            {error ? (
              error
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
