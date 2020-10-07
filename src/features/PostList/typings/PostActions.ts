import PostModel from "../../../store/models/PostModel";

export interface IPostActionsProps {
    post: PostModel
}

export type IPostActions = React.ComponentType<IPostActionsProps>