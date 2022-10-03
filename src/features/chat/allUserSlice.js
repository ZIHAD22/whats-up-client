import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import useAuthUser from "../../hooks/useAuthUser";
import axios from "../../util/axios";
const initialState = {
    allUser: [],
    userSearchKey: "sdsd",
    isLoading: false,
    error: null
}

const fetchAllUser = createAsyncThunk("allUser/fetchAllUser", async (loginUser, thunkApi) => {
    const { userSearchKey } = thunkApi.getState().allUser
    console.log(loginUser);
    const { data: allUser } = await axios.get(`auth/allUser?email=${loginUser}`);
    return allUser
})

const allUserSlice = createSlice({
    name: "allUser",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllUser.fulfilled, (state, action) => {
                state.allUser = action.payload
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchAllUser.rejected, (state, action) => {
                state.allUser = []
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export {
    fetchAllUser
}

export default allUserSlice.reducer