import { Middleware, ThunkDispatch, AnyAction } from "@reduxjs/toolkit";

import { setFilter, resetFilter } from "../../filter-state/filter-slice";
import { getAllPostsAsync } from "../actions";
import { initialState as initialFilterState } from "../../filter-state/FilterState";

type Dispatch = ThunkDispatch<any, {}, AnyAction>
const onFilterChange: Middleware<{}, any, Dispatch> = ({
    dispatch
}) => (next) => (action) => {
    if (setFilter.match(action)) {
        dispatch(getAllPostsAsync(action.payload))
    }

    if (resetFilter.match(action)) {
        dispatch(getAllPostsAsync(initialFilterState))
    }

    next(action)
}

export default onFilterChange
