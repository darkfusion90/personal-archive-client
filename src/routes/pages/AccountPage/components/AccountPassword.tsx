import React from 'react'
import Button from '@material-ui/core/Button'

import { SettingCard } from './SettingCard'
import { IAccountPassword } from '../typings/AccountPassword'

export const AccountPassword: IAccountPassword = ({ emailVerified }) => {
    const subtitle = 'Verify your email to reset password'
    const action = (
        <Button variant='contained' color='primary' disabled={!emailVerified}>
            Reset Password
        </Button>
    )

    return (
        <SettingCard
            title='Password'
            subtitle={emailVerified ? '' : subtitle}
            action={action}
        />
    )
}