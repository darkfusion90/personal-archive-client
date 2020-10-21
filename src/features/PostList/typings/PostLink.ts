import PostModel from "../../../store/models/PostModel";

export interface IPostLinkProps {
    post: PostModel
}

export type IPostLink = React.ComponentType<IPostLinkProps>