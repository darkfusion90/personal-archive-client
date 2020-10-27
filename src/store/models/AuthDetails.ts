export interface AuthDetailModel {
    emailVerified?: boolean
    multifactorAuthEnabled?: boolean
}

export const jsonToAuthDetails = (json: any): AuthDetailModel => {
    return {
        emailVerified: json['emailVerified'],
        multifactorAuthEnabled: json['multifactorAuthEnabled']
    }
}