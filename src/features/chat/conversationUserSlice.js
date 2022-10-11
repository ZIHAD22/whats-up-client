import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../util/axios"

const initialState = {
    allConversation: {
        conversation: [],
        friend: [],
        isLoading: false,
        error: null
    },
    selectedConversation: {
        selectedConversationId: "",
        selectedConversationInfo: {},
        isLoading: false,
        error: null
    }

}

const fetchUserConversation = createAsyncThunk("conversation/fetchUserConversation", async (arg, { getState }) => {
    const { authUser: { user: { user: { _id: userId } } } } = getState()
    const { data } = await axios.get(`conversation/${userId}`)
    console.log(data);
    return data
})

const conversationSlice = createSlice({
    name: "conversation",
    initialState,
    reducers: {
        getSelectedConversationId: (state, action) => {
            state.selectedConversation.selectedConversationId = action.payload
        },
        getSelectedConversationInfo: (state, action) => {
            state.selectedConversation.isLoading = true
            const conversationId = state.selectedConversation.selectedConversationId
            if (conversationId) {
                const filteredUser = state.allConversation.friend.filter(user => user._id === conversationId)
                state.selectedConversation.selectedConversationInfo = filteredUser[0]
                state.selectedConversation.isLoading = false
            } else {
                state.selectedConversation.error = "You do not select any friend"
                state.selectedConversation.selectedConversationInfo = {}
                state.selectedConversation.isLoading = false
            }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserConversation.pending, (state, action) => {
                state.allConversation.isLoading = true
            })
            .addCase(fetchUserConversation.fulfilled, (state, action) => {
                state.allConversation.conversation = action.payload.conversation
                state.allConversation.friend = action.payload.conversationFriends
                state.allConversation.isLoading = false
                state.allConversation.error = null
            })
            .addCase(fetchUserConversation.rejected, (state, action) => {
                state.allConversation.conversation = []
                state.allConversation.isLoading = false
                state.allConversation.error = action.payload
            })
    }
})

const { getSelectedConversationId, getSelectedConversationInfo } = conversationSlice.actions

export {
    fetchUserConversation,
    getSelectedConversationId,
    getSelectedConversationInfo
}

export default conversationSlice.reducer