import React from 'react'

import FloatingActionButton from '@material-ui/core/Fab'
import RefreshIcon from '@material-ui/icons/Refresh'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => createStyles({
    fab: {
        position: 'fixed',
        right: theme.spacing(4),
        bottom: theme.spacing(4),
        zIndex: 999
    }
}))

const AddPostFab = () => {
    const classes = useStyles()
    return (
        <FloatingActionButton
            className={classes.fab}
            color='secondary'
        >
            <RefreshIcon />
        </FloatingActionButton>
    )
}

export default AddPostFab
