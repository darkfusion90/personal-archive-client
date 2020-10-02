import React from 'react'

import AppBar from '../AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

interface IAppScaffoldProps {
    body: React.ReactNode
}

const AppScaffold: React.FC<IAppScaffoldProps> = ({ body }) => {
    return (
        <>
            <AppBar />
            <Toolbar />
            {body}
        </>
    )
}

export default AppScaffold
