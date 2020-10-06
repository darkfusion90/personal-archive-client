import PostModel from "../../../store/models/PostModel";

export interface IPostTitleProps {
    post: PostModel
}

export type IPostTitle = React.ComponentType<IPostTitleProps>