import axios from '../axios'

const register = (accountData: LoginData) => {
    return axios.post('/api/auth/register', accountData)
}

export default register