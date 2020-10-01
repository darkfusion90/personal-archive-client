import axios from '../axios'

const login = (loginData: LoginData) => {
    return axios.post('/api/auth/login', loginData)
}

export default login