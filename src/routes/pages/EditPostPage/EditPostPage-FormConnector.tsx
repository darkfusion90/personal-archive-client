import React from 'react'
import { reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

import { IPostFormConnector, IPostFormConnectorOwnProps } from './typings'
import EditPostPageView from './EditPostPage-View'

import usePosts from '../../../hooks/usePosts'
import { routeMap } from '../../routes'
import unwrapAxiosError from '../../../utils/unwrap-axios-thunk-result'
import PostModel from '../../../store/models/PostModel'
import { editPostAsync } from '../../../store/states/posts-state/actions'
import useForm from '../../../hooks/useForm'
import { validator as editPostFormValidator, IPostFormData } from '../../../features/PostForm'

const kFormId = 'edit-post-form'

const EditPostPageFormConnector: IPostFormConnector = ({
    handleSubmit,
    postId,
    postFetchStatus
}) => {
    // eslint-disable-next-line
    const [_, { editPost }] = usePosts()
    const [formState, formActions] = useForm<PostModel, any>({
        successSnackbarMessage: 'Post edit successful',
        failureSnackbarMessage: 'Error editing post'
    })

    const submitForm = ({ tags, ...formValues }: IPostFormData) => {
        let stringTags: string[] | undefined
        if (tags) {
            stringTags = tags.map(tag => tag.value)
        }

        formActions.setFormSubmitting()
        editPost({ ...formValues, id: postId, tags: stringTags })
            .then(unwrapAxiosError(editPostAsync))
            // @ts-ignore
            .then((editedPost: PostModel) => {
                console.log({ editedPost })
                formActions.setFormSubmitSuccess(editedPost)
            })
            .catch((error: any) => {
                formActions.setFormSubmitFail(error)
            })
    }

    if (formState.status === 'submit-success') {
        const editedPost = formState.meta
        return <Redirect to={{
            pathname: routeMap.home.path,
            state: { highlightPost: editedPost && editedPost.id }
        }} />
    }

    return (
        <EditPostPageView
            formId={kFormId}
            onFormSubmit={handleSubmit(submitForm)}
            postFetchStatus={postFetchStatus}
            {...formState}
        />
    )
}

export default reduxForm<IPostFormData, IPostFormConnectorOwnProps>({
    form: kFormId,
    validate: editPostFormValidator
})(EditPostPageFormConnector)
