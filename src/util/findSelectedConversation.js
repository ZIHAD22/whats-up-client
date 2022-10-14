const findSelectedConversationMember = (allConversation, selectedConUserId, messagesSenderId, selectedConId) => {
    let sendMessage

    allConversation.forEach((con) => {
        if (con._id === selectedConId) {

            if (con.members.includes(messagesSenderId)) {
                sendMessage = true
            } else {
                sendMessage = false
            }

        }

    })

    console.log(sendMessage);

    return sendMessage
}

export default findSelectedConversationMember