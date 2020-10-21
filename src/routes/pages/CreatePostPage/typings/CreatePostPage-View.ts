import { IFormState } from "../../../../hooks/useForm";
import PostModel from "../../../../store/models/PostModel";
import { IPostFormSubmitHandler } from "../../../../features/PostForm";

export interface ICreatePostViewProps {
    onFormSubmit: IPostFormSubmitHandler
    formId: string
}

export type ICreatePostView = React.ComponentType<
    ICreatePostViewProps & IFormState<PostModel>
>