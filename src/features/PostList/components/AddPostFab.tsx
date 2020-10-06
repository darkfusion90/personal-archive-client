import React from 'react'
import { useHistory } from 'react-router-dom'

import FloatingActionButton from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { routeMap } from '../../../routes'

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
    const history = useHistory()

    return (
        <FloatingActionButton
            className={classes.fab}
            color='secondary'
            onClick={() => history.push(routeMap.createPost.path)}
        >
            <AddIcon />
        </FloatingActionButton>
    )
}

export default AddPostFab
