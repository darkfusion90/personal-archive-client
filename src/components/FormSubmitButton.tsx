import React from 'react'
import LoadingButton from './LoadingButton'
import { IFormStatus } from '../hooks/useForm'
import { ButtonProps } from '@material-ui/core'

interface IFormSubmitButtonProps {
    formState: IFormStatus
    formId: string
}

const FormSubmitButton: React.FC<IFormSubmitButtonProps & ButtonProps> = ({
    children,
    formState,
    formId,
    ...buttonProps
}) => {
    return (
        <LoadingButton
            form={formId}
            type='submit'
            loading={formState === 'submitting'}
            {...buttonProps}
        >
            {children}
        </LoadingButton>
    )
}

export default FormSubmitButton