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

const PostListItem: IPostListItem = ({ post }) => {
    const classes = useStyles()
    console.log(post ? 'Will use skeleton' : 'Will use actual posts')

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
        <ListItem className={classes.root} {...linkProps}>
            <ListItemText
                primary={<PostTitle />}
                secondary={<PostSubtitle />}
                secondaryTypographyProps={{ component: 'div' }}
            />
        </ListItem>
    )
}

export default PostListItem
