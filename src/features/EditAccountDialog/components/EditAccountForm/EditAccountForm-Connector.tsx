import React from 'react'
import { IEditAccountFormConnector, IEditAccountFormData, IEditAccountFormConnectorOwnProps } from '../../typings/EditAccountForm-Connector'
import { reduxForm } from 'redux-form'
import EditAccountFormView from './EditAccountForm-View'
import useForm from '../../../../hooks/useForm'
import useAccount from '../../../../hooks/useAccount'
import { editAccountAsync } from '../../../../store/states/account-state/actions'
import unwrapAxiosError from '../../../../utils/unwrap-axios-thunk-result'

export const kFormId = 'edit-account'

const EditAccountFormConnector: IEditAccountFormConnector = ({ handleSubmit, toEdit }) => {
    const { editAccount } = useAccount()[1]
    const [formState, formActions] = useForm({
        successSnackbarMessage: 'Account successfully edited',
        failureSnackbarMessage: 'Failed to edit account'
    })

    const submitForm = ({ toEditValue }: IEditAccountFormData) => {
        formActions.setFormSubmitting()

        editAccount(toEdit, toEditValue)
            .then(unwrapAxiosError(editAccountAsync))
            .then(() => formActions.setFormSubmitSuccess())
            .catch(formActions.setFormSubmitFail)
    }

    return <EditAccountFormView
        formState={formState}
        toEdit={toEdit}
        formId={kFormId}
        onFormSubmit={handleSubmit(submitForm)}
    />
}

export default reduxForm<IEditAccountFormData, IEditAccountFormConnectorOwnProps>({
    form: kFormId
})(EditAccountFormConnector)
