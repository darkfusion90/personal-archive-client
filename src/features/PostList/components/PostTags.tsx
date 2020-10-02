import React from 'react'
import { IPostTags } from '../typings/PostTags'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'inline-flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        // To counter the margin applied to first child on the left by '& > *' styling above
        marginLeft: `-${theme.spacing(0.5)}px`
    },

    tag: {
        color: theme.palette.primary.light
    }
}));

const PostTags: IPostTags = ({ post: { tags } }) => {
    const classes = useStyles()

    if (tags.length === 0) {
        return null
    }

    const renderSingleTag = (tag: string) => {
        // In case you're wondering why use color='primary' when already using that in className,
        // this is why: classes.tag only overrides the text color but the border will remain default
        // If you don't provide color in the component itself, the text will be fine 
        // but the border will default to grey which doesn't look pretty :D
        return (
            <Chip
                className={classes.tag}
                size='small'
                variant='outlined'
                color='primary'
                label={tag}
            />
        )
    }

    return (
        <div className={classes.root}>
            {tags.map(renderSingleTag)}
        </div>
    )
}

export default PostTags
