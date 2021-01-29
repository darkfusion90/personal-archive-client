import React from 'react'
import { Helmet } from 'react-helmet'

import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import PostListItem from './components/PostListItem'
import AddPostFab from './components/AddPostFab'
import PostListSkeleton from './components/PostList-Skeleton'
import NoPostsView from './components/NoPostsView'
import PostListFilter from './components/PostListFilter'

import PostModel from '../../store/models/PostModel'
import { IPostListView } from './typings/PostList-View'
import constants from './constants'


const useStyles = makeStyles((theme) => createStyles({
    root: {
        margin: `${theme.spacing(4)}px auto`
    },
    listSubheader: {
        marginBottom: `-${theme.spacing(constants.itemThemeSpacingUnit / 1.5)}px`,
        display: 'flex',
        alignItems: 'baseline'
    },
    subheaderMainTitle: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        flexGrow: 1
    },
    item: {
        margin: `${theme.spacing(constants.itemThemeSpacingUnit)}px auto`
    },
}))

const PostListView: IPostListView = ({
    posts,
    highlightPost,
    isLoading,
    filter: { query: searchQuery, tags: filterTags },
}) => {
    const classes = useStyles()

    const subheader = (
        <ListSubheader disableSticky className={classes.listSubheader}>
            <Typography className={classes.subheaderMainTitle}>
                POSTS
            </Typography>
            <PostListFilter />
        </ListSubheader>
    )

    const renderPosts = () => {
        if (posts.length === 0 && typeof searchQuery === 'undefined') {
            return <NoPostsView />
        }

        const filterDesc = []
        if (!(searchQuery === "")) {
            filterDesc.push(` query '${searchQuery}'`)
        }
        if (filterTags.length > 0) {
            filterDesc.push(`${filterTags.length} selected tag(s)`)
        }

        const noMatchingPosts = (
            <ListItem className={classes.item}>
                <ListItemText primaryTypographyProps={{ align: 'center' }}>
                    No posts matching the{' '}
                    {filterDesc.join(' and ')}
                </ListItemText>
            </ListItem>
        )

        const postListBody = posts.map((post: PostModel) =>
            <PostListItem
                className={classes.item}
                post={post}
                key={post.id}
                autoFocus={post.id === highlightPost}
            />
        )
        return (
            <List>
                {subheader}
                {
                    posts.length === 0 ?
                        noMatchingPosts :
                        postListBody
                }
            </List>
        )
    }

    return (
        <>
            <Helmet>
                <title>Posts</title>
            </Helmet>
            <AddPostFab />
            <Container maxWidth='md' className={classes.root}>
                {
                    isLoading ?
                        <PostListSkeleton
                            itemClassName={classes.item}
                            subheader={subheader}
                        /> :
                        renderPosts()
                }
            </Container>
        </>
    )
}

export default PostListView
