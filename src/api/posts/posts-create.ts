import PostModel, { postFromJson } from "../../store/models/PostModel"
import axios from "../axios"
import { IPostData } from "./shared"

export const createPost = async (postData: IPostData): Promise<PostModel | null> => {
    const { data } = await axios.post(`/api/posts/`, postData)

    return postFromJson(data)
}