import { SubmitHandler } from "redux-form";
import { IPostFilterFormData } from "./PostFilterForm-Connector";

export interface IPostFilterFormViewProps {
    formId: string,
    onFormSubmit: SubmitHandler<IPostFilterFormData>
}

export type IPostFilterFormView = React.ComponentType<IPostFilterFormViewProps>