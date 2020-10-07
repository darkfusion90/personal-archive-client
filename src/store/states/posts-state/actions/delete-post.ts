import { createAsyncThunk } from "@reduxjs/toolkit";
import { posts } from "../../../../api";

const deletePostAsync = createAsyncThunk<string, string>(
    'deletePostAsync',
    async (postId) => {
        try {
            await posts.deletePost(postId)
            return postId
        } catch (err) {
            return Promise.reject(err)
        }
    }
)

export default deletePostAsync