import React from 'react'
import { Redirect, Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

import TextFormField from '../../../components/form-fields/TextFormField'
import PasswordField from '../../../components/form-fields/PasswordField'
import { routeMap } from '../../'
import { IRegisterPageView } from './typings'
import FormSubmitButton from '../../../components/FormSubmitButton'

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

const RegisterPageView: IRegisterPageView = ({
    loggedIn,
    formId,
    onFormSubmit,
    status,
    error: registerError
}) => {
    const classes = useStyles()

    if (status === 'submit-success' || loggedIn) {
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
                        Create Account
                    </Typography>
                </Grid>

                <Grid item>
                    {registerError &&
                        <Typography className={classes.error}>
                            *{registerError}
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
                                <TextFormField name='email' label='Email' type='email' autoFocus />
                            </Grid>
                            <Grid item>
                                <TextFormField name='username' label='Username' />
                            </Grid>
                            <Grid item>
                                <PasswordField name='password' label='Password' />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                <Grid item container justify='center'>
                    <FormSubmitButton
                        formState={status}
                        formId={formId}
                        variant='contained'
                        color='primary'
                    >
                        Register
                    </FormSubmitButton>
                </Grid>

                <Grid item>
                    <Divider />
                    <Button component={Link} to={routeMap.login.path}>
                        Login instead
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default RegisterPageView
