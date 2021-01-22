import React from 'react'
import Button from '@material-ui/core/Button'

import { SettingCard } from './SettingCard'
import { IAccountPassword } from '../typings/AccountPassword'
import useAsyncState from '../../../../hooks/useAsyncState'
import useAccount from '../../../../hooks/useAccount'
import { requestPasswordResetToken } from '../../../../api/auth'
import { Redirect } from 'react-router-dom'
import { useSnackbar } from 'notistack'

export const AccountPassword: IAccountPassword = ({ emailVerified }) => {
    return (
        <SettingCard
            title='Password'
            subtitle={emailVerified ? '' : 'Verify your email to reset password'}
            action={<PasswordResetButton emailVerified={emailVerified} />}
        />
    )
}

const PasswordResetButton: React.FC<{ emailVerified: boolean }> = ({ emailVerified }) => {
    const [tokenGenState, tokenGenStateActions] = useAsyncState()
    const [failSnackbarShown, setFailSnackbarShown] = React.useState(false)
    const { enqueueSnackbar } = useSnackbar()

    const { user } = useAccount()[0]
    if (!user) {
        return null
    }

    if (tokenGenState.status === 'success') {
        return <Redirect to='password-reset/generate/success' />
    }

    if (tokenGenState.status === 'fail' && !failSnackbarShown) {
        setFailSnackbarShown(true)
        enqueueSnackbar('Failed to generate password reset token', { variant: 'error' })
    }

    const genResetToken = () => {
        tokenGenStateActions.setLoading()
        requestPasswordResetToken(user.username)
            .then(_ => tokenGenStateActions.setSuccess())
            .catch(tokenGenStateActions.setFailure)
    }

    return (
        <Button variant='contained' color='primary' disabled={!emailVerified} onClick={genResetToken}>
            Reset Password
        </Button>
    )
}