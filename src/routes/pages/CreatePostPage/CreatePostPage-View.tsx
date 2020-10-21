import React from 'react'

import { Helmet } from 'react-helmet'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { ICreatePostView } from './typings/CreatePostPage-View'
import PostFormView from '../../../features/PostForm'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        margin: `${theme.spacing(8)}px auto`
    }
}))

const CreatePostPageView: ICreatePostView = (props) => {
    const classes = useStyles()

    return (
        <Container maxWidth='sm' className={classes.root}>
            <Helmet>
                <title>Create Post</title>
            </Helmet>
            <PostFormView {...props} formActionText='Create Post' header='Create Post' />
        </Container>
    )
}

export default CreatePostPageView