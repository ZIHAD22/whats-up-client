import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notifications: [],
    isOpen: false
}


const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        handleNotificationModal: (state, action) => {
            state.isOpen = action.payload
        }
    }
})

const { handleNotificationModal } = notificationSlice.actions


export {
    handleNotificationModal
}


export default notificationSlice.reducer