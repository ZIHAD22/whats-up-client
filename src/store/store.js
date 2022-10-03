import { configureStore } from "@reduxjs/toolkit";
import allUserReducers from "../features/chat/allUserSlice";

const store = configureStore({
    reducer: {
        allUser: allUserReducers
    }
})

store.subscribe(() => {
    console.log(store.getState());
})

export default store