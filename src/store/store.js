import { configureStore } from "@reduxjs/toolkit";
import allUserReducers from "../features/chat/allUserSlice";
import authUserReducers from "../features/chat/authUserSlice";
import conversationReducers from "../features/chat/conversationUserSlice";
import messagesReducers from "../features/chat/messagesSlice";

const store = configureStore({
    reducer: {
        allUser: allUserReducers,
        authUser: authUserReducers,
        conversation: conversationReducers,
        messages: messagesReducers
    }
})

export default store