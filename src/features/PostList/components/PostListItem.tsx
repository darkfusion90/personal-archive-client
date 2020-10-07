import React from 'react'

import { ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import PostTitle from './PostTitle'
import PostSubtitle from './PostSubtitle'
import PostActions from './PostActionButton'
import { IPostListItem } from '../typings/PostListItem'

const useStyles = makeStyles((theme) => createStyles({
    postActionRoot: {
        height: '100%'
    }
}))


const PostListItem: IPostListItem = ({ post, autoFocus, className }) => {
    const classes = useStyles()
    const [hasHighlighted, setHasHighlighted] = React.useState(false)

    React.useEffect(() => {
        if (autoFocus && !hasHighlighted) {
            console.log('Will highlight: ', post)
            setTimeout(() => {
                setHasHighlighted(true)
            }, 3000);
        }
    }, [post, autoFocus, hasHighlighted, setHasHighlighted])

    return (
        // @ts-ignore
        <ListItem
            className={className}
            autoFocus={autoFocus}
            selected={autoFocus && !hasHighlighted}
        >
            <ListItemText
                primary={<PostTitle post={post} />}
                secondary={<PostSubtitle post={post} />}
                secondaryTypographyProps={{ component: 'div' }}
            />
            <ListItemSecondaryAction className={classes.postActionRoot}>
                <PostActions post={post} />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default PostListItem
