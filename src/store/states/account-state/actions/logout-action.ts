import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../../api";

const logoutAsync = createAsyncThunk('logoutAsync', auth.logout)

export default logoutAsync