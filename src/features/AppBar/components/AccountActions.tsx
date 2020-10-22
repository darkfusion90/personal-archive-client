import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import Button, { ButtonProps } from '@material-ui/core/Button'

import { routeMap } from '../../../routes'
import useAccount from '../../../hooks/useAccount'

const LinkButton: React.FC<ButtonProps & NavLinkProps> = (props) => {
    return <Button component={NavLink} {...props} />
}

const LoginButton = () => {
    // eslint-disable-next-line
    const [account, _, { loading: isAccountLoading }] = useAccount()

    if (account.loggedIn || isAccountLoading) {
        return null
    }

    return (
        <>
            <LinkButton to={routeMap.login.path} variant='text'>
                Login
            </LinkButton>
            <LinkButton to={routeMap.register.path} variant='outlined'>
                Register
            </LinkButton>
        </>
    )
}

export default LoginButton
