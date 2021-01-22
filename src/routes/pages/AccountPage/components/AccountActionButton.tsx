import React from 'react'
import { ButtonProps, Button } from '@material-ui/core'
import EditAccountDialog from '../../../../features/EditAccountDialog'

type IAccountActionButtonProps = ButtonProps & {
    toEdit: 'username' | 'email'
}

const AccountActionButton: React.FC<IAccountActionButtonProps> = ({ toEdit, ...props }) => {
    const [dialogOpen, setDialogOpen] = React.useState(false)

    return (
        <>
            <Button
                variant='contained'
                color='primary'
                onClick={() => setDialogOpen(true)}
                {...props}
            />
            <EditAccountDialog toEdit={toEdit} open={dialogOpen} onClose={() => setDialogOpen(false)} />
        </>
    )
}

export default AccountActionButton
