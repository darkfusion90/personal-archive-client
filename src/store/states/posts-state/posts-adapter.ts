import { createEntityAdapter } from "@reduxjs/toolkit";
import PostModel from "../../models/PostModel";

const postsAdapter = createEntityAdapter<PostModel>({
    sortComparer: (a, b) => a.title.localeCompare(b.title)
})

export default postsAdapter