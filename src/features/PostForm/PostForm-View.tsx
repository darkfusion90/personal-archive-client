import React from 'react'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import FormSubmitButton from '../../components/FormSubmitButton'
import SelectPostTags from '../../components/SelectPostTags'
import OutlinedTextFormField from '../../components/form-fields/OutlinedTextFormField'
import { IPostFormView } from './typings'

const useStyles = makeStyles((theme) => createStyles({
    fullHeight: {
        height: '100%'
    },
    header: {
        marginBottom: theme.spacing(4)
    },
    subtitle: {
        ...theme.typography.subtitle2,
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightRegular
    }
}))

const PostFormView: IPostFormView = ({
    formId,
    onFormSubmit,
    status: formStatus,
    formActionText,
    header
}) => {
    const classes = useStyles()

    return (
        <Grid
            container
            wrap='wrap'
            direction='column'
            justify='center'
            spacing={4}
            className={classes.fullHeight}
            component='form'
            id={formId}
            onSubmit={onFormSubmit}
        >
            <Grid item container direction='column' className={classes.header}>
                <Grid item>
                    <Typography variant='h4'>
                        {header}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.subtitle}>
                        Required items are marked with *
                        </Typography>
                </Grid>
            </Grid>

            <Grid item>
                <OutlinedTextFormField name='title' label='Title' autoFocus required />
            </Grid>
            <Grid item>
                <OutlinedTextFormField name='link' label='Link' />
            </Grid>
            <Grid item>
                <OutlinedTextFormField name='comment' label='Comment' />
            </Grid>
            <Grid item>
                <SelectPostTags />
            </Grid>
            <Grid item>
                <FormSubmitButton
                    formId={formId}
                    formState={formStatus}
                    color='primary'
                    variant='contained'
                >
                    {formActionText}
                </FormSubmitButton>
            </Grid>
        </Grid>
    )
}

export default PostFormView