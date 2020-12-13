export default function unwrapAxiosError(actionToMatch: any) {
    return (result: any) => {
        // If not an async thunk, return the action
        if (!actionToMatch.fulfilled) {
            return result
        }

        if (actionToMatch.fulfilled.match(result)) {
            return result.payload
        } else if (actionToMatch.rejected.match(result)) {
            throw result.payload
        } else {
            return result
        }
    }
}