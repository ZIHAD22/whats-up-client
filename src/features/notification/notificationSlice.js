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
        },
        sendMessageNotification: (state, action) => {
            state.notifications = [...state.notifications, action.payload]
        }
    }
})

const { handleNotificationModal, sendMessageNotification } = notificationSlice.actions


export {
    handleNotificationModal,
    sendMessageNotification
}


export default notificationSlice.reducer