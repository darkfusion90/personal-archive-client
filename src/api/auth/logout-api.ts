import axios from '../axios'

const logout = () => {
    return axios.post('/api/auth/logout')
}

export default logout