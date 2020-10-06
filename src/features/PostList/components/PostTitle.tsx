import React from 'react'
import { IPostTitle } from '../typings/PostTitle'

import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        fontWeight: theme.typography.fontWeightBold,
        color: 'inherit',
        textDecoration: 'none',
        transition: '0.8s color ease-out',
        outline: 0,
        '&:hover': {
            textDecoration: 'none',
            color: blue[800],
        }
    }
}))

const PostTitle: IPostTitle = ({ post }) => {
    const classes = useStyles()

    return (
        <Typography
            className={classes.root}
            variant='h5'
            component='a'
            href={post.link || '#'}
            target='_blank'
        >
            {post.title}
        </Typography>
    )
}

export default PostTitle
