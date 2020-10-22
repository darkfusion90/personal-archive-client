import React from 'react'
import AccountIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

import useAccount from '../../../../hooks/useAccount'
import AccountMenu from './AccountMenu';

const AccountAvatar = () => {
    // eslint-disable-next-line
    const [account, _, { loading: isAccountLoading }] = useAccount()
    const [menuAnchorElement, setMenuAnchorElement] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('click')
        setMenuAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        console.log('close')
        setMenuAnchorElement(null);
    };

    if (isAccountLoading || !account.loggedIn) {
        return null
    }

    return (
        <>
            <IconButton onClick={handleClick}>
                <AccountIcon fontSize='large' />
            </IconButton>
            <AccountMenu
                anchorElement={menuAnchorElement}
                onCloseMenu={handleClose}
            />
        </>
    )
}

export default AccountAvatar
