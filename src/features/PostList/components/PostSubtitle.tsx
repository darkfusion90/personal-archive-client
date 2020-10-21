import React from 'react'

import { IPostSubtitle } from '../typings/PostSubtitle'
import PostComment from './PostComment'
import PostMeta from './PostMeta'
import PostLink from './PostLink'

const PostSubtitle: IPostSubtitle = ({ post }) => {
    return (
        <>
            <PostLink post={post} />
            <PostComment post={post} />
            <PostMeta post={post} />
        </>
    )
}

export default PostSubtitle