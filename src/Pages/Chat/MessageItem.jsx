import React from 'react'

const MessageItem = ({ message, ownMsg }) => {
  const friendClassName =
    'text-lg text-white inline-block bg-primary max-w-[40%] p-3 rounded-lg break-words text-center'
  const ownClassName =
    'text-lg text-white inline-block bg-success max-w-[40%] p-3 rounded-lg break-words text-center'
  return <h1 className={ownMsg ? ownClassName : friendClassName}>{message}</h1>
}

export default MessageItem
