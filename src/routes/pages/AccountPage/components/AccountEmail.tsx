import React from 'react'
import { IAccountEmail } from '../typings'

import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import { SettingCard } from './SettingCard'
import LoadingButton from '../../../../components/LoadingButton'
import { requestEmailVerification } from '../../../../api/auth'
import useAsyncAction from '../../../../hooks/useAsyncAction'
import AccountActionButton from './AccountActionButton'

export const AccountEmail: IAccountEmail = (props) => {
    return (
        <SettingCard
            title='Email'
            subtitle={<AccountEmailMeta {...props} />}
            action={<AccountActionButton toEdit='email'>Change Email Address</AccountActionButton>}
            extra={!props.emailVerified && <AccountEmailVerificationAlert />}
        />
    )
}

const AccountEmailMeta: IAccountEmail = ({ email, emailVerified }) => {
    return (
        <>
            {email}
            <Typography component='span' variant='subtitle2' color='textSecondary'>
                {' '}({emailVerified ? '' : 'not '}verified)
            </Typography>
        </>
    )
}

const AccountEmailVerificationAlert = () => {
    const [{ status }, { performAction }] = useAsyncAction({ action: requestEmailVerification })

    return (
        <Alert
            severity='info'
            action={
                <LoadingButton loading={status === 'loading'} onClick={() => performAction()}>
                    Send verification email
                </LoadingButton>
            }
        >
            Your email address is not verified
        </Alert>
    )
}