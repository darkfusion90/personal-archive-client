import { createAsyncThunk } from "@reduxjs/toolkit";
import { posts } from "../../../../api";
import PostModel from "../../../models/PostModel";
import { selectFilterState } from "../../filter-state/filter-selectors";
import { RootState } from "../../../store";
import FilterState from "../../filter-state/FilterState";

const getAllPostsAsync = createAsyncThunk<
    PostModel[],
    FilterState | undefined,
    { state: RootState }
>('getAllPostsAsync', (filterState, { getState }) => {
    const filter = filterState || selectFilterState(getState())
    const { query, sort, order, tags } = filter

    return posts.getPosts({
        query,
        sort,
        order,
        tags: (tags || []).map(tag => tag).join(',')
    })
})

export default getAllPostsAsync