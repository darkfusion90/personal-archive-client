import PostModel from "../../../store/models/PostModel";

export interface IPostListItemProps {
    post?: PostModel
}

export type IPostListItem = React.ComponentType<IPostListItemProps>