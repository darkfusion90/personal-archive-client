import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'

import { IEditAccountDialog } from './typings'
import { EditAccountForm, kFormId } from './components'

const EditAccountDialog: IEditAccountDialog = ({ toEdit, ...props }) => {
    return (
        <Dialog {...props}>
            <DialogTitle>Edit Account</DialogTitle>
            <DialogContent>
                <EditAccountForm toEdit={toEdit} />
            </DialogContent>
            <DialogActions>
                <Button color='primary' variant='contained' type='submit' form={kFormId}>
                    Confirm Edit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export * from './typings/EditAccountDialog'
export default EditAccountDialog
