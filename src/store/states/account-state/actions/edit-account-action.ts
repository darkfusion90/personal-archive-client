import { createAsyncThunk } from "@reduxjs/toolkit";
import { editAccount } from "../../../../api/account";

const editAccountAsync = createAsyncThunk<any, {
    toEdit: 'username' | 'email',
    value: string
}>('editAccountAsync', editAccount)

export default editAccountAsync