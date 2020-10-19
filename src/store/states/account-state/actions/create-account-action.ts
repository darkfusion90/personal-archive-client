import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../../api";
import { simplifyAxiosError } from "../../../../utils";

const createAccountAsync = createAsyncThunk<any, RegisterData>(
    'createAccountAsync',
    async (accountData, thunkApi) => {
        try {
            return (await auth.register(accountData)).data
        } catch (err) {
            console.log('Register Error: ', err)
            console.log('Response: ', err.response)
            return thunkApi.rejectWithValue(simplifyAxiosError(err))
        }
    }
)

export default createAccountAsync