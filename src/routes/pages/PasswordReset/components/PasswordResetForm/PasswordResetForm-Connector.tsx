import React from 'react'
import { IPasswordResetFormData } from '../../typings/PasswordResetFormData'
import useAccount from '../../../../../hooks/useAccount'
import { IPasswordResetFormConnector, IPasswordResetFormConnectorOwnProps } from '../../typings/PasswordResetForm-Connector'
import PasswordResetFormView from './PasswordResetForm-View'
import { reduxForm } from 'redux-form'
import passwordResetFormValidator from './validator'
import unwrapAxiosError from '../../../../../utils/unwrap-axios-thunk-result'
import { resetPasswordAsync } from '../../../../../store/states/account-state/actions'

const formId = 'password-reset-form'

const PasswordResetFormConnector: IPasswordResetFormConnector = ({
    passwordResetToken,
    formState,
    formActions: actions,
    handleSubmit
}) => {
    const { resetPassword } = useAccount()[1]
    const requestResetPassword = ({ password }: IPasswordResetFormData) => {
        actions.setFormSubmitting()
        resetPassword({ passwordResetToken, password })
            .then(unwrapAxiosError(resetPasswordAsync))
            .then((_: any) => actions.setFormSubmitSuccess())
            .catch((err: any) => {
                console.log('Reset error: ', { err })
                actions.setFormSubmitFail(err)
            })
    }

    return (
        <PasswordResetFormView
            formState={formState}
            formId={formId}
            onFormSubmit={handleSubmit(requestResetPassword)}
        />
    )
}

export default reduxForm<IPasswordResetFormData, IPasswordResetFormConnectorOwnProps>({
    form: formId,
    validate: passwordResetFormValidator
})(PasswordResetFormConnector)
