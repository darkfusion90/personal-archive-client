interface UserModel {
    id: string
    username: string
    email: string
}

export const userFromJson = (json: any): UserModel => {
    return {
        id: json['_id'],
        username: json['username'],
        email: json['email']
    }
}

export default UserModel