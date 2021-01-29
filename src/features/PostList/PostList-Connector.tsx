import React from 'react'
import PostListView from './PostList-View'
import usePosts from '../../hooks/usePosts'
import useFilter from '../../hooks/useFilter'

const PostListConnector: React.FC<{ highlightPost?: string }> = ({ highlightPost }) => {
    const [posts, { updateAllPosts }, { loading, error }] = usePosts({ autoFetch: true })
    const [filter] = useFilter()

    return (
        <PostListView posts={posts}
            onUpdatePosts={updateAllPosts}
            highlightPost={highlightPost}
            isLoading={loading}
            error={error}
            filter={filter}
        />
    )
}

export default PostListConnector
