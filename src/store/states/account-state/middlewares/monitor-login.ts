import {
    loginAsync,
    logoutAsync,
    updateAccountAsync,
    createAccountAsync,
    enableMultifactorAuthAsync,
    disableMultifactorAuthAsync,
    editAccountAsync
} from '../actions'
import { asyncMatchFulfilled } from "../../../utils";
import { ThunkMiddleware } from "../../../@types/thunk-middleware";
import { AsyncThunk } from '@reduxjs/toolkit';

type AnyAsyncThunk = AsyncThunk<any, any, any>

const matchAtleastOne = (actionToMatch: AnyAsyncThunk, actions: AnyAsyncThunk[]) => {
    return actions.some(action => asyncMatchFulfilled(action, actionToMatch))
}

const monitorLoginMiddleware: ThunkMiddleware = (api) => (next) => (action) => {
    const actionsThatChangeLoginInfo = [
        loginAsync,
        logoutAsync,
        createAccountAsync,
        editAccountAsync,
        enableMultifactorAuthAsync,
        disableMultifactorAuthAsync
    ]
    const hasLoginInfoChanged = matchAtleastOne(action, actionsThatChangeLoginInfo)

    if (hasLoginInfoChanged) {
        api.dispatch(updateAccountAsync())
    }

    next(action)
}

export default monitorLoginMiddleware