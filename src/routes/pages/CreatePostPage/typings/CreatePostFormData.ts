export interface IPostTag {
    value: string
    label: string
}

export interface ICreatePostFormData{
    title: string
    comment?: string
    link?: string
    tags?: IPostTag[]
}