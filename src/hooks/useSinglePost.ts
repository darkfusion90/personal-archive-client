import { useSelector } from 'react-redux'

import PostModel from '../store/models/PostModel'
import { useAppDispatch, RootState } from '../store'
import { selectById } from '../store/states/posts-state/posts-selectors'

import usePosts, { IPostsFetchStatus } from './usePosts'
import { deletePostAsync } from '../store/states/posts-state/actions'

type MaybePost = PostModel | undefined

interface IUseSinglePostHookOpts {
    autoFetch: boolean
}

interface IPostActions {
    deletePost: VoidCallback<Promise<any>>
}

type IUseSinglePostHook = HookWithMeta<MaybePost, IPostActions, IPostsFetchStatus>

const useSinglePost = (postId: string, { autoFetch }: IUseSinglePostHookOpts = { autoFetch: false }): IUseSinglePostHook => {
    // eslint-disable-next-line
    const [_, __, status] = usePosts({ autoFetch })
    const post = useSelector<RootState, MaybePost>((state) => selectById(state, postId))
    const dispatch = useAppDispatch()

    return [post, {
        deletePost: () => dispatch(deletePostAsync(postId))
    }, status]
}

export default useSinglePost
