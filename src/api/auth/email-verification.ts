import axios from "../axios"

const getUrl = (todo: 'generate' | 'verify', token?: string) => {
    // For verification, we go to /api/auth/email-verification/verify/:token
    const endpoint = todo === 'generate' ? todo : `${todo}/${token}`

    return `/api/auth/email-verification/${endpoint}`
}

export const requestEmailVerification = () => axios.post(getUrl('generate'))

export const checkEmailVerificationToken = (token: string) => axios.post(getUrl('verify', token))