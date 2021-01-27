import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import useAsyncAction from '../../../hooks/useAsyncAction'
import { checkPasswordResetToken } from '../../../api/auth'
import { routeMap } from '../../routes'

import InfoContainer from '../../../components/InfoContainer'
import UnderlinedLink from '../../../components/UnderlinedLink'
import AsyncContainer from '../../../components/AsyncContainer'
import { PasswordResetForm } from './components'
import useForm from '../../../hooks/useForm'

interface IPasswordResetUrlParams {
    token: string
}

const PasswordReset = () => {
    const { token } = useParams<IPasswordResetUrlParams>()
    const [
        { status: tokenCheckStatus },
        { performAction: verifyToken, asyncActions: tokenCheckActions }
    ] = useAsyncAction<string>({ action: checkPasswordResetToken })

    React.useEffect(() => {
        if (tokenCheckStatus === 'uninitiated') {
            verifyToken(token)
        }
    }, [tokenCheckStatus, verifyToken, token])

    const [formState, formActions] = useForm<void, any>({
        successSnackbarMessage: 'Password successfully reset',
        failureSnackbarMessage: 'Password reset failed'
    })

    if (formState.status === 'submit-success') {
        return <Redirect to='/' />
    }

    if (formState.status === 'submit-fail') {
        // This delay will make sure the failure snackbar is shown to the user before re-rendering
        setTimeout(() => {
            formActions.resetFormState()
            // this will force the component to check the validity of token again and hence re-render
            // this will make sure that if the failure was due to invalid token, it is informed to the user
            tokenCheckActions.setUninitiated()
        }, 2000);
    }

    return <AsyncContainer
        asyncStatus={tokenCheckStatus}
        errorContent={
            <InfoContainer
                title='This link is either invalid or has already expired'
                subtitle={
                    <>
                        Please visit{' '}
                        <UnderlinedLink to={routeMap.account.path}>
                            Account Page
                        </UnderlinedLink>
                        {' '}to generate a new password reset token
                    </>
                }
            />
        }
        successContent={
            <InfoContainer
                title={<PasswordResetForm
                    passwordResetToken={token}
                    formState={formState}
                    formActions={formActions}
                />}
                subtitle={
                    <UnderlinedLink to={routeMap.home.path}>
                        Go to home page
                    </UnderlinedLink>
                }
            />
        }
    />
}

export default PasswordReset
