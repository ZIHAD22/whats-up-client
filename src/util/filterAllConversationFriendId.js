const filterAllConversationFriendId = (authUserId, conversation) => {
    const allFriendId = conversation.map(con => con.members.find(mem => mem !== authUserId))

    return allFriendId
};

export default filterAllConversationFriendId;