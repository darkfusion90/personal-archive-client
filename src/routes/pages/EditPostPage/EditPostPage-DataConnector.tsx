import React from 'react'
import { useParams } from 'react-router-dom'

import EditPostPageFormConnector from './EditPostPage-FormConnector'
import { getPostById } from '../../../api/posts'
import useAsyncState from '../../../hooks/useAsyncState'
import PostModel from '../../../store/models/PostModel'

interface IEditPostPageParams {
    postId: string
}

const EditPostPageStoreConnector = () => {
    const [fetchState, { setSuccess, setFailure, setLoading }] = useAsyncState<PostModel | undefined>()
    const { postId } = useParams<IEditPostPageParams>()

    React.useEffect(() => {
        async function fetchPost() {
            setLoading()
            await getPostById(postId)
                .then((post) => setSuccess(post ? post : undefined))
                .catch(setFailure)
        }

        if (fetchState.status === 'uninitiated') {
            fetchPost()
        }

    }, [postId, fetchState, setLoading, setFailure, setSuccess])


    const getInitialValues = () => {
        const post = fetchState.meta
        if (post) {
            return {
                ...post,
                tags: post.tags.map(value => ({
                    label: `Create Tag: "${value}"`,
                    value
                }))
            }
        }
    }

    return (
        <EditPostPageFormConnector
            postId={postId}
            initialValues={getInitialValues()}
            postFetchStatus={fetchState}
        />
    )
}

export default EditPostPageStoreConnector
