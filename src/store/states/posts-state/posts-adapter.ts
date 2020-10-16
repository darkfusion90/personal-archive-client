import { createEntityAdapter } from "@reduxjs/toolkit";
import PostModel from "../../models/PostModel";

const postsAdapter = createEntityAdapter<PostModel>()

export default postsAdapter