import React from 'react'
import PostListView from './PostList-View'
import usePosts from '../../hooks/usePosts'

const PostListConnector = () => {
    const [posts, { updateAllPosts }] = usePosts({ autoFetch: true })

    return <PostListView posts={posts} onUpdatePosts={updateAllPosts} />
}

export default PostListConnector
