import PostModel from "../../../store/models/PostModel";

export interface IPostSubtitleProps {
    post: PostModel
}

export type IPostSubtitle = React.ComponentType<IPostSubtitleProps>