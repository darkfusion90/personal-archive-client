import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles(createStyles({
    root: {
        height: '100%'
    },
    typography: {
        fontFamily: 'Caveat' || 'cursive',
    }
}))

const SplashScreen = () => {
    const classes = useStyles()

    return (
        <>
            <LinearProgress />
            <Grid
                container
                direction='column'
                alignItems='center'
                justify='center'
                className={classes.root}
            >
                <Typography variant='h4' className={classes.typography}>
                    Personal Archive
            </Typography>
            </Grid>
        </>
    )
}

export default SplashScreen
