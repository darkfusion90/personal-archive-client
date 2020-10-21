import { IPostTag } from '../../../../components/SelectPostTags'



export interface ICreatePostFormData {
    title: string
    comment?: string
    link?: string
    tags?: IPostTag[]
}