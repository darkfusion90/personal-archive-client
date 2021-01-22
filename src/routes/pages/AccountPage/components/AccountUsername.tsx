import React from 'react'
import { IAccountUsername } from '../typings'

import { SettingCard } from './SettingCard'
import AccountActionButton from './AccountActionButton'

export const AccountUsername: IAccountUsername = ({ username }) => {
    return (
        <SettingCard
            title='Username'
            subtitle={username}
            action={<AccountActionButton toEdit='username'>Change Username</AccountActionButton>}
        />
    )
}