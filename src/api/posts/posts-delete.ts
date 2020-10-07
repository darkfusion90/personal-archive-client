import axios from "../axios"

export const deletePost = async (postId: string) => axios.delete(`/api/posts/${postId}`)