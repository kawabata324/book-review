import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user_n',
    initialState: {
        name: '',
    },
    reducers: {
        setUser: (state, action) => {
            console.log(typeof action.payload)
            state.name = action.payload
        },
        deleteUser: (state) => {
            delete state.name
        }
    }
})

export const {setUser, deleteUser} = userSlice.actions

export default userSlice.reducer


