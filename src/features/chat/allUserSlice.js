import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import store from "../../store/store";
import axios from "../../util/axios";
// import { fetchAuthUser } from "./authUserSlice";

// dispatch auth user
// store.dispatch(fetchAuthUser())

const initialState = {
    allUser: [],
    userSearch: {
        searchKey: "",
        isLoading: false,
        error: null
    },
    isLoading: false,
    error: null
}

const fetchAllUser = createAsyncThunk("allUser/fetchAllUser", async (arg, { dispatch, getState }) => {
    // const { payload: { user: { email: loginUser } } } = await dispatch(fetchAuthUser())
    const { authUser: { user: { user: { email: loginUser } } } } = getState()
    const { data: allUser } = await axios.get(`auth/allUser?email=${loginUser}`);
    return allUser
})

const searchUsersData = createAsyncThunk("allUser/searchUsers", async (arg, { getState, dispatch }) => {
    const { authUser: { user: { user: { email: loginUser } } } } = getState()
    const { searchKey } = getState().allUser.userSearch
    const lowerSearchKey = searchKey.toLowerCase();
    const { data: searchUsers } = await axios.get(
        `auth/allUser?email=${loginUser}&searchKey=${lowerSearchKey}`
    );
    return searchUsers
})

const allUserSlice = createSlice({
    name: "allUser",
    initialState,
    reducers: {
        getSearchKey: (state, action) => {
            state.userSearch.searchKey = action.payload
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
    }
})

const { getSearchKey } = allUserSlice.actions

export {
    fetchAllUser,
    getSearchKey,
    searchUsersData
}

export default allUserSlice.reducer