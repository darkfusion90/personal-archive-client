import React from 'react'
import { IAccountEmail } from '../typings'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import { SettingCard } from './SettingCard'

export const AccountEmail: IAccountEmail = (props) => {
    return (
        <SettingCard
            title='Email'
            subtitle={<AccountEmailMeta {...props} />}
            action={<Button variant='contained' color='primary'>Change Email Address</Button>}
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
    return (
        <Alert severity='info'>
            Your email address is not verified. Send verification email
        </Alert>
    )
}