import React from 'react'

import { IPostSubtitle } from '../typings/PostSubtitle'
import PostComment from './PostComment'
import PostMeta from './PostMeta'

const PostSubtitle: IPostSubtitle = ({ post }) => {
    return (
        <>
            <PostComment post={post} />
            <PostMeta post={post} />
        </>
    )
}

export default PostSubtitle