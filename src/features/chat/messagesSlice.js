import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../util/axios"
import findSelectedConversationId from "../../util/findSelectedConversationId"

const initialState = {
    messages: [],
    isLoading: false,
    error: null,
    sendingMessages: {
        messages: "",
    },
    messagesLoadAgain: false
}

const fetchSelectedConversationMeg = createAsyncThunk("messages/fetchSelectedConversationMeg", async (arg, { getState, rejectWithValue }) => {
    const { conversation: { allConversation: { conversation }, selectedConversation: { selectedConversationUserId } } } = getState()

    const conversationId = findSelectedConversationId(conversation, selectedConversationUserId)

    const { data } = await axios.get(`messages/${conversationId}`)

    if (data.length === 0) {
        return rejectWithValue("No Conversation Found")
    }

    return data
})

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        updateMessages: (state, action) => {
            // console.log();
            state.messages = [...state.messages, action.payload]
        },
        updateSendingMessagesState: (state, action) => {
            state.sendingMessages.messages = action.payload
        },
        messagesAgainLoad: (state) => {
            state.messagesLoadAgain = !state.messagesLoadAgain
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSelectedConversationMeg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchSelectedConversationMeg.fulfilled, (state, action) => {
                state.isLoading = false
                state.messages = action.payload
                state.error = null
            })
            .addCase(fetchSelectedConversationMeg.rejected, (state, action) => {
                state.isLoading = false
                state.messages = []
                state.error = action.payload
            })
    }
})

const { updateMessages, updateSendingMessagesState, messagesAgainLoad } = messagesSlice.actions

export {
    fetchSelectedConversationMeg,
    updateMessages,
    updateSendingMessagesState,
    messagesAgainLoad
}

export default messagesSlice.reducer