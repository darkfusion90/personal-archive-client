import postsAdapter from "./posts-adapter"

type PostsState = ReturnType<typeof postsAdapter.getInitialState>

export default PostsState

