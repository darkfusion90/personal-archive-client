import React from 'react'
import Typography from '@material-ui/core/Typography'

import { SettingCard } from './SettingCard'
import { IAccountMultifactor } from '../typings'
import useAccount from '../../../../hooks/useAccount'
import LoadingButton from '../../../../components/LoadingButton'
import useAsyncAction from '../../../../hooks/useAsyncAction'

export const AccountMultifactor: IAccountMultifactor = (props) => {
    const Subtitle = (
        <Typography variant='subtitle2' color='textSecondary'>
            {props.multifactorAuthEnabled ? 'Enabled' : 'Disabled'}
        </Typography>
    )

    return (
        <SettingCard
            title='Two Factor Authentication'
            subtitle={Subtitle}
            action={<AccountMultifactorAction />}
            extra={<AccountMultifactorMeta {...props} />}
        />
    )
}

const AccountMultifactorMeta: IAccountMultifactor = ({ multifactorAuthEnabled }) => {
    if (multifactorAuthEnabled) {
        return (
            <>
                Your account is secured using Two Factor Authentication.
                Any attempt to login through an unknown device and/or IP address will require additional confirmation through email
            </>
        )
    }

    return (
        <>
            Enabling Two Factor authentication will provide additional security
            to your account
        </>
    )
}

const AccountMultifactorAction = () => {
    const [{ multifactorAuthEnabled }, { multifactor }] = useAccount()

    const getBtnContent = () => {
        if (multifactorAuthEnabled) {
            return {
                text: 'Disable Two Factor Auth',
                onClick: multifactor.disableMultifactor
            }
        }

        return {
            text: 'Enable Two Factor Auth',
            onClick: multifactor.enableMultifactor
        }
    }

    const { text, onClick } = getBtnContent()
    const [actionState, { performAction }] = useAsyncAction({ action: onClick })

    return (
        <LoadingButton
            loading={actionState.status === 'loading'}
            variant='contained'
            color='primary'
            onClick={() => performAction()}
        >
            {text}
        </LoadingButton>
    )
}