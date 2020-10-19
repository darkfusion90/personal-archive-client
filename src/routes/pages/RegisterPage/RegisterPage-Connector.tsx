import React from 'react'
import { reduxForm } from 'redux-form'
import { AxiosResponse } from 'axios'

import useForm from '../../../hooks/useForm'
import RegisterPageView from './RegisterPage-View'
import useAccount from '../../../hooks/useAccount'
import { IRegisterPageConnector, IRegisterPageConnectorOwnProps } from './typings/RegisterPage-Connector'
import unwrapAxiosError from '../../../utils/unwrap-axios-thunk-result'
import { createAccountAsync } from '../../../store/states/account-state/actions'
import validate from './validator'

const kFormId = 'user-register-form'

const RegisterPageConnector: IRegisterPageConnector = ({ handleSubmit }) => {
    const [formState, actions] = useForm<void, any>({
        successSnackbarMessage: 'User registration completed',
        failureSnackbarMessage: 'Error registering user. Try again'
    })
    const [{ loggedIn }, { createAccount }] = useAccount({ autoFetch: true })

    const submitForm = (formData: RegisterData) => {
        actions.setFormSubmitting()

        createAccount(formData)
            .then(unwrapAxiosError(createAccountAsync))
            .then(actions.setFormSubmitSuccess)
            .catch(({ status, data }: AxiosResponse) => {
                const unknownError = 'An unknown error occurred while trying to create the account'
                if (status === 401) {
                    actions.setFormSubmitFail(data ? data.message : unknownError)
                } else {
                    actions.setFormSubmitFail(unknownError)
                }
            })
    }

    return (
        <RegisterPageView
            loggedIn={loggedIn}
            formId={kFormId}
            onFormSubmit={handleSubmit(submitForm)}
            {...formState}
        />
    )
}

export default reduxForm<RegisterData, IRegisterPageConnectorOwnProps>({
    form: kFormId,
    validate
})(RegisterPageConnector)
