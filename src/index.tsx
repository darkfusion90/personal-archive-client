import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import { Provider as StoreProvider } from 'react-redux'
import store from './store'

import rootTheme from './theme'
import { ThemeProvider } from '@material-ui/core/styles'

import { SnackbarProvider } from 'notistack'

import CssBaseline from '@material-ui/core/CssBaseline'
import App from './app'

ReactDOM.render(
    <StoreProvider store={store}>
        <ThemeProvider theme={rootTheme}>
            <SnackbarProvider>
                <CssBaseline />
                <App />
            </SnackbarProvider>
        </ThemeProvider>
    </StoreProvider>,
    document.getElementById('root')
)