import React from 'react'
import {
    Dialog,
    DialogProps,
    DialogContent,
    DialogContentText,
    CircularProgress,
    Grid
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => createStyles({
    dialogContent: {
        height: '100%',
        '& > *': {
            margin: theme.spacing(2)
        }
    }
}))

const LoadingDialog: React.FC<DialogProps & { loadingText?: string }> = ({
    loadingText,
    ...props
}) => {
    const classes = useStyles()
    return (
        <Dialog fullScreen disableEscapeKeyDown disableBackdropClick {...props}>
            <DialogContent>
                <Grid
                    container
                    direction='column'
                    justify='center'
                    alignItems='center'
                    className={classes.dialogContent}
                >
                    <CircularProgress />
                    <DialogContentText variant='h4'>{loadingText || 'Loading'}</DialogContentText>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default LoadingDialog
