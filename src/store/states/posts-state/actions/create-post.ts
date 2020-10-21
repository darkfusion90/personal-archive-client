import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPost, IPostData } from "../../../../api/posts";
import PostModel from "../../../models/PostModel";

const createPostAsync = createAsyncThunk<PostModel | null, IPostData>(
    'createPostAsync',
    createPost
)

export default createPostAsync