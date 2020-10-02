import React from 'react'
import { IPostComment } from '../typings/PostComment'
import { Typography } from '@material-ui/core'

const PostComment: IPostComment = ({ post: { comment } }) => {
    return (
        <Typography paragraph>
            {comment || ''}
        </Typography>
    )
}

export default PostComment
