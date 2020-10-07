import React from 'react'

import DeletePostIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import useSinglePost from '../../../hooks/useSinglePost'
import { IPostActions } from '../typings/PostActions'
import LoadingButton from '../../../components/LoadingButton'
import { useSnackbar } from 'notistack'
import { unwrapResult } from '@reduxjs/toolkit'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: theme.spacing(1)
    }
}))

const PostActions: IPostActions = ({ post }) => {
    const classes = useStyles()
    // eslint-disable-next-line
    const [_, { deletePost }] = useSinglePost(post.id)
    const [dialogOpen, setDialogOpen] = React.useState(false)
    const closeDialog = () => setDialogOpen(false)

    const { enqueueSnackbar } = useSnackbar()
    const [deletePostState, setDeletePostState] = React.useState<GenericAsyncState>('uninitiated')

    const handleDeletePost = async () => {
        setDeletePostState('loading')
        try {
            await deletePost().then(unwrapResult)
            setDeletePostState('success')
            enqueueSnackbar('Post deleted successfully', { variant: 'success' })
            setTimeout(closeDialog, 500);
        } catch (err) {
            setDeletePostState('fail')
            enqueueSnackbar('Error deleting post', { variant: 'error' })
        }
    }

    return (
        <>
            <Tooltip title='Delete Post (clicking will prompt a confirmation)'>
                <IconButton className={classes.root} onClick={() => setDialogOpen(true)}>
                    <DeletePostIcon />
                </IconButton>
            </Tooltip>
            <Dialog open={dialogOpen} onClose={closeDialog}>
                <DialogTitle>
                    {`Delete Post titled "${post.title}"?`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This action cannot be undone
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>
                        Don't Delete
                    </Button>
                    <LoadingButton
                        disableElevation
                        loading={deletePostState === 'loading'}
                        variant='contained'
                        color='primary'
                        onClick={handleDeletePost}
                    >
                        Delete Post
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default PostActions

