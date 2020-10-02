import PostModel from "../../../store/models/PostModel";

export interface IPostMetaProps {
    post: PostModel
}

export type IPostMeta = React.ComponentType<IPostMetaProps>