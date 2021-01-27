import React from 'react'
import { Redirect } from 'react-router-dom'

import useAsyncState from '../../../hooks/useAsyncState'
import useAccount from '../../../hooks/useAccount'
import { requestPasswordResetToken } from '../../../api/auth'
import InfoContainer from '../../../components/InfoContainer'
import UnderlinedLink from '../../../components/UnderlinedLink'
import { routeMap } from '../../routes'
import LoadingDialog from '../../../features/LoadingDialog'

const InitiatePasswordReset: React.FC = () => {
    const [{ meta: passwordResetToken, status: tokenGenStatus }, tokenGenStateActions] = useAsyncState<{ token: string }>()

    const { user, emailVerified } = useAccount()[0]

    React.useEffect(() => {
        if (user && tokenGenStatus === 'uninitiated') {
            tokenGenStateActions.setLoading()
            requestPasswordResetToken(user.username)
                .then((res) => tokenGenStateActions.setSuccess(res.data.token))
                .catch(tokenGenStateActions.setFailure)
        }
    })

    if (!user) {
        return <Redirect to={routeMap.home.path} />
    }

    if (!emailVerified) {
        return (
            <InfoContainer
                title='You need to verify your email before resetting your password'
                subtitle={
                    <>
                        Please visit{' '}
                        <UnderlinedLink to={routeMap.account.path}>
                            Account Page
                        </UnderlinedLink>
                        {' '}to verify your email

                    </>
                }
            />
        )
    }

    if (tokenGenStatus === 'loading') {
        return <LoadingDialog open loadingText='Generating password reset token' />
    }

    if (tokenGenStatus === 'fail') {
        return (
            <InfoContainer
                title='Failed to generate password reset token'
                subtitle='Please try again after a while'
            />
        )
    }

    return (
        <InfoContainer
            title='Password reset token generated'
            subtitle={`The token has been mailed to your registered email id: ${passwordResetToken && passwordResetToken.token}`}
        />
    )
}

export default InitiatePasswordReset
