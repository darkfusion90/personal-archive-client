import React from 'react'
import { Helmet } from 'react-helmet'

import useAccount from '../hooks/useAccount'
import LoginPortal from '../features/LoginPortal'
import SplashScreen from '../features/SplashScreen/SplashScreen'
import AppScaffold from '../features/AppScaffold/AppScaffold'
import PostList from '../features/PostList'

const AppContent = () => {
    // eslint-disable-next-line
    const [{ loggedIn }, _, { loading }] = useAccount({ autoFetch: true })

    if (loading) {
        return <SplashScreen />
    }

    if (loggedIn) {
        return <AppScaffold body={<PostList />} />
    } else {
        return <LoginPortal />
    }
}

const App = () => {
    return (
        <>
            <Helmet
                titleTemplate='Personal Archive | %s'
                defaultTitle='Personal Archive'
            />
            <AppContent />
        </>
    )
}

export default App