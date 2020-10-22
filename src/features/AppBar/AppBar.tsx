import React from 'react'
import { NavLink } from 'react-router-dom';

import MaterialAppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors';

import { routeMap } from '../../routes';
import { AccountAvatar, AccountActions, ThemeSwitcher } from './components'

const kStyleRemoveLink = {
    color: 'inherit',
    textDecoration: 'none',
    "&:hover": {
        color: 'inherit',
        textDecoration: 'none'
    },
    outline: 0
}

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
        '& .MuiSvgIcon-root': {
            fill: theme.palette.primary.contrastText
        }
    },
    title: {
        flexGrow: 1,
        ...kStyleRemoveLink,
        '&:hover': {
            ...kStyleRemoveLink["&:hover"],
            color: grey[400]
        },
        transition: 'color 0.5s ease-in'
    },
    noLink: kStyleRemoveLink
}))

const AppBar = () => {
    const classes = useStyles()

    return (
        <MaterialAppBar className={classes.root}>
            <Toolbar>
                <Typography
                    variant='h6'
                    className={classes.title}
                    component={NavLink}
                    to={routeMap.home.path}
                >
                    Personal Archive
                </Typography>
                <ThemeSwitcher />
                <AccountActions />
                <AccountAvatar />
            </Toolbar>
        </MaterialAppBar>
    )
}

export default AppBar
