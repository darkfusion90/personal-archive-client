export type ILoginResult = 'success' | 'failure' | undefined

export interface ILoginPortalViewProps {
    isLoggingIn: boolean
    formId: string
    onFormSubmit: React.FormEventHandler
    loginError?: any
    loginResult?: ILoginResult
}

export type ILoginPortalView = React.FC<ILoginPortalViewProps>