import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route } from 'react-router-dom'

import useAccount from '../hooks/useAccount'
import SplashScreen from '../features/SplashScreen/SplashScreen'
import routes from '../routes'
import AppScaffold from '../features/AppScaffold/AppScaffold'

const AppContent = () => {
    // eslint-disable-next-line
    const [{ loggedIn }, _, { loading }] = useAccount({ autoFetch: true })

    if (loading) {
        return <SplashScreen />
    }

    return (
        <BrowserRouter>
            <AppScaffold>
                {routes.map(route => <Route {...route} key={route.path} />)}
            </AppScaffold>
        </BrowserRouter>
    )
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