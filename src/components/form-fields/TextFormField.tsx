import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Field, WrappedFieldProps } from 'redux-form'

export type ITextFormFieldProps = TextFieldProps & {
    name: string
    label: string
}

const renderField:React.FC<WrappedFieldProps & ITextFormFieldProps> = ({
    input,
    meta: { touched, error },
    label,
    ...textFieldProps
}) => {
    return (
        <>
            <TextField
                label={label}
                fullWidth
                {...textFieldProps}
                {...input}
            />
            {touched && error && <Typography color='error'>{error}</Typography>}
        </>
    )
}

const TextFormField: React.FC<ITextFormFieldProps> = ({
    name,
    label,
    children,
    ...textFieldProps
}) => {
    return <Field
        component={renderField}
        name={name}
        label={label}
        {...textFieldProps as any}
    />
}

export default TextFormField

