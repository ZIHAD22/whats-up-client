import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../util/axios"
import findSelectedConversationId from "../../util/findSelectedConversationId"

const initialState = {
    messages: [],
    isLoading: false,
    error: null
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchSelectedConversationMeg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchSelectedConversationMeg.fulfilled, (state, action) => {
                console.log(action.payload);
                state.isLoading = false
                state.messages = action.payload
                state.error = null
            })
            .addCase(fetchSelectedConversationMeg.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false
                state.messages = []
                state.error = action.payload
            })
    }
})

export {
    fetchSelectedConversationMeg
}

export default messagesSlice.reducer