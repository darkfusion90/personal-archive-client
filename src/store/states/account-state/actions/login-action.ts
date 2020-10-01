import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../../api";
import { simplifyAxiosError } from "../../../../utils";

const loginAsync = createAsyncThunk<any, LoginData>('loginAsync', async (loginData, thunkApi) => {
    try {
        return (await auth.login(loginData)).data
    } catch (err) {
        console.log('Login Error: ', err)
        console.log('Response: ', err.response)
        return thunkApi.rejectWithValue(simplifyAxiosError(err))
    }
})

export default loginAsync