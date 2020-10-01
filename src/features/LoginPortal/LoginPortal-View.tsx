import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'

import { ILoginPortalView } from './typings/LoginPortal-View'
import TextFormField from '../../components/form-fields/TextFormField'
import PasswordField from '../../components/form-fields/PasswordField'
import LoadingButton from '../../components/LoadingButton'
import { red } from '@material-ui/core/colors'

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

const LoginPortalView: ILoginPortalView = ({
    isLoggingIn,
    formId,
    onFormSubmit,
    loginError,
    loginResult
}) => {
    const { enqueueSnackbar } = useSnackbar()
    // If login fails, error snackbar is shown and then marked shown
    // Next time the snackbar is not shown since it was marked shown
    // Make sure to reset the flag on snackbar close/UI state changed (text field change, etc)
    const [snackbarShown, setSnackbarShown] = React.useState(false)
    if (loginResult && !snackbarShown) {
        const onEnter = () => setSnackbarShown(true)

        if (loginResult === 'success') {
            enqueueSnackbar(
                'Login Successful. You will be redirected shortly',
                { variant: 'success', onEnter }
            )
        } else {
            enqueueSnackbar('Login Failed', { variant: 'error', onEnter })
        }
    }

    const classes = useStyles()

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

export default LoginPortalView