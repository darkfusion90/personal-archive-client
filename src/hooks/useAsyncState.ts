import { useState } from "react"

export interface IAsyncState<Meta, Error> {
    status: GenericAsyncState
    meta?: Meta
    error?: Error
}

export interface IAsyncStateActions<Meta, Error> {
    setUninitiated: VoidCallback
    setLoading: VoidCallback
    setSuccess: ValueCallback<Meta>
    setFailure: ValueCallback<Error>
}

type IUseAsyncStateHook<M, E> = Hook<IAsyncState<M, E>, IAsyncStateActions<M, E>>

const useAsyncState = <M = void, E = any>(): IUseAsyncStateHook<M, E> => {
    const [state, setState] = useState<IAsyncState<M, E>>({ status: 'uninitiated' })

    return [
        state, {
            setUninitiated: () => setState({status: 'uninitiated', error: undefined, meta: undefined}),
            setLoading: () => setState({ status: 'loading', error: undefined, meta: undefined }),
            setSuccess: (meta) => setState({ status: 'success', meta, error: undefined }),
            setFailure: (error) => setState({ status: 'fail', error, meta: undefined })
        }
    ]
}

export default useAsyncState