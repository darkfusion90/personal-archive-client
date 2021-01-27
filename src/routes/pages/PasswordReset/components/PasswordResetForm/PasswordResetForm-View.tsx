import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PasswordField from '../../../../../components/form-fields/PasswordField'
import { IPasswordResetFormView } from '../../typings/PasswordResetForm-View'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import FormSubmitButton from '../../../../../components/FormSubmitButton'
const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(8)
    },
}))

const PasswordResetFormView: IPasswordResetFormView = ({ formState: { status }, formId, onFormSubmit }) => {
    const classes = useStyles()
    return (
        <>
            <Typography variant='h5'>Reset your password:</Typography>
            <Grid
                container
                direction='column'
                component='form'
                spacing={4}
                className={classes.root}
                id={formId}
                onSubmit={onFormSubmit}
            >
                <Grid item>
                    <PasswordField name='password' label='Enter Password' variant='outlined' />
                </Grid>
                <Grid item>
                    <PasswordField name='confirmPassword' label='Confirm Password' variant='outlined' />
                </Grid>
                <Grid item>
                    <FormSubmitButton
                        fullWidth
                        formState={status}
                        formId={formId}
                        color='primary'
                        variant='contained'
                    >
                        Reset Password
                    </FormSubmitButton>
                </Grid>
            </Grid>
        </>
    )
}

export default PasswordResetFormView
