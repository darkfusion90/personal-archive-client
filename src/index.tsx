import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import { Provider as StoreProvider } from 'react-redux'
import store from './store'

import AppThemeProvider from './theme/AppThemeProvider'

import { SnackbarProvider } from 'notistack'

import CssBaseline from '@material-ui/core/CssBaseline'
import App from './app'

ReactDOM.render(
    <StoreProvider store={store}>
        <AppThemeProvider>
            <SnackbarProvider>
                <CssBaseline />
                <App />
            </SnackbarProvider>
        </AppThemeProvider>
    </StoreProvider>,
    document.getElementById('root')
)