import React from 'react'
import { IPostListItem } from '../typings/PostListItem'
import { ListItem, ListItemText } from '@material-ui/core'

import PostTitle from './PostTitle'
import PostSubtitle from './PostSubtitle'

const PostListItem: IPostListItem = ({ post, autoFocus, className }) => {
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
        </ListItem>
    )
}

export default PostListItem
