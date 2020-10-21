import PostModel from "../../../store/models/PostModel";
import { IFormState } from "../../../hooks/useForm";
import { SubmitHandler } from "redux-form";
import { IPostFormData } from "./PostFormData";

export type IPostFormSubmitHandler<P = {}> = SubmitHandler<IPostFormData, P>

export interface IPostFormViewProps<P = {}> {
    onFormSubmit: IPostFormSubmitHandler<P>
    formId: string
    formActionText: string
    header: string
}

export type IPostFormView<P = {}> = React.ComponentType<
    IPostFormViewProps<P> & IFormState<PostModel>
>