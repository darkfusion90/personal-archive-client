import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostData, editPost } from "../../../../api/posts";

const editPostAsync = createAsyncThunk<void, IPostData & { id: string }>(
    'editPostAsync',
    async ({ id, ...post }) => {
        try {
            await editPost(id, post)
        } catch (err) {
            return Promise.reject(err)
        }
    }
)

export default editPostAsync