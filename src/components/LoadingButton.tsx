import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, createStyles } from '@material-ui/core/styles'


export interface ILoadingButtonProps extends ButtonProps {
    loading?: boolean
}

const useStyles = makeStyles((theme) => createStyles({
    stateIcon: {
        marginRight: theme.spacing(1.5),
        verticalAlign: 'middle'
    }
}))

const LoadingButton: React.FC<ILoadingButtonProps> = ({
    loading = false,
    children,
    ...buttonProps
}) => {
    const classes = useStyles()

    return (
        <Button {...buttonProps} disabled={loading}>
            {loading && <CircularProgress thickness={8} size={14} className={classes.stateIcon} />}
            {children}
        </Button>
    )
}

export default LoadingButton
