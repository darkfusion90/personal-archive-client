import React from 'react'

import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import PostListItem from './components/PostListItem'
import AddPostFab from './components/AddPostFab'
import PostListSkeleton from './components/PostList-Skeleton'
import NoPostsView from './components/NoPostsView'

import PostModel from '../../store/models/PostModel'
import { IPostListView } from './typings/PostList-View'
import constants from './constants'


const useStyles = makeStyles((theme) => createStyles({
    root: {
        margin: `${theme.spacing(4)}px auto`
    },
    listRoot: {
        marginBottom: `-${theme.spacing(constants.itemThemeSpacingUnit / 1.5)}px`
    },
    item: {
        margin: `${theme.spacing(constants.itemThemeSpacingUnit)}px auto`
    },
}))

const PostListView: IPostListView = ({
    posts,
    highlightPost,
    isLoading
}) => {
    const classes = useStyles()

    const subheader = (
        <ListSubheader disableSticky className={classes.listRoot}>
            POSTS
        </ListSubheader>
    )

    const renderPosts = () => {
        if(posts.length === 0){
            return <NoPostsView />
        }
        
        return (
            <List>
                {subheader}
                {posts.map((post: PostModel) =>
                    <PostListItem
                        className={classes.item}
                        post={post}
                        key={post.id}
                        autoFocus={post.id === highlightPost}
                    />
                )}
            </List>
        )
    }

    return (
        <>
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
