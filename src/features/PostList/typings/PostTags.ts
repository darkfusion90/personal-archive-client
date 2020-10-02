import PostModel from "../../../store/models/PostModel";

export interface IPostTagsProps {
    post: PostModel
}

export type IPostTags = React.ComponentType<IPostTagsProps>