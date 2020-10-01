import { AsyncThunk } from "@reduxjs/toolkit";

const asyncMatchFulfilled = (asyncAction: AsyncThunk<any, any, any>, action: any) =>
    asyncAction.fulfilled.match(action)

export default asyncMatchFulfilled