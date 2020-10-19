import { loginAsync, logoutAsync, updateAccountAsync, createAccountAsync } from '../actions'
import { asyncMatchFulfilled } from "../../../utils";
import { ThunkMiddleware } from "../../../@types/thunk-middleware";

const monitorLoginMiddleware: ThunkMiddleware = (api) => (next) => (action) => {
    const hasLoggedIn = asyncMatchFulfilled(loginAsync, action)
    const hasLoggedOut = asyncMatchFulfilled(logoutAsync, action)
    const hasRegistered = asyncMatchFulfilled(createAccountAsync, action)

    if (hasLoggedIn || hasLoggedOut || hasRegistered) {
        api.dispatch(updateAccountAsync())
    }

    next(action)
}

export default monitorLoginMiddleware