import PostModel from "../../../store/models/PostModel";

export interface IPostListItemProps extends SharedDefaultProps {
    post: PostModel
    autoFocus?: boolean
}

export type IPostListItem = React.ComponentType<IPostListItemProps>