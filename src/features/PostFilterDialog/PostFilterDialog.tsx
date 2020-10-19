import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogProps,
    Button
} from '@material-ui/core'

import { PostFilterForm } from './components'

const PostFilterDialog: React.FC<DialogProps> = (props) => {
    return (
        <Dialog disableEscapeKeyDown fullScreen {...props}>
            <DialogTitle>Filter Posts</DialogTitle>
            <DialogContent>
                <PostFilterForm afterSetFilter={props.onClose as any} />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose as any}>
                    Cancel
                </Button>

                <Button
                    type='submit'
                    form='post-filter-form'
                    variant='contained'
                    color='primary'
                >
                    Set Filter
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PostFilterDialog