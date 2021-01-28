import React from 'react'
import { Redirect, Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { ILoginPageView } from './typings/LoginPage-View'
import TextFormField from '../../../components/form-fields/TextFormField'
import PasswordField from '../../../components/form-fields/PasswordField'
import LoadingButton from '../../../components/LoadingButton'
import { red } from '@material-ui/core/colors'
import { routeMap } from '../..'
import { Divider, useMediaQuery, Theme } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        //height: '100%',
        padding: theme.spacing(8)
    },
    fullHeight: {
        height: '100%'
    },
    error: {
        fontSize: '0.8rem',
        color: red[900],
        marginBottom: theme.spacing(1)
    }
}))

const LoginPageView: ILoginPageView = ({
    loggedIn,
    isLoggingIn,
    formId,
    onFormSubmit,
    loginError,
    loginResult
}) => {
    const classes = useStyles()

    if (loginResult === 'success' || loggedIn) {
        return <Redirect to={routeMap.home.path} />
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                direction='column'
                alignItems='center'
                justify='center'
                spacing={6}
                className={classes.fullHeight}
            >
                <Grid item>
                    <Typography variant='h4'>
                        Login
                    </Typography>
                </Grid>

                {loginError && <Grid item>
                    <LoginError loginError={loginError} />
                </Grid>
                }

                <Grid item>
                    <form id={formId} onSubmit={onFormSubmit}>
                        <Grid
                            item
                            container
                            justify='center'
                            alignContent='space-around'
                            direction='column'
                            spacing={4}
                            className={classes.fullHeight}
                        >
                            <Grid item>
                                <TextFormField name='username' label='Username' autoFocus />
                            </Grid>
                            <Grid item>
                                <PasswordField name='password' label='Password' />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                <Grid item container justify='center'>
                    <Grid item>
                        <LoadingButton
                            loading={isLoggingIn}
                            variant='contained'
                            color='primary'
                            type='submit'
                            form={formId}
                        >
                            Login
                        </LoadingButton>
                    </Grid>
                </Grid>

                <Grid item>
                    <Divider variant='fullWidth' />
                    <Button component={Link} to={routeMap.register.path}>
                        Create account instead
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

const LoginError: React.FC<{ loginError: any }> = ({ loginError }) => {
    const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
    const isExtraSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('xs'))
    const getMaxAlertWidth = () => {
        // Make sure to check isExtraSmallScreen BEFORE isSmallScreen
        // Since xs-down will also fulfill sm-down :)
        if (isExtraSmallScreen) {
            return '75vw'
        }

        if (isSmallScreen) {
            return '40vw'
        }

        return '30vw'
    }

    if (!loginError) {
        return null
    }

    if (loginError === 'device-not-trusted') {
        return (
            <Alert severity='error' style={{ maxWidth: getMaxAlertWidth() }}>
                <Grid
                    container
                    direction='column'
                >
                    <Grid item>
                        <Typography variant='h6'>
                            This device/location is not trusted
                        </Typography>
                    </Grid>
                    <Grid item>
                        Please check your email for instructions to mark the device/location as trusted
                    </Grid>
                </Grid>
            </Alert>
        )
    }

    return <Alert severity='error'>{loginError}</Alert>
}

export default LoginPageView