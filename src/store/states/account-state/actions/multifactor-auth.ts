import { createAsyncThunk } from "@reduxjs/toolkit";
import { enableMultifactorAuth, disableMultifactorAuth } from "../../../../api/auth";

export const enableMultifactorAuthAsync = createAsyncThunk<any>(
    'enableMultifactorAuth',
    enableMultifactorAuth
)

export const disableMultifactorAuthAsync = createAsyncThunk<any>(
    'disableMultifactorAuth',
    disableMultifactorAuth
)