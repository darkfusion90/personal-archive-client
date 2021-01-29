import PostModel from "../../../store/models/PostModel";
import FilterState from "../../../store/states/filter-state/FilterState";

export interface IPostListViewProps {
    posts: PostModel[]
    onUpdatePosts: VoidCallback
    isLoading: boolean
    error?: any
    highlightPost?: string
    filter: FilterState
}

export type IPostListView = React.ComponentType<IPostListViewProps>
