import { configureStore } from "@reduxjs/toolkit";
import allUserReducers from "../features/chat/allUserSlice";
import authUserReducers from "../features/chat/authUserSlice";
import conversationReducers from "../features/chat/conversationUserSlice";
import messagesReducers from "../features/chat/messagesSlice";
import notificationReducers from "../features/notification/notificationSlice";

const store = configureStore({
    reducer: {
        allUser: allUserReducers,
        authUser: authUserReducers,
        conversation: conversationReducers,
        messages: messagesReducers,
        notification: notificationReducers
    }
})

export default store