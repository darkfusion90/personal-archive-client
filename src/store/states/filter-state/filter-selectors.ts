import { Selector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import FilterState from "./FilterState";

export const selectFilterState: Selector<RootState, FilterState> = (state) => state.filter