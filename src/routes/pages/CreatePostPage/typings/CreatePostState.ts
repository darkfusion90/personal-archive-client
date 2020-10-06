import PostModel from "../../../../store/models/PostModel";

export interface ICreatePostState {
    post?: PostModel
    error?: any
    status: GenericAsyncState
}