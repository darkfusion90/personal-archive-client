import React from 'react'
import { IPostListItem } from '../typings/PostListItem'
import {
    ListItem,
    ListItemText,
    makeStyles,
    createStyles,
    Typography,
} from '@material-ui/core'

import MaterialSkeleton, { SkeletonProps } from '@material-ui/lab/Skeleton'

import PostMeta from './PostMeta'
import PostComment from './PostComment'
import constants from '../constants'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        margin: `${theme.spacing(constants.itemThemeSpacingUnit)}px auto`
    },
    title: {
        fontWeight: theme.typography.fontWeightBold
    }
}))

const Skeleton: React.FC<SkeletonProps> = (props) => {
    return <MaterialSkeleton {...props} animation='wave' />
}

const PostListItem: IPostListItem = ({ post, autoFocus }) => {
    const classes = useStyles()
    const [hasHighlighted, setHasHighlighted] = React.useState(false)

    React.useEffect(() => {
        if (autoFocus && !hasHighlighted) {
            setTimeout(() => {
                setHasHighlighted(true)
            }, 3000);
        }
    }, [autoFocus, hasHighlighted, setHasHighlighted])

    autoFocus && console.log('I will be focused!: ', post)

    const LineSkeleton = <Skeleton />

    const PostTitle = () => {
        return (
            <Typography className={classes.title} variant='h5'>
                {post ? post.title : LineSkeleton}
            </Typography>
        )
    }

    const PostSubtitle = () => {
        return (
            <>
                {post ?
                    <PostComment post={post} /> :
                    <Skeleton variant='rect' height={64} />
                }
                {post ? <PostMeta post={post} /> : LineSkeleton}
            </>
        )
    }

    const linkProps = post ? {
        component: 'a',
        button: true,
        href: post.link || '#',
        target: '_blank'
    } : {}


    return (
        // @ts-ignore
        <ListItem
            className={classes.root}
            autoFocus={autoFocus}
            selected={autoFocus && !hasHighlighted}
            {...linkProps}
        >
            <ListItemText
                primary={<PostTitle />}
                secondary={<PostSubtitle />}
                secondaryTypographyProps={{ component: 'div' }}
            />
        </ListItem>
    )
}

export default PostListItem
