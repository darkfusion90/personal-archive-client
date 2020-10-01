import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { Field, WrappedFieldProps } from 'redux-form'

type ITextFormFieldProps = TextFieldProps & {
    name: string
    label: string
}

const TextFormField: React.FC<ITextFormFieldProps> = ({
    name,
    label,
    ...textFieldProps
}) => {
    const renderField = ({ input }: WrappedFieldProps) => {
        return <TextField
            label={label}
            fullWidth
            {...textFieldProps}
            {...input}
        />
    }

    return <Field
        component={renderField}
        name={name}
    />
}

export default TextFormField

