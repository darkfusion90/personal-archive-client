import { SubmitHandler } from "redux-form";
import { IFormState } from "../../../../hooks/useForm";

export type IRegisterResult = 'success' | 'failure' | undefined

export interface IRegisterPageViewProps {
    formId: string
    onFormSubmit: SubmitHandler
    loggedIn: boolean
}

export type IRegisterPageView = React.ComponentType<
    IRegisterPageViewProps & IFormState
>