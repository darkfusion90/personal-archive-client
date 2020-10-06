import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { blue } from '@material-ui/core/colors'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { routeMap } from '../../../routes'
import LinkTypography from '../../../components/LinkTypography'


const useStyles = makeStyles((theme) => createStyles({
    link: {
        ...theme.typography.subtitle1,
        color: blue[900]
    }
}))

const NoPostsView = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={1} alignItems='center' justify='center'>
            <Grid item>
                <Typography align='center' color='textSecondary'>
                    You don't have any posts.
                </Typography>
            </Grid>
            <Grid item>
                <LinkTypography
                    to={routeMap.createPost.path}
                    className={classes.link}
                >
                    Create Post
                </LinkTypography>
            </Grid>
        </Grid>
    )
}

export default NoPostsView
