import PostModel from "../../../store/models/PostModel";

export interface IPostListItemProps {
    post?: PostModel
    autoFocus?: boolean
}

export type IPostListItem = React.ComponentType<IPostListItemProps>