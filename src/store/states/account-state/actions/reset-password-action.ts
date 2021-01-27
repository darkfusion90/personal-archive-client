import { createAsyncThunk } from "@reduxjs/toolkit";
import { attemptPasswordReset } from "../../../../api/auth";
import { simplifyAxiosError } from "../../../../utils";

interface ResetPasswordArgs {
    passwordResetToken: string,
    password: string
}

const resetPasswordAsync = createAsyncThunk<any, ResetPasswordArgs>('resetPasswordAsync', async (data, thunkApi) => {
    try {
        return await attemptPasswordReset(data)
    } catch (err) {
        console.log('inside action err: ', err)
        return thunkApi.rejectWithValue(simplifyAxiosError(err))
    }
})

export default resetPasswordAsync