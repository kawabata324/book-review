import {createSlice} from "@reduxjs/toolkit";


export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false,
        loadingText: "処理中"
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
    }
})

export const {setLoading} = loadingSlice.actions

export default loadingSlice.reducer