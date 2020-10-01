import { loginAsync, logoutAsync, updateAccountAsync } from '../actions'
import { asyncMatchFulfilled } from "../../../utils";
import { ThunkMiddleware } from "../../../@types/thunk-middleware";

const monitorLoginMiddleware: ThunkMiddleware = (api) => (next) => (action) => {
    if (asyncMatchFulfilled(loginAsync, action) || asyncMatchFulfilled(logoutAsync, action)) {
        api.dispatch(updateAccountAsync())
    }

    next(action)
}

export default monitorLoginMiddleware