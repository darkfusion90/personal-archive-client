import React from 'react'
import { IPostTitle } from '../typings/PostTitle'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import HighlightTypography from '../../../components/HighlightTypography'
import useFilter from '../../../hooks/useFilter'

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

const kMaxTitleLength = 50

const PostTitle: IPostTitle = ({ post: { title: postTitle, link } }) => {
    const classes = useStyles()
    const [{ query }] = useFilter()

    const trimmedTitle = postTitle.trim()
    const titleLength = trimmedTitle.length
    const strippedTitle = trimmedTitle.substring(0, kMaxTitleLength)
    const ellipsis = titleLength > kMaxTitleLength ? '...' : ''
    const displayTitle = `${strippedTitle}${ellipsis}`

    return (
        <HighlightTypography
            className={classes.root}
            variant='h5'
            // @ts-ignore
            component='a'
            href={link || '#'}
            target='_blank'
            text={displayTitle}
            query={query}
        />
    )
}

export default PostTitle
