export type ILoginResult = 'success' | 'failure' | undefined

export interface ILoginPageViewProps {
    loggedIn: boolean
    isLoggingIn: boolean
    formId: string
    onFormSubmit: React.FormEventHandler
    loginError?: any
    loginResult?: ILoginResult
}

export type ILoginPageView = React.FC<ILoginPageViewProps>