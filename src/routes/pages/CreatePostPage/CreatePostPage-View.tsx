import React from 'react'

import { Helmet } from 'react-helmet'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import OutlinedTextFormField from '../../../components/form-fields/OutlinedTextFormField'
import { SelectPostTags } from './components'

import { ICreatePostView } from './typings/CreatePostPage-View'
import FormSubmitButton from '../../../components/FormSubmitButton'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        margin: `${theme.spacing(8)}px auto`
    },
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

const CreatePostPageView: ICreatePostView = ({
    onFormSubmit,
    formId,
    status: formStatus
}) => {
    const classes = useStyles()

    return (
        <Container maxWidth='sm' className={classes.root}>
            <Helmet>
                <title>Create Post</title>
            </Helmet>
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
                            Create Post
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
                        Create Post
                    </FormSubmitButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CreatePostPageView
