import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { routeMap } from '../routes'
import LinkTypography from '../../components/LinkTypography'


const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: '100%',
        padding: theme.spacing(8)
    },
}))

const PageNotFound = () => {
    const classes = useStyles()
    return (
        <Grid
            container
            direction='column'
            justify='center'
            className={classes.root}
        >
            <Typography variant='h1'>Error</Typography>
            <Typography paragraph>We could not find the page you were looking for</Typography>
            <LinkTypography to={routeMap.home.path}>Go back home</LinkTypography>
        </Grid>
    )
}

export default PageNotFound
