import React from 'react'
import { InputAdornment, IconButton } from '@material-ui/core'
import VisibilityOn from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import TextFormField from './TextFormField'

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

    return (
        <TextFormField
            type={showPassword ? 'text' : 'password'}
            label={label}
            name={name}
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
    )
}

export default PasswordField
