import React from 'react'
import PostListConnector from '../features/PostList'
import useAccount from '../hooks/useAccount'
import LoginPortal from '../features/LoginPortal'
import SplashScreen from '../features/SplashScreen/SplashScreen'

const App = () => {
    // eslint-disable-next-line
    const [{ loggedIn }, _, { loading }] = useAccount({ autoFetch: true })

    if (loading) {
        return <SplashScreen />
    }

    if (loggedIn) {
        return <PostListConnector />
    } else {
        return <LoginPortal />
    }
}

export default App