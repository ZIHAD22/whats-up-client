import { configureStore } from "@reduxjs/toolkit";
import allUserReducers from "../features/chat/allUserSlice";
import authUserReducers from "../features/chat/authUserSlice";
import conversationReducers from "../features/chat/conversationUserSlice";

const store = configureStore({
    reducer: {
        allUser: allUserReducers,
        authUser: authUserReducers,
        conversation: conversationReducers,
    }
})

store.subscribe(() => {
    console.log(store.getState());
})

export default store