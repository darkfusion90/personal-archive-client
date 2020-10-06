import { IFormState } from "../../../../hooks/useForm";
import PostModel from "../../../../store/models/PostModel";

export interface ICreatePostViewProps {
    onFormSubmit: React.FormEventHandler
    formId: string
}

export type ICreatePostView = React.ComponentType<
    ICreatePostViewProps & IFormState<PostModel>
>