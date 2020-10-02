import { createAsyncThunk } from "@reduxjs/toolkit";
import { posts } from "../../../../api";
import PostModel from "../../../models/PostModel";

const getAllPostsAsync = createAsyncThunk<PostModel[]>('getAllPostsAsync', () => {
    return posts.getPosts()
})

export default getAllPostsAsync