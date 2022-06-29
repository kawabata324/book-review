import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: ''
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        deleteToken: (state) => {
            delete state.token
        }
    }
})

export const {setToken, deleteToken} = authSlice.actions

export default authSlice.reducer