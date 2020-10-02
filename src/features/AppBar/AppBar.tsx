import React from 'react'

import MaterialAppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import AccountIcon from '@material-ui/icons/AccountCircle';

import useAccount from '../../hooks/useAccount'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
}))

const AppBar = () => {
    const classes = useStyles()
    const [account, _, { loading: isAccountLoading }] = useAccount()

    const LoginButton = () => {
        if (account.loggedIn || isAccountLoading) {
            return null
        }

        return <Button color='inherit'>Login</Button>
    }

    const UserAvatar = () => {
        if(isAccountLoading){
            return null
        }

        return <AccountIcon />
    }

    return (
        <MaterialAppBar className={classes.root}>
            <Toolbar>
                <Typography variant='h6' className={classes.title}>
                    Personal Archive
                </Typography>
                <LoginButton />
                <UserAvatar />
            </Toolbar>
        </MaterialAppBar>
    )
}

export default AppBar
