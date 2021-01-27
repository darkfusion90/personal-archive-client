import axios from "../axios"

const url = '/api/auth/password-reset'

export const requestPasswordResetToken = (username: string) =>
    axios.post(`${url}/generate`, { username })

export const attemptPasswordReset = ({ passwordResetToken, password }: { passwordResetToken: string, password: string }) =>
    axios.post(`${url}/reset/${passwordResetToken}`, { password })

export const checkPasswordResetToken = (passwordResetToken: string) =>
    axios.get(`${url}/check/${passwordResetToken}`)