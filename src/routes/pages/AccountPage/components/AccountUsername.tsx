import React from 'react'
import { IAccountUsername } from '../typings'

import Button from '@material-ui/core/Button'
import { SettingCard } from './SettingCard'

export const AccountUsername: IAccountUsername = ({ username }) => {
    return (
        <SettingCard
            title='Username'
            subtitle={username}
            action={<Button variant='contained' color='primary'>Change Username</Button>}
        />
    )
}