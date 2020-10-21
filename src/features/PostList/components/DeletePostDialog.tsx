import React from 'react'

import {
    Button,
    Dialog,
    DialogProps,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@material-ui/core'
import PostModel from '../../../store/models/PostModel'
import LoadingButton from '../../../components/LoadingButton'

interface IDeletePostDialogProps extends DialogProps {
    post: PostModel
    isDeleting: boolean
    onDeletePost: VoidCallback
}

const DeletePostDialog: React.FC<IDeletePostDialogProps> = ({
    post,
    isDeleting,
    onDeletePost,
    ...props
}) => {
    return (
        <Dialog {...props}>
            <DialogTitle>
                {`Delete Post titled "${post.title}"?`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This action cannot be undone
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose as any}>
                    Don't Delete
                </Button>
                <LoadingButton
                    disableElevation
                    loading={isDeleting}
                    variant='contained'
                    color='primary'
                    onClick={onDeletePost}
                >
                    Delete Post
                    </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

export default DeletePostDialog
