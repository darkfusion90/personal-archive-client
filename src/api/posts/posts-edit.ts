import PostModel, { postFromJson } from "../../store/models/PostModel"
import axios from "../axios"
import { IPostData } from "./shared"

export const editPost = async (id: string, postData: IPostData): Promise<PostModel | null> => {
    const { data } = await axios.put(`/api/posts/${id}`, postData)

    return postFromJson(data)
}