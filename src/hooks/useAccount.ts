import React from 'react'
import { useSelector } from 'react-redux'

import AccountModel from '../store/models/AccountModel'
import { accountSelector } from '../store/states/account-state/account-selectors'
import { editAccountAsync, updateAccountAsync, loginAsync, logoutAsync, createAccountAsync, enableMultifactorAuthAsync, disableMultifactorAuthAsync, resetPasswordAsync } from '../store/states/account-state/actions'
import { useAppDispatch } from '../store'
import { unwrapResult } from '@reduxjs/toolkit'

export type IEditableAccountField = 'username' | 'email'

interface AccountHookOpts {
    autoFetch: boolean
}

interface AccountFetchStatus {
    loading: boolean
    success: boolean
    failure: boolean
    uninitiated: boolean
}

interface MultifactorAccountActions {
    enableMultifactor: VoidCallback
    disableMultifactor: VoidCallback
}

interface AccountActions {
    login: ValueCallback<LoginData>
    logout: VoidCallback
    createAccount: ValueCallback<RegisterData>
    updateAccount: VoidCallback
    editAccount: (toEdit: IEditableAccountField, value: string) => any
    resetPassword: (data: { passwordResetToken: string, password: string }) => any
    multifactor: MultifactorAccountActions
}

type AccountHook = HookWithMeta<AccountModel, AccountActions, AccountFetchStatus>

const useAccount = ({ autoFetch }: AccountHookOpts = { autoFetch: false }): AccountHook => {
    const [accountFetchStatus, setAccountStatus] = React.useState<GenericAsyncState>('uninitiated')
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        async function updateAccount() {
            if (autoFetch) {
                setAccountStatus('loading')
                await dispatch(updateAccountAsync())
                    .then(unwrapResult)
                    .then((_: any) => setAccountStatus('success'))
                    .catch((_: any) => setAccountStatus('fail'))
            }
        }

        updateAccount()
    }, [dispatch, autoFetch])

    const account = useSelector(accountSelector)

    return [
        account,
        {
            login: (data) => dispatch(loginAsync(data)),
            logout: () => dispatch(logoutAsync()),
            createAccount: (data) => dispatch(createAccountAsync(data)),
            updateAccount: () => dispatch(updateAccountAsync()),
            editAccount: (toEdit, value) => dispatch(editAccountAsync({ toEdit, value })),
            multifactor: {
                enableMultifactor: () => dispatch(enableMultifactorAuthAsync()),
                disableMultifactor: () => dispatch(disableMultifactorAuthAsync())
            },
            resetPassword: (data) => dispatch(resetPasswordAsync(data))
        },
        {
            loading: accountFetchStatus === 'loading',
            success: accountFetchStatus === 'success',
            failure: accountFetchStatus === 'fail',
            uninitiated: accountFetchStatus === 'uninitiated'
        }
    ]
}

export default useAccount