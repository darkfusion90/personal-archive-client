import { AsyncThunk } from "@reduxjs/toolkit";

export default function unwrapAxiosError(actionToMatch: AsyncThunk<any, any, any>) {
    return (resultAction: any) => {
        if (actionToMatch.fulfilled.match(resultAction)) {
            return resultAction.payload
        } else if (actionToMatch.rejected.match(resultAction)) {
            throw resultAction.payload
        } else {
            return resultAction
        }
    }
}