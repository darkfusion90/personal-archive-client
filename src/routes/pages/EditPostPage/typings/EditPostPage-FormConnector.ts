import { InjectedFormProps } from "redux-form";
import { IPostFormData } from "../../../../features/PostForm";
import { IEditPostPageCommonProps } from "./EditPostPage-CommonProps";

export type IPostFormConnectorOwnProps = IEditPostPageCommonProps & { postId: string }

export type IPostFormConnectorProps = IPostFormConnectorOwnProps &
    InjectedFormProps<IPostFormData, IPostFormConnectorOwnProps>

export type IPostFormConnector = React.ComponentType<IPostFormConnectorProps>