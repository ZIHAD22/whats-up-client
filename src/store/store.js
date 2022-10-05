import { configureStore } from "@reduxjs/toolkit";
import allUserReducers from "../features/chat/allUserSlice";
import authUserReducers from "../features/chat/authUserSlice";

const store = configureStore({
    reducer: {
        allUser: allUserReducers,
        authUser: authUserReducers
    }
})

store.subscribe(() => {
    console.log(store.getState());
})

export default store