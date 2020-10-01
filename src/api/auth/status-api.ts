import axios from '../axios'
import AccountModel, { accountFromJson } from '../../store/models/AccountModel'

const status = async (): Promise<AccountModel> => {
    const response = await axios.get('/api/auth/status')
    return accountFromJson(response.data)
}

export default status