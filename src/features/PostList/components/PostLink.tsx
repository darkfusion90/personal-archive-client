import React from 'react'
import Typography from '@material-ui/core/Typography'
import LinkIcon from '@material-ui/icons/Link'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { IPostLink } from '../typings/PostLink'
import LinkTypography from '../../../components/LinkTypography'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        ...theme.typography.subtitle1,
        verticalAlign: 'middle',
        display: 'inline-flex',
    },
    link: {
        color: blue[600]
    }
}))

const PostLink: IPostLink = ({ post }) => {
    const classes = useStyles()
    if (!post.link) {
        return null
    }

    return (
        <Typography className={classes.root}>
            <LinkIcon />
            &nbsp;
            <LinkTypography linkOutsideApp to={post.link} className={classes.link}>
                {post.link}
            </LinkTypography>
        </Typography>
    )
}

export default PostLink