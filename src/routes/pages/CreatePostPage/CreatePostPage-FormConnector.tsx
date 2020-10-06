import React from 'react'
import { reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

import {
    ICreatePostFormConnector,
    ICreatePostFormData,
    ICreatePostFormConnectorOwnProps
} from './typings'
import CreatePostPageView from './CreatePostPage-View'
import createPostFormValidator from './validator'

import usePosts from '../../../hooks/usePosts'
import { routeMap } from '../../routes'
import unwrapAxiosError from '../../../utils/unwrap-axios-thunk-result'
import PostModel from '../../../store/models/PostModel'
import { createPostAsync } from '../../../store/states/posts-state/actions'
import useForm from '../../../hooks/useForm'

const kFormId = 'create-post-form'
const kInitialValues: ICreatePostFormData = {
    title: 'New Post'
}

const CreatePostPageFormConnector: ICreatePostFormConnector = ({ handleSubmit, error }) => {
    // eslint-disable-next-line
    const [_, { createPost }] = usePosts()
    const [formState, formActions] = useForm<PostModel,any>({
        successSnackbarMessage: 'Your post was created successfully',
        failureSnackbarMessage: 'Error creating post'
    })

    const submitForm = ({ tags, ...formValues }: ICreatePostFormData) => {
        console.log('Form Submit: ', formValues)
        let stringTags: string[] | undefined
        if (tags) {
            stringTags = tags.map(tag => tag.value)
        }

        formActions.setFormSubmitting()
        createPost({ ...formValues, tags: stringTags })
            .then(unwrapAxiosError(createPostAsync))
            // @ts-ignore
            .then((createdPost: PostModel) => {
                formActions.setFormSubmitSuccess(createdPost)
            })
            .catch((error: any) => {
                formActions.setFormSubmitFail(error)
            })
    }

    if (formState.status === 'submit-success') {
        const createdPost = formState.meta
        return <Redirect to={{
            pathname: routeMap.home.path,
            state: { highlightPost: createdPost && createdPost.id }
        }} />
    }

    return (
        <CreatePostPageView
            formId={kFormId}
            onFormSubmit={handleSubmit(submitForm)}
            {...formState}
        />
    )
}

export default reduxForm<ICreatePostFormData, ICreatePostFormConnectorOwnProps>({
    form: kFormId,
    initialValues: kInitialValues,
    validate: createPostFormValidator
})(CreatePostPageFormConnector)
