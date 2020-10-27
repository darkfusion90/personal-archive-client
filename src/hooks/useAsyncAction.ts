import useAsyncState, { IAsyncState } from "./useAsyncState"
import unwrapAxiosError from "../utils/unwrap-axios-thunk-result"

type Callback<T> = VoidCallback | ValueCallback<T>

interface IUseAsyncActionOperations<T> {
    performAction: Callback<T>
}

interface IUseAsyncActionOpts<T> {
    action: any
}

type IUseAsyncActionHook<T> = Hook<IAsyncState<T, any>, IUseAsyncActionOperations<T>>

const useAsyncAction = <T = void>({ action }: IUseAsyncActionOpts<T>): IUseAsyncActionHook<T> => {
    const [actionState, { setLoading, setFailure, setSuccess }] = useAsyncState<T, any>()

    const performAction: Callback<T> = (arg) => {
        setLoading()
        action(arg)
            .then(unwrapAxiosError(action))
            .then((res: any) => setSuccess(res))
            .catch((err: any) => setFailure(err))
    }

    return [actionState, { performAction }]
}

export default useAsyncAction