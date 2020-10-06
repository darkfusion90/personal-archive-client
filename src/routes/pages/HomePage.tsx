import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import useAccount from '../../hooks/useAccount'
import PostList from '../../features/PostList'
import { routeMap } from '../routes'

interface IHomePageHistoryState {
    highlightPost?: string
}

const HomePage = () => {
    const [{ loggedIn }] = useAccount()
    const { state } = useLocation<IHomePageHistoryState>()

    const highlightPost = state ? state.highlightPost : undefined

    if (loggedIn) {
        return <PostList highlightPost={highlightPost} />
    }

    return <Redirect to={routeMap.login.path} />
}

export default HomePage
