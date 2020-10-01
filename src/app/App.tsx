import React from 'react'
import PostList from '../features/PostList'
import useAccount from '../hooks/useAccount'
import LoginPortal from '../features/LoginPortal'
import SplashScreen from '../features/SplashScreen/SplashScreen'

const App = () => {
    const [{ loggedIn }, _, { loading }] = useAccount({ autoFetch: true })

    if (loading) {
        return <SplashScreen />
    }

    if (loggedIn) {
        return <PostList />
    } else {
        return <LoginPortal />
    }
}

export default App