import UserModel from "./UserModel";

interface AccountModel {
    user?: UserModel
    loggedIn: boolean
}

export const accountFromJson = (json: any): AccountModel => {
    return {
        user: json['user'],
        loggedIn: json['loggedIn']
    }
}

export default AccountModel