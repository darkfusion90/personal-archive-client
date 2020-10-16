import { Middleware, ThunkDispatch, AnyAction } from "@reduxjs/toolkit";

import { setFilter } from "../../filter-state/filter-slice";
import { getAllPostsAsync } from "../actions";

type Dispatch = ThunkDispatch<any, {}, AnyAction>
const onFilterChange: Middleware<{}, any, Dispatch> = ({
    dispatch
}) => (next) => (action) => {
    if (setFilter.match(action)) {
        dispatch(getAllPostsAsync(action.payload))
    }

    next(action)
}
export default onFilterChange
