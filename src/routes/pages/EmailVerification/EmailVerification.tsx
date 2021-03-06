import React from 'react'
import { useParams } from 'react-router-dom'

import useAsyncAction from '../../../hooks/useAsyncAction'
import { checkEmailVerificationToken } from '../../../api/auth'
import { routeMap } from '../../routes'
import UnderlinedLink from '../../../components/UnderlinedLink'
import InfoContainer from '../../../components/InfoContainer'
import AsyncContainer from '../../../components/AsyncContainer'


interface IEmailVerificationUrlParams {
    token: string
}

const EmailVerification = () => {
    const { token } = useParams<IEmailVerificationUrlParams>()
    const [
        { status: tokenCheckStatus },
        { performAction: verifyToken }
    ] = useAsyncAction<string>({ action: checkEmailVerificationToken })

    React.useEffect(() => {
        if (tokenCheckStatus === 'uninitiated') {
            console.log("Will verify")
            verifyToken(token)
        }
    }, [tokenCheckStatus, verifyToken, token])

    return <AsyncContainer
        asyncStatus={tokenCheckStatus}
        loadingText='Verifying Token'
        successContent={
            <InfoContainer
                title='Thank you for verifying your email address!'
                subtitle={
                    <UnderlinedLink to={routeMap.home.path}>
                        Go to home page
                    </UnderlinedLink>
                }
            />
        }
        errorContent={
            <InfoContainer
                title='This link is either invalid or has already expired'
                subtitle={
                    <>
                        Please visit{' '}
                        <UnderlinedLink to={routeMap.account.path}>
                            Account Page
                        </UnderlinedLink>
                        {' '}to generate a new link to verify your email address
                    </>
                }
            />
        }
    />
}

export default EmailVerification
