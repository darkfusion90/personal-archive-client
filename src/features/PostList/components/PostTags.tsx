import React from 'react'
import { IPostTags } from '../typings/PostTags'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'

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
        color: theme.palette.primary.light,
    }
}))

const kMaxVisibleTags = 5

const PostTags: IPostTags = ({ post: { tags } }) => {
    const classes = useStyles()

    if (tags.length === 0) {
        return null
    }

    const remainingTagsCount = tags.length - kMaxVisibleTags

    const renderSingleTag = (tag: string) => {
        // In case you're wondering why use color='primary' when already using that in className,
        // this is why: classes.tag only overrides the text color but the border will remain default
        // If you don't provide color in the component itself, the text will be fine 
        // but the border will default to grey which doesn't look pretty :D
        return (
            <Chip
                clickable
                key={tag}
                className={classes.tag}
                size='small'
                variant='outlined'
                color='primary'
                label={tag}
                component='a'
                target='_blank'
            />
        )
    }

    return (
        <div className={classes.root}>
            {tags.slice(0, Math.min(kMaxVisibleTags, tags.length)).map(renderSingleTag)}
            {
                remainingTagsCount > 0 ?
                    <Typography>
                        + {remainingTagsCount} tags
                    </Typography> :
                    null
            }
        </div>
    )
}

export default PostTags
