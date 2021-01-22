import { SubmitHandler } from "redux-form";
import { IEditAccountFormData } from "./EditAccountForm-Connector";
import { IFormState } from "../../../hooks/useForm";

export interface IEditAccountFormViewProps {
    formState: IFormState
    toEdit: 'username' | 'email'
    formId: string,
    onFormSubmit: SubmitHandler<IEditAccountFormData>
}

export type IEditAccountFormView = React.ComponentType<IEditAccountFormViewProps>