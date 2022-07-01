import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user_n',
    initialState: {
        name: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload
        },
        deleteUser: (state) => {
            delete state.name
        },
        isLogin: (state) => {
            return state.name !== ''
        }
    }
})

export const {setUser, deleteUser, isLogin} = userSlice.actions

export default userSlice.reducer


