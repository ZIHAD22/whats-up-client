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
        selectedConversationUserId: "",
        selectedConversationUserInfo: {},
        isLoading: false,
        error: null
    }

}

const fetchUserConversation = createAsyncThunk("conversation/fetchUserConversation", async (arg, { getState }) => {
    const { authUser: { user: { user: { _id: userId } } } } = getState()
    const { data } = await axios.get(`conversation/${userId}`)
    return data
})

const conversationSlice = createSlice({
    name: "conversation",
    initialState,
    reducers: {
        getSelectedConversationUserId: (state, action) => {
            state.selectedConversation.selectedConversationUserId = action.payload
        },
        getSelectedConversationUserInfo: (state, action) => {
            state.selectedConversation.isLoading = true
            const conversationUserId = state.selectedConversation.selectedConversationUserId
            if (conversationUserId) {
                const filteredUser = state.allConversation.friend.filter(user => user._id === conversationUserId)
                state.selectedConversation.selectedConversationUserInfo = filteredUser[0]
                state.selectedConversation.isLoading = false
            } else {
                state.selectedConversation.error = "You do not select any friend"
                state.selectedConversation.selectedConversationUserInfo = {}
                state.selectedConversation.isLoading = false
            }
        },

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

const { getSelectedConversationUserId, getSelectedConversationUserInfo } = conversationSlice.actions

export {
    fetchUserConversation,
    getSelectedConversationUserId,
    getSelectedConversationUserInfo,
}

export default conversationSlice.reducer