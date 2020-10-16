import postsAdapter from "./posts-adapter";
import { RootState } from "../../store";

const selectors = postsAdapter.getSelectors<RootState>(state => state.posts)

export const { selectAll, selectById, selectTotal } = selectors
