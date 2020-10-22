import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles'

import useAccount from '../../../../hooks/useAccount';

interface IAccountMenuProps {
    anchorElement: null | HTMLElement
    onCloseMenu: React.MouseEventHandler
}


const useStyles = makeStyles((theme) => createStyles({
    loggedInAs: {
        marginRight: theme.spacing(1)
    },
    username: {
        fontWeight: theme.typography.fontWeightBold
    }
}))

const AccountMenu: React.FC<IAccountMenuProps> = ({ anchorElement, onCloseMenu }) => {
    const classes = useStyles()
    const [{ user, loggedIn }, { logout }] = useAccount()

    if (!loggedIn) {
        return null
    }

    const username = user && user.username

    return (
        <Menu
            keepMounted
            id="account-menu"
            anchorEl={anchorElement}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={Boolean(anchorElement)}
            onClose={onCloseMenu}
        >
            <MenuItem>
                <Typography className={classes.loggedInAs}>Logged in as:</Typography>
                <Typography className={classes.username} noWrap>
                    {username ? username : '-'}
                </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout as any}>Logout</MenuItem>
        </Menu>
    );
}


export default AccountMenu
