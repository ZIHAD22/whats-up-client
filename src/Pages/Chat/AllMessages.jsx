import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../../Components/Spinner'
import MessageItem from './MessageItem'

const AllMessages = () => {
  const [messages, isLoading, error, authUser] = useSelector((state) => [
    state.messages.messages,
    state.messages.isLoading,
    state.messages.error,
    state.authUser.user.user,
  ])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="overflow-y-scroll h-[calc(100vh-155px)] no-scrollbarChrome no-scrollbarFirefox">
      <div className="grid grid-cols-1 content-end p-5">
        {error ? (
          error
        ) : (
          <>
            {messages?.map((message) => (
              <div
                key={message._id}
                className={
                  message.sender === authUser._id ? 'text-right mt-3' : 'mt-3'
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
      </div>
    </div>
  )
}

export default AllMessages
