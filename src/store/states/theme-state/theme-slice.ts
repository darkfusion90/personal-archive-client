import { createSlice, SliceCaseReducers, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "./ThemeState";
import { getTheme as getStoredTheme } from "../../../theme";

const initialState: ThemeState = {
    activeTheme: getStoredTheme() || 'dark'
}

const themeSlice = createSlice<ThemeState, SliceCaseReducers<ThemeState>>({
    name: 'theme-state',
    initialState,
    reducers: {
        setActiveTheme: (_, action: PayloadAction<ThemeState['activeTheme']>) => ({
            activeTheme: action.payload
        })
    }
})

export const themeReducer = themeSlice.reducer

export const { setActiveTheme } = themeSlice.actions