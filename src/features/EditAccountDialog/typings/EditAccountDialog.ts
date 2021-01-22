import { DialogProps } from "@material-ui/core"

export interface IEditAccountDialogProps {
    toEdit: 'username' | 'email'
}

export type IEditAccountDialog = React.ComponentType<DialogProps & IEditAccountDialogProps>