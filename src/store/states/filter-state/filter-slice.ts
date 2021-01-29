import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import FilterState, { initialState } from "./FilterState";

const filterSlice = createSlice<FilterState, SliceCaseReducers<FilterState>>({
    name: 'post-filters',
    initialState,
    reducers: {
        setFilter: (_, action) => action.payload,
        resetFilter: () => initialState
    }
})

export const { setFilter, resetFilter } = filterSlice.actions
export const { reducer, actions } = filterSlice