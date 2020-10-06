import React from 'react'
import clsx from 'clsx'
import { Link, LinkProps } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Typography, { TypographyProps } from '@material-ui/core/Typography'

import { blue } from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => createStyles({
    root: {
        textDecoration: 'none',
        transition: '0.8s color ease-out',
        outline: 0,
        '&:hover': {
            textDecoration: 'none',
            color: blue[800],
        }
    }
}))

const LinkTypography: React.FC<TypographyProps & LinkProps> = ({ className, to, ...props }) => {
    const classes = useStyles()

    return (
        <Typography
            className={clsx(className, classes.root)}
            component={Link}
            to={to}
            {...props}
        >
            Create Post
        </Typography>
    )
}

export default LinkTypography