import PostModel from "../../../../store/models/PostModel";
import { IAsyncState } from "../../../../hooks/useAsyncState";

export interface IEditPostPageCommonProps {
    postFetchStatus: IAsyncState<PostModel | undefined, any>
}