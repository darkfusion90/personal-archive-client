import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../../api";
import AccountModel from "../../../models/AccountModel";

const updateAccountAsync = createAsyncThunk<AccountModel>('updateAccountAsync', auth.status)

export default updateAccountAsync