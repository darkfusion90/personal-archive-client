import React from 'react'
import Button from '@material-ui/core/Button'

import { SettingCard } from './SettingCard'
import { IAccountPassword } from '../typings/AccountPassword'
import { Link } from 'react-router-dom'
import { routeMap } from '../../../routes'

export const AccountPassword: IAccountPassword = ({ emailVerified }) => {
    return (
        <SettingCard
            title='Password'
            subtitle={emailVerified ? '' : 'Verify your email to reset password'}
            action={
                <Button
                    variant='contained'
                    color='primary'
                    disabled={!emailVerified}
                    component={Link}
                    to={routeMap.initiatePasswordReset.path}
                >
                    Reset Password
                </Button>
            }
        />
    )
}