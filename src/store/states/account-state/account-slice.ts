import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import AccountState from './AccountState'
import { updateAccountAsync } from './actions'

const initialState: AccountState = { account: { loggedIn: false } }

const accountSlice = createSlice<AccountState, SliceCaseReducers<AccountState>>({
    name: 'account-slice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(updateAccountAsync.fulfilled, (state, action) => {
            state.account = action.payload
        })
    }
})

export const reducer = accountSlice.reducer