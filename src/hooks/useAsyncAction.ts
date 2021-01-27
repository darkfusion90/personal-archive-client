import useAsyncState, { IAsyncState, IAsyncStateActions } from "./useAsyncState"
import unwrapAxiosError from "../utils/unwrap-axios-thunk-result"

type Callback<T> = VoidCallback | ValueCallback<T>

interface IUseAsyncActionOperations<T> {
    performAction: Callback<T>
    asyncActions: IAsyncStateActions<T, any>
}

interface IUseAsyncActionOpts<T> {
    action: any
}

type IUseAsyncActionHook<T> = Hook<IAsyncState<T, any>, IUseAsyncActionOperations<T>>

const useAsyncAction = <T = void>({ action }: IUseAsyncActionOpts<T>): IUseAsyncActionHook<T> => {
    const [actionState, asyncActions] = useAsyncState<T, any>()

    const performAction: Callback<T> = (arg) => {
        asyncActions.setLoading()
        action(arg)
            .then(unwrapAxiosError(action))
            .then((res: any) => asyncActions.setSuccess(res))
            .catch((err: any) => asyncActions.setFailure(err))
    }

    return [actionState, { asyncActions, performAction }]
}

export default useAsyncAction