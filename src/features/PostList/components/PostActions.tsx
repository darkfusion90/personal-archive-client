import React from 'react'

import DeletePostIcon from '@material-ui/icons/Delete'
import MoreOptionsIcon from '@material-ui/icons/MoreVert'
import EditPostIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import useSinglePost from '../../../hooks/useSinglePost'
import { IPostActions } from '../typings/PostActions'
import { useSnackbar } from 'notistack'
import { unwrapResult } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import { routeMap } from '../../../routes'
import DeletePostDialog from './DeletePostDialog'
import MoreOptionsMenu from './MoreOptionsMenu'

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
    const closeDeleteConfirmationDialog = () => setDialogOpen(false)
    const openDeleteConfirmationDialog = () => setDialogOpen(true)

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);

    const openMoreOptionsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const closeMoreOptionsMenu = () => setMenuAnchorEl(null)

    const { enqueueSnackbar } = useSnackbar()
    const [deletePostState, setDeletePostState] = React.useState<GenericAsyncState>('uninitiated')

    const handleDeletePost = async () => {
        setDeletePostState('loading')
        try {
            await deletePost().then(unwrapResult)
            setDeletePostState('success')
            enqueueSnackbar('Post deleted successfully', { variant: 'success' })
            setTimeout(closeDeleteConfirmationDialog, 500);
        } catch (err) {
            setDeletePostState('fail')
            enqueueSnackbar('Error deleting post', { variant: 'error' })
        }
    }

    const editPostUrl = routeMap.editPost.path.replace(':postId', post.id)

    return (
        <>
            <div className={classes.root} >
                <Hidden xsDown>
                    <Tooltip title='Edit Post'>
                        <IconButton component={Link} to={editPostUrl}>
                            <EditPostIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete Post (clicking will prompt a confirmation)'>
                        <IconButton onClick={openDeleteConfirmationDialog}>
                            <DeletePostIcon />
                        </IconButton>
                    </Tooltip>
                </Hidden>

                <Hidden smUp>
                    <Tooltip title='More Options'>
                        <IconButton onClick={openMoreOptionsMenu} >
                            <MoreOptionsIcon />
                        </IconButton>
                    </Tooltip>
                </Hidden>
            </div>
            <DeletePostDialog
                open={dialogOpen}
                onClose={closeDeleteConfirmationDialog}
                isDeleting={deletePostState === 'loading'}
                onDeletePost={handleDeletePost}
                post={post}
            />
            <MoreOptionsMenu
                keepMounted
                open={Boolean(menuAnchorEl)}
                anchorEl={menuAnchorEl}
                onClose={closeMoreOptionsMenu}
                onDeletePost={openDeleteConfirmationDialog}
                editPostUrl={editPostUrl}
            />
        </>
    )
}

export default PostActions

