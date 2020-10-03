import React from 'react'
import { Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { ILoginPageView } from './typings/LoginPage-View'
import TextFormField from '../../../components/form-fields/TextFormField'
import PasswordField from '../../../components/form-fields/PasswordField'
import LoadingButton from '../../../components/LoadingButton'
import { red } from '@material-ui/core/colors'
import { routeMap } from '../..'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: '100%',
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

    if(loginResult === 'success' || loggedIn){
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

                <Grid item>
                    {loginError &&
                        <Typography className={classes.error}>
                            *{loginError}
                        </Typography>
                    }
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
        </div>
    )
}

export default LoginPageView