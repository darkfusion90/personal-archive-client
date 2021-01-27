import { IFormState } from "../../../../hooks/useForm";
import { SubmitHandler } from "redux-form";
import { IPasswordResetFormData } from "./PasswordResetFormData";

export interface IPasswordResetFormViewProps {
    formState: IFormState
    formId: string
    onFormSubmit: SubmitHandler<IPasswordResetFormData>
}

export type IPasswordResetFormView = React.ComponentType<IPasswordResetFormViewProps>