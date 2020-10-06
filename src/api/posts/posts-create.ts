import PostModel, { postFromJson } from "../../store/models/PostModel"
import axios from "../axios"

export interface ICreatePostData {
    title: string
    comment?: string
    link?: string
    tags?: string[]
}

export const createPost = async (postData: ICreatePostData): Promise<PostModel | null> => {
    const { data } = await axios.post(`/api/posts/`, postData)

    return postFromJson(data)
}