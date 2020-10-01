import { ThunkDispatch, Middleware } from "@reduxjs/toolkit";

export type ThunkMiddleware = Middleware<any, any, ThunkDispatch<any, any, any>>