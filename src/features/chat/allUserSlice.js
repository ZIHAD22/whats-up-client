import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../util/axios";
const initialState = {
    allUser: [],
    userSearch: {
        searchKey: "",
        isLoading: false,
        error: null
    },
    selectedUser: {
        selectedUserId: "",
        selectedUserInfo: {},
        isLoading: false,
        error: null
    },
    addFriendUsers: {
        users: [],
        isLoading: false,
        error: null
    },
    isLoading: false,
    error: null
}

const fetchAllUser = createAsyncThunk("allUser/fetchAllUser", async (arg, { getState }) => {
    const { authUser: { user: { user: { email: loginUser } } } } = getState()
    const { data: allUser } = await axios.get(`auth/allUser?email=${loginUser}`);
    return allUser
})

const searchUsersData = createAsyncThunk("allUser/searchUsers", async (arg, { getState }) => {
    const { authUser: { user: { user: { email: loginUser } } } } = getState()
    const { searchKey } = getState().allUser.userSearch
    const lowerSearchKey = searchKey.toLowerCase();
    const { data: searchUsers } = await axios.get(
        `auth/allUser?email=${loginUser}&searchKey=${lowerSearchKey}`
    );
    return searchUsers
})

const fetchAddFriendUsers = createAsyncThunk("allUser/fetchAddFriendUsers", async (authUserId, { getState }) => {
    const { conversation: { allConversation: { conversation } } } = getState()
    const allFriendId = conversation.map(con => con.members.find(mem => mem !== authUserId))

    const { data: filteredUsers } = await axios.post("auth/getUserToConversationStart", { usersId: [...allFriendId, authUserId] })
    return filteredUsers
})

const allUserSlice = createSlice({
    name: "allUser",
    initialState,
    reducers: {
        getSearchKey: (state, action) => {
            state.userSearch.searchKey = action.payload
        },
        getSelectedUserId: (state, action) => {
            state.selectedUser.selectedUserId = action.payload
        },
        getSelectedUserInfo: (state) => {
            state.selectedUser.isLoading = true
            const userId = state.selectedUser.selectedUserId
            if (userId) {
                const filteredUser = state.allUser.result.filter(user => user._id === userId)
                state.selectedUser.selectedUserInfo = filteredUser[0]
                state.selectedUser.isLoading = false
            } else {
                state.selectedUser.error = "You do not select any friend"
                state.selectedUser.selectedUserInfo = {}
                state.selectedUser.isLoading = false
            }
        },
        getRemovedAfterAddUsersToConversation: (state, action) => {
            state.addFriendUsers.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllUser.fulfilled, (state, action) => {
                state.allUser = action.payload
                state.isLoading = false
                state.error = null
            })
            .addCase(fetchAllUser.rejected, (state, action) => {
                state.allUser = []
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(searchUsersData.pending, (state) => {
                state.userSearch.isLoading = true
            })
            .addCase(searchUsersData.fulfilled, (state, action) => {
                state.allUser = action.payload
                state.userSearch.isLoading = false
                state.error = null
            })
            .addCase(searchUsersData.rejected, (state, action) => {
                state.userSearch.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchAddFriendUsers.pending, (state, action) => {
                state.addFriendUsers.isLoading = true
            })
            .addCase(fetchAddFriendUsers.fulfilled, (state, action) => {
                state.addFriendUsers.users = action.payload
                state.addFriendUsers.isLoading = false
                state.addFriendUsers.error = null
            })
            .addCase(fetchAddFriendUsers.rejected, (state, action) => {
                state.addFriendUsers.users = []
                state.addFriendUsers.isLoading = false
                state.addFriendUsers.error = action.payload
            })
    }
})

const { getSearchKey, getSelectedUserId, getSelectedUserInfo, getRemovedAfterAddUsersToConversation } = allUserSlice.actions

export {
    fetchAllUser,
    getSearchKey,
    searchUsersData,
    getSelectedUserId,
    getSelectedUserInfo,
    getRemovedAfterAddUsersToConversation,
    fetchAddFriendUsers
}

export default allUserSlice.reducer