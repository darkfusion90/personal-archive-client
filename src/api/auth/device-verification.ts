import axios from "../axios"

const url = '/api/auth/multifactor'

export const requestDeviceVerificationToken = () => axios.post(`${url}/generate`)

export const performDeviceVerification = (deviceVerificationToken: string) => {
    return axios.post(`${url}/verify/${deviceVerificationToken}`)
}