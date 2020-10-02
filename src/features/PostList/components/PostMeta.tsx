import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import DotSeparatorIcon from '@material-ui/icons/FiberManualRecord'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import dateFormat from 'date-fns/format'

import { IPostMeta } from '../typings/PostMeta'
import PostTags from './PostTags'

const useStyles = makeStyles((theme) => createStyles({
    dotSeparator: {
        ...theme.typography.subtitle2
    }
}))

const PostMeta: IPostMeta = ({ post }) => {
    const classes = useStyles()
    const creationDate = dateFormat(post.createdAt, 'MMM dd, yyyy')

    return (
        <Grid
            container
            wrap='wrap'
            alignItems='center'
            alignContent='center'
            spacing={2}
        >
            <Grid item>
                <Typography color='textSecondary'>
                    {creationDate}
                </Typography>
            </Grid>

            {post.tags.length > 0 &&
                <Grid item>
                    <DotSeparatorIcon className={classes.dotSeparator} />
                </Grid>
            }

            <Grid item>
                <PostTags post={post} />
            </Grid>
        </Grid>
    )
}

export default PostMeta
