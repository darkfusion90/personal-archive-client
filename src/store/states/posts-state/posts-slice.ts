import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import PostsState from "./PostsState";
import postsAdapter from "./posts-adapter";
import { getAllPostsAsync } from './actions'

const postsSlice = createSlice<PostsState, SliceCaseReducers<PostsState>>({
    name: 'posts-slice',
    initialState: postsAdapter.getInitialState(),
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllPostsAsync.fulfilled, postsAdapter.addMany)
    }
})

export const reducer = postsSlice.reducer