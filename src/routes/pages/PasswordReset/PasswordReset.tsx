import React from 'react'
import { useParams } from 'react-router-dom'
import useAsyncAction from '../../../hooks/useAsyncAction'
import { checkEmailVerificationToken } from '../../../api/auth'
import LoadingDialog from '../../../features/LoadingDialog'
import { Typography, Grid, Container } from '@material-ui/core'
import LinkTypography, { ILinkTypographyProps } from '../../../components/LinkTypography'
import { routeMap } from '../../routes'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import InfoContainer from '../../../components/InfoContainer'
import UnderlinedLink from '../../../components/UnderlinedLink'
import AsyncContainer from '../../../components/AsyncContainer'
const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        textDecoration: 'underline'
    }
}))

interface IEmailVerificationUrlParams {
    token: string
}

const PasswordReset = () => {
    const { token } = useParams<IEmailVerificationUrlParams>()
    const [
        { status: tokenCheckStatus },
        { performAction: verifyToken }
    ] = useAsyncAction<string>({ action: checkEmailVerificationToken })

    React.useEffect(() => {
        if (tokenCheckStatus === 'uninitiated') {
            verifyToken(token)
        }
    }, [tokenCheckStatus, verifyToken, token])

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
                title='Your password successfully reset'
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
