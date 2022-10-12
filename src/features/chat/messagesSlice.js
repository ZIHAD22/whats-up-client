import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../util/axios"

const initialState = {
    messages: [],
    isLoading: false,
    error: null
}

const fetchSelectedConversationMeg = createAsyncThunk("messages/fetchSelectedConversationMeg", async (arg, { getState, rejectWithValue }) => {
    const { conversation: { allConversation: { conversation }, selectedConversation: { selectedConversationId } } } = getState()

    let findSelectedConversationId
    if (selectedConversationId && conversation.length !== 0) {
        conversation.forEach((item, i) => {
            return item.members.filter(mem => {
                if (mem === selectedConversationId) {
                    return findSelectedConversationId = item._id
                }
            })
        })
    }
    const { data } = await axios.get(`messages/${findSelectedConversationId}`)

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