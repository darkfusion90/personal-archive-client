import { useState } from "react"

export interface IAsyncState<Meta, Error> {
    status: GenericAsyncState
    meta?: Meta
    error?: Error
}

export interface IAsyncStateActions<Meta, Error> {
    setLoading: VoidCallback
    setSuccess: ValueCallback<Meta>
    setFailure: ValueCallback<Error>
}

type IUseAsyncStateHook<M, E> = Hook<IAsyncState<M, E>, IAsyncStateActions<M, E>>

const useAsyncState = <M = void, E = any>(): IUseAsyncStateHook<M, E> => {
    const [state, setState] = useState<IAsyncState<M, E>>({ status: 'uninitiated' })

    return [
        state, {
            setLoading: () => setState({ status: 'loading', error: undefined, meta: undefined }),
            setSuccess: (meta) => setState({ status: 'success', meta, error: undefined }),
            setFailure: (error) => setState({ status: 'fail', error, meta: undefined })
        }
    ]
}

export default useAsyncState