import React from 'react'
import { useParams } from 'react-router-dom'
import useAsyncAction from '../../../hooks/useAsyncAction'
import { checkEmailVerificationToken } from '../../../api/auth'
import LoadingDialog from '../../../features/LoadingDialog'
import { Typography, Grid, Container } from '@material-ui/core'
import LinkTypography, { ILinkTypographyProps } from '../../../components/LinkTypography'
import { routeMap } from '../../routes'

import { makeStyles, createStyles } from '@material-ui/core/styles'
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

    if (tokenCheckStatus === 'loading' || tokenCheckStatus === 'uninitiated') {
        return <LoadingDialog open={true} loadingText='Verifying Token' />
    }

    if (tokenCheckStatus === 'fail') {
        return (
            <EmailVerificationContent
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
        )
    }

    return (
        <EmailVerificationContent
            title='Thank you for verifying your email address!'
            subtitle={
                <UnderlinedLink to={routeMap.home.path}>
                    Go to home page
                </UnderlinedLink>
            }
        />
    )
}

const EmailVerificationContent: React.FC<{
    title: React.ReactNode,
    subtitle: React.ReactNode
}> = ({ title, subtitle }) => {
    const classes = useStyles()
    return (
        <Container maxWidth='sm' className={classes.root}>
            <Grid container spacing={8} direction='column' justify='center' alignItems='center'>
                <Typography variant='h5'>
                    {title}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                    {subtitle}
                </Typography>
            </Grid>
        </Container>
    )
}

const UnderlinedLink: React.FC<ILinkTypographyProps> = ({ className, ...props }) => {
    const classes = useStyles()

    return (
        <LinkTypography color='inherit' className={classes.link} {...props} />
    )
}

export default EmailVerification
