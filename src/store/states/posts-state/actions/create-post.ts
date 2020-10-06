import { createAsyncThunk } from "@reduxjs/toolkit";
import { posts } from "../../../../api";
import PostModel from "../../../models/PostModel";

const createPostAsync = createAsyncThunk<PostModel | null, posts.ICreatePostData>(
    'createPostAsync',
    posts.createPost
)

export default createPostAsync