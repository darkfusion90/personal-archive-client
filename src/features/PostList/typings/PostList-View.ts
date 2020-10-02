import PostModel from "../../../store/models/PostModel";

export interface IPostListViewProps {
    posts: PostModel[]
    onUpdatePosts: VoidCallback
}

export type IPostListView = React.ComponentType<IPostListViewProps>
