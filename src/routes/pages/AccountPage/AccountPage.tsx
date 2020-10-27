import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import useAccount from '../../../hooks/useAccount'
import LoadingDialog from '../../../features/LoadingDialog'
import { Redirect } from 'react-router-dom'
import { routeMap } from '../../routes'
import {
    AccountEmail,
    AccountMultifactor,
    AccountUsername,
    AccountPassword
} from './components'


const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: '100%',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8)
    }
}))

const AccountPage = () => {
    // eslint-disable-next-line
    const [{ loggedIn, user, emailVerified, multifactorAuthEnabled }, _, status] = useAccount({ autoFetch: true })
    const classes = useStyles()

    if (status.loading || status.uninitiated) {
        return <LoadingDialog open={true} />
    }

    if (!loggedIn || !user) {
        return <Redirect to={routeMap.login.path} />
    }

    return (
        <Container maxWidth='md' className={classes.root}>
            <Grid
                container
                direction='column'
                justify='space-evenly'
                wrap='nowrap'
                spacing={4}
            >
                <Grid item>
                    <AccountUsername username={user.username} />
                </Grid>

                <Grid item>
                    <AccountEmail email={user.email} emailVerified={Boolean(emailVerified)} />
                </Grid>

                <Grid item>
                    <AccountMultifactor multifactorAuthEnabled={Boolean(multifactorAuthEnabled)} />
                </Grid>

                <Grid item>
                    <AccountPassword emailVerified={Boolean(emailVerified)} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AccountPage
