import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer as formReducer } from 'redux-form'

import { reducer as accountReducer } from "./states/account-state";
import { reducer as postsReducer } from "./states/posts-state";
import middlewares from './middlewares'
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        account: accountReducer,
        posts: postsReducer,
        form: formReducer
    },
    middleware: getDefaultMiddleware({ serializableCheck: false }).concat(middlewares)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export default store