import {configureStore} from "@reduxjs/toolkit";
import {save, load} from 'redux-localstorage-simple';
import authReducer from "./slice/auth";
import userReducer from "./slice/user"
import loadingReducer from "./slice/loading"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user_n: userReducer,
        loading: loadingReducer
    },

    preloadedState: load(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(save()),
})