import { Selector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import AccountState from "./AccountState";
import AccountModel from "../../models/AccountModel";

export const accountStateSelector: Selector<RootState, AccountState> = (state) => state.account

export const accountSelector: Selector<RootState, AccountModel> = (state) => accountStateSelector(state).account
