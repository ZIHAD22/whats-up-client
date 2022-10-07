import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../util/axios"

const initialState = {
    user: {},
    authUserLoading: false,
    error: null
}

const fetchAuthUser = createAsyncThunk("authUser/fetchAuthUser", async (arg, { rejectWithValue }) => {
    if (localStorage.getItem("accessToken")) {
        const { data: authUser } = await axios.get("auth/authUser")
        return authUser
    } else {
        // toast.error("You Don't have access");
        return rejectWithValue("You Don't have access")
    }
})

const authUserSlice = createSlice({
    name: "authUser",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthUser.pending, (state) => {
                state.user = {}
                state.authUserLoading = true
                state.error = null
            })
            .addCase(fetchAuthUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.authUserLoading = false
            })
            .addCase(fetchAuthUser.rejected, (state, action) => {
                state.user = {}
                state.authUserLoading = false
                state.error = action.payload
            })
    }
})

export {
    fetchAuthUser
}

export default authUserSlice.reducer