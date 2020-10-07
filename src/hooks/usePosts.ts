import React from 'react'
import { useSelector } from 'react-redux'

import PostModel from '../store/models/PostModel'
import { getAllPostsAsync, createPostAsync } from '../store/states/posts-state/actions'
import { useAppDispatch } from '../store'
import { selectAll as selectAllPosts } from '../store/states/posts-state/posts-selectors'

import { ICreatePostData } from '../api/posts'
import unwrapAxiosError from '../utils/unwrap-axios-thunk-result'

interface IUsePostsHookOpts {
    autoFetch: boolean
}

export interface IPostsFetchStatus {
    loading: boolean
    success: boolean
    failure: boolean
    uninitiated: boolean
    error?: any
}

interface IPostsActions {
    updateAllPosts: VoidCallback
    createPost: ValueCallback<ICreatePostData>
}

type IUsePostsHook = HookWithMeta<PostModel[], IPostsActions, IPostsFetchStatus>

const usePosts = ({ autoFetch }: IUsePostsHookOpts = { autoFetch: false }): IUsePostsHook => {
    const [postsStatus, setPostsStatus] = React.useState<GenericAsyncState>('uninitiated')
    const [error, setError] = React.useState<any>()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        async function updatePosts() {
            if (autoFetch) {
                setPostsStatus('loading')
                await dispatch(getAllPostsAsync())
                    .then(unwrapAxiosError)
                    .then((_: any) => setPostsStatus('success'))
                    .catch((err: any) => {
                        setPostsStatus('fail')
                        setError(err)
                    })
            }
        }

        updatePosts()
    }, [dispatch, autoFetch])

    const posts = useSelector(selectAllPosts)

    return [
        posts,
        {
            updateAllPosts: () => dispatch(getAllPostsAsync()),
            createPost: (data) => dispatch(createPostAsync(data))
        },
        {
            loading: postsStatus === 'loading',
            success: postsStatus === 'success',
            failure: postsStatus === 'fail',
            uninitiated: postsStatus === 'uninitiated',
            error
        }
    ]
}

export default usePosts
