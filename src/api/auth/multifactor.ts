import axios from "../axios"

const getUrl = (endpoint: string) => `/api/auth/multifactor/${endpoint}`

export const enableMultifactorAuth = () => axios.put(getUrl('enable'))

export const disableMultifactorAuth = () => axios.put(getUrl('disable'))