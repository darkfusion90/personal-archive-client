interface LoginData {
    username: string
    password: string
}

type RegisterData = LoginData & {
    email: string
}

type Hook<S, A> = [S, A]
type HookWithMeta<S, A, M = any> = [S, A, M]

type GenericAsyncState = 'uninitiated' | 'loading' | 'fail' | 'success'

type ValueCallback<T, R = any> = (value: T) => R
type VoidCallback<R = any> = () => R

type SimplifiedAxiosResponse = {
    status: number
    statusText: string
    data: any
}

interface SharedDefaultProps {
    className?: string
}

declare module 'autosuggest-highlight/parse' {
    type IParsed = {
        text: string,
        highlight: boolean
    }

    type IParse = (text: string, matches: [] | number[][]) => IParsed[]

    const parse: IParse;
    export default parse
}