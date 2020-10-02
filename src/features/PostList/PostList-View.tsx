import React from 'react'

import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { IPostListView } from './typings/PostList-View'
import AddPostFab from './components/AddPostFab'
import PostModel from '../../store/models/PostModel'
import PostListItem from './components/PostListItem'
import constants from './constants'
import { ListSubheader } from '@material-ui/core'

const useStyles = makeStyles((theme) => createStyles({
    listRoot: {
        marginBottom: `-${theme.spacing(constants.itemThemeSpacingUnit / 1.5)}px`
    }
}))

const PostListView: IPostListView = ({ posts }) => {
    const classes = useStyles()

    const renderItem = (post: PostModel) => <PostListItem post={post} />

    return (
        <>
            <AddPostFab />
            <Container maxWidth='md'>
                <List>
                    <ListSubheader disableSticky className={classes.listRoot}>
                        POSTS
                    </ListSubheader>
                    {posts.map(renderItem)}
                </List>
            </Container>
        </>
    )
}

export default PostListView
