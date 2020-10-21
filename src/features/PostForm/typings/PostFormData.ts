import { IPostTag } from "../../../components/SelectPostTags";

export interface IPostFormData {
    title: string
    comment?: string
    link?: string
    tags?: IPostTag[]
}