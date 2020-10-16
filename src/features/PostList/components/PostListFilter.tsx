import React from 'react'

import FilterIcon from '@material-ui/icons/FilterList'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import PostFilterDialog from '../../PostFilterDialog'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        fontSize: 'inherit',
        color: 'inherit'
    }
}))

const PostListFilter = () => {
    const classes = useStyles()
    const [dialogOpen, setDialogOpen] = React.useState(false)

    return (
        <>
            <Button
                className={classes.root}
                startIcon={<FilterIcon />}
                onClick={() => setDialogOpen(true)}
            >
                Filter
            </Button>
            <PostFilterDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
            />
        </>
    )
}

export default PostListFilter
