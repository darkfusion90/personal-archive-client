import axios from "./axios"

export const editAccount = ({ toEdit, value }: { toEdit: 'username' | 'email', value: string }) => {
    console.log({ [toEdit]: value })
    return axios.put('/api/account', { [toEdit]: value })
}