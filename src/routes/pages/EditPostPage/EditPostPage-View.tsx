import React from 'react'

import { Helmet } from 'react-helmet'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { ICreatePostView } from './typings/EditPostPage-View'
import PostFormView from '../../../features/PostForm'
import LoadingDialog from '../../../features/LoadingDialog'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        margin: `${theme.spacing(8)}px auto`
    }
}))

const EditPostPageView: ICreatePostView = ({ postFetchStatus: { status }, ...props }) => {
    const classes = useStyles()

    const postNotReady = status === 'uninitiated' || status === 'loading'

    if (status === 'fail') {
        return <div>ERROR</div>
    }

    return (
        <>
            <Container maxWidth='sm' className={classes.root}>
                <Helmet>
                    <title>Edit Post</title>
                </Helmet>
                <PostFormView {...props} formActionText='Confirm Edit' header='Edit Post' />
            </Container>
            <LoadingDialog open={postNotReady} loadingText='Loading Post' />
        </>
    )
}

export default EditPostPageView