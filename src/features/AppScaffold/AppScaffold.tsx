import React from 'react'

import AppBar from '../AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const AppScaffold: React.FC = ({ children }) => {
    return (
        <>
            <AppBar />
            <Toolbar />
            {children}
        </>
    )
}

export default AppScaffold
