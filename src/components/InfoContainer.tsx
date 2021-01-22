import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'

import { makeStyles, createStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(() => createStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const InfoContainer: React.FC<{
    title: React.ReactNode,
    subtitle: React.ReactNode
}> = ({ title, subtitle }) => {
    const classes = useStyles()
    return (
        <Container maxWidth='sm' className={classes.root}>
            <Grid container spacing={8} direction='column' justify='center' alignItems='center'>
                <Typography variant='h5'>
                    {title}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                    {subtitle}
                </Typography>
            </Grid>
        </Container>
    )
}

export default InfoContainer