import React from 'react'
import PostModel from '../store/models/PostModel'
import { unwrapResult } from '@reduxjs/toolkit'
import { getAllPostsAsync, createPostAsync } from '../store/states/posts-state/actions'
import { useAppDispatch } from '../store'
import { useSelector } from 'react-redux'
import { selectAll as selectAllPosts } from '../store/states/posts-state/posts-selectors'
import { ICreatePostData } from '../api/posts'

interface IUsePostsHookOpts {
    autoFetch: boolean
}

interface IPostsFetchStatus {
    loading: boolean
    success: boolean
    failure: boolean
    uninitiated: boolean
}

interface IPostsActions {
    updateAllPosts: VoidCallback
    createPost: ValueCallback<ICreatePostData>
}

type IUsePostsHook = HookWithMeta<PostModel[], IPostsActions, IPostsFetchStatus>

const usePosts = ({ autoFetch }: IUsePostsHookOpts = { autoFetch: false }): IUsePostsHook => {
    const [postsStatus, setPostsStatus] = React.useState<GenericAsyncState>('uninitiated')
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        async function updateAccount() {
            if (autoFetch) {
                setPostsStatus('loading')
                await dispatch(getAllPostsAsync())
                    .then(unwrapResult)
                    .then((_: any) => setPostsStatus('success'))
                    .catch((_: any) => setPostsStatus('fail'))
            }
        }

        updateAccount()
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
            uninitiated: postsStatus === 'uninitiated'
        }
    ]
}

export default usePosts
