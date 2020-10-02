import PostModel from "../../../store/models/PostModel";

export interface IPostCommentProps {
    post: PostModel
}

export type IPostComment = React.ComponentType<IPostCommentProps>