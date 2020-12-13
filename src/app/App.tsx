import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import useAccount from '../hooks/useAccount'
import SplashScreen from '../features/SplashScreen/SplashScreen'
import routes from '../routes'
import AppScaffold from '../features/AppScaffold/AppScaffold'
import PageNotFound from '../routes/pages/PageNotFound'

const AppContent = () => {
    const { loading, uninitiated } = useAccount({ autoFetch: true })[2]

    if (uninitiated || loading) {
        return <SplashScreen />
    }

    return (
        <BrowserRouter>
            <AppScaffold>
                <Switch>
                    {routes.map(route => <Route {...route} key={route.path} />)}
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </AppScaffold>
        </BrowserRouter>
    )
}

const App = () => {
    return (
        <>
            <Helmet
                titleTemplate='%s | Personal Archive'
                defaultTitle='Personal Archive'
            />
            <AppContent />
        </>
    )
}

export default App