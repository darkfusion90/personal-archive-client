import React from 'react'
import { Redirect } from 'react-router-dom'

import useAccount from '../../hooks/useAccount'
import PostList from '../../features/PostList'
import { routeMap } from '../routes'

const HomePage = () => {
    const [{ loggedIn }] = useAccount()
    
    if (loggedIn) {
        return <PostList />
    }

    return <Redirect to={routeMap.login.path} />
}

export default HomePage
