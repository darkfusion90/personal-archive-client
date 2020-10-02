import axios from "../axios";
import PostModel, { postFromJson } from "../../store/models/PostModel";

const url = (postId: string = '') => `/api/posts/${postId}`

export const getPosts = async (): Promise<PostModel[]> => {
    const { data: responseData } = await axios.get(url())

    return responseData.posts.map(postFromJson)
}

export const getPostById = async (postId: string): Promise<PostModel | null> => {
    const { data } = await axios.get(url(postId))

    return postFromJson(data)
}