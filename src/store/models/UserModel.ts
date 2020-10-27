interface UserModel {
    id: string
    username: string
    email: string
    createdAt: Date
}

export const userFromJson = (json: any): UserModel => {
    return {
        id: json['_id'],
        username: json['username'],
        email: json['email'],
        createdAt: new Date(json['createdAt'])
    }
}

export default UserModel