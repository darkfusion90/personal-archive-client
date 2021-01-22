import axios from "../axios"

const url = '/api/auth/password-reset'

export const requestPasswordResetToken = (username: string) =>
    axios.post(`${url}/generate`, { username })

export const attemptPasswordReset = (passwordResetToken: string, password: string) =>
    axios.post(`${url}/verify/${passwordResetToken}`, { password })