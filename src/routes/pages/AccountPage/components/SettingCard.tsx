import React from 'react'
import { ISettingCard, ISettingCardInfo, ISettingCardAction } from '../typings'
import { Grid, Typography, Paper, useMediaQuery, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { fade, lighten } from '@material-ui/core/styles/colorManipulator'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => {
    const getActionBg = () => {
        // Lightening will not suit for dark theme hence we are fading the color to suit dark theme
        if (theme.palette.type === 'dark') {
            return fade(theme.palette.primary.light, 0.05)
        }

        return lighten(theme.palette.primary.light, 0.6)
    }

    return createStyles({
        item: {
            padding: theme.spacing(4),
            [theme.breakpoints.down('xs')]: {
                padding: theme.spacing(2)
            }
        },
        action: {
            backgroundColor: getActionBg()
        },
        subtitle: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
        }
    })
})

export const SettingCard: ISettingCard = ({
    action,
    ...infoProps
}) => {
    const classes = useStyles()

    return (
        <Paper elevation={2}>
            <Grid container>
                <SettingCardInfo {...infoProps} className={classes.item} />
                <SettingCardAction action={action} className={clsx(classes.item, classes.action)} />
            </Grid>
        </Paper>
    )
}

const SettingCardInfo: ISettingCardInfo = ({
    title,
    subtitle,
    extra,
    className
}) => {
    const classes = useStyles()
    const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
    const titleVariant = isMobile ? 'h5' : 'h4'

    return (
        <Grid item container direction='column' wrap='nowrap' sm={7} className={className}>
            <Grid item>
                <Typography variant={titleVariant}>
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='subtitle2' className={classes.subtitle}>
                    {subtitle}
                </Typography>
            </Grid>
            <Grid item>
                {extra}
            </Grid>
        </Grid>
    )
}

const SettingCardAction: ISettingCardAction = ({ action, className }) => {
    return (
        <Grid
            sm
            item
            container
            alignItems='center'
            justify='center'
            className={className}
        >
            <Grid item>
                {action}
            </Grid>
        </Grid>
    )
}