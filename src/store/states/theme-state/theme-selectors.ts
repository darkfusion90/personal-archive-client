import { RootState } from "../../store";
import { Selector, createSelector } from "@reduxjs/toolkit";
import ThemeState from ".";

export const selectThemeState: Selector<RootState, ThemeState> = (state) => state.theme

export const selectActiveTheme: Selector<
    RootState,
    ThemeState['activeTheme']
> = createSelector<RootState, ThemeState, ThemeState['activeTheme']>(
    selectThemeState,
    (themeState) => themeState.activeTheme
)