const findSelectedConversationId = (allConversation, userId) => {
    let findSelectedConversationId
    if (userId && allConversation.length !== 0) {
        allConversation.forEach((item, i) => {
            return item.members.filter((mem) => {
                if (mem === userId) {
                    findSelectedConversationId = item._id
                }
            })
        })
    }
    if (findSelectedConversationId) {
        return findSelectedConversationId
    }
}

export default findSelectedConversationId