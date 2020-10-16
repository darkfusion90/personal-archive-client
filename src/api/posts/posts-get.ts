import axios from "../axios";
import PostModel, { postFromJson } from "../../store/models/PostModel";

export interface IGetPostsOpts {
    query?: string
    tags?: string
    sort?: string
    order?: string
}

function buildQuery({
    query: searchQuery,
    tags,
    sort,
    order
}: IGetPostsOpts) {
    const reqQuery: any = {}
    if (searchQuery) {
        reqQuery.query = searchQuery
    }

    if (sort) {
        reqQuery.sort = sort
    }

    if (order) {
        reqQuery.order = order
    }

    if (tags) {
        reqQuery.tags = tags
    }

    return Object.keys(reqQuery).map(key => `${key}=${reqQuery[key]}`).join('&')
}

export const getPosts = async (opts: IGetPostsOpts = {}): Promise<PostModel[]> => {
    const { data: responseData } = await axios.get(`/api/posts?${buildQuery(opts)}`)

    return responseData.posts.map(postFromJson)
}

export const getPostById = async (postId: string): Promise<PostModel | null> => {
    const { data } = await axios.get(`/api/posts/${postId}`)

    return postFromJson(data)
}