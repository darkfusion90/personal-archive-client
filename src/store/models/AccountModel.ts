import UserModel, { userFromJson } from "./UserModel";
import { AuthDetailModel, jsonToAuthDetails } from "./AuthDetails";

interface AccountModel extends AuthDetailModel {
    user?: UserModel
    loggedIn: boolean
}

export const accountFromJson = (json: any): AccountModel => {
    return {
        user: json['user'] ? userFromJson(json['user']) : undefined,
        loggedIn: json['loggedIn'],
        ...jsonToAuthDetails(json)
    }
}

export default AccountModel