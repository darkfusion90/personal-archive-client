import React from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import VisibilityOn from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { Field, WrappedFieldProps } from 'redux-form'

interface IPasswordFieldProps {
    name: string
    label: string
}

const PasswordField: React.FC<IPasswordFieldProps> = ({
    name,
    label
}) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    const renderField = ({ input }: WrappedFieldProps) => {
        return <TextField
            {...input}
            type={showPassword ? 'text' : 'password'}
            label={label}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton
                            onClick={togglePasswordVisibility}
                        >
                            {
                                showPassword ?
                                    <VisibilityOn /> :
                                    <VisibilityOff />
                            }
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    }

    return (
        <Field
            component={renderField}
            name={name}
        />
    )
}

export default PasswordField
