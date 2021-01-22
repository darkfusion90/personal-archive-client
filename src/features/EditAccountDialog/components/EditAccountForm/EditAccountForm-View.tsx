import React from 'react'
import { IEditAccountFormView } from '../../typings/EditAccountForm-View'
import TextFormField from '../../../../components/form-fields/TextFormField'

const EditAccountFormView: IEditAccountFormView = ({ formState, toEdit, formId, onFormSubmit }) => {
    return (
        <form id={formId} onSubmit={onFormSubmit}>
            <TextFormField
                variant='outlined'
                name='toEditValue'
                label={'Enter ' + toEdit}
                disabled={formState.status === 'submitting'}
            />
        </form>
    )
}

export default EditAccountFormView
