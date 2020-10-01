interface LoginData {
    username: string
    password: string
}

type Hook<S, A> = [S, A]
type HookWithMeta<S, A, M = any> = [S, A, M]

type GenericAsyncState = 'uninitiated' | 'loading' | 'fail' | 'success'

type ValueCallback<T, R = any> = (value: T) => R
type VoidCallback<R = any> = ValueCallback<void, R>

type SimplifiedAxiosResponse = {
    status: number
    statusText: string
    data: any
}