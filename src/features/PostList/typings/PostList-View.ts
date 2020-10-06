import PostModel from "../../../store/models/PostModel";

export interface IPostListViewProps {
    posts: PostModel[]
    onUpdatePosts: VoidCallback
    highlightPost?: string
}

export type IPostListView = React.ComponentType<IPostListViewProps>
