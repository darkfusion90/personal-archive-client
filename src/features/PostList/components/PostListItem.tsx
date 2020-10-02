import React from 'react'
import { IPostListItem } from '../typings/PostListItem'
import {
    ListItem,
    ListItemText,
    makeStyles,
    createStyles,
    Typography,
} from '@material-ui/core'

import PostMeta from './PostMeta'
import constants from '../constants'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        margin: `${theme.spacing(constants.itemThemeSpacingUnit)}px auto`
    },
    title: {
        fontWeight: theme.typography.fontWeightBold
    }
}))

const PostListItem: IPostListItem = ({ post }) => {
    const classes = useStyles()

    const PostTitle = () => {
        return (
            <Typography className={classes.title} variant='h5'>
                {post.title}
            </Typography>
        )
    }

    const PostSubtitle = () => {
        return (
            <>
                {post.comment &&
                    <Typography paragraph>
                        {post.comment}
                    </Typography>
                }
                <PostMeta post={post} />
            </>
        )
    }

    return (
        <ListItem className={classes.root}>
            <ListItemText primary={<PostTitle />} secondary={<PostSubtitle />} />
        </ListItem>
    )
}

export default PostListItem
