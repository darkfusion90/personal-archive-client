import React from 'react'
import PostListView from './PostList-View'
import usePosts from '../../hooks/usePosts'

const PostListConnector: React.FC<{ highlightPost?: string }> = ({ highlightPost }) => {
    const [posts, { updateAllPosts }, { loading, error }] = usePosts({ autoFetch: true })

    return (
        <PostListView posts={posts}
            onUpdatePosts={updateAllPosts}
            highlightPost={highlightPost}
            isLoading={loading}
            error={error}
        />
    )
}

export default PostListConnector
