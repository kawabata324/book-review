import {configureStore} from "@reduxjs/toolkit";
import {save, load} from 'redux-localstorage-simple';
import authReducer from "./slice/auth";
import userReducer from "./slice/user"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer
    },

    preloadedState: load(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(save()),
})