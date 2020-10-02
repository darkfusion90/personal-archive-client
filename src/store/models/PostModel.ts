// Add createdAt in server
interface PostModel {
    id: string
    title: string
    userId: string
    link?: string
    comment?: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
}

export const postFromJson = (json: any): PostModel | null => {
    if (!json) {
        return null
    }

    return {
        id: json['_id'],
        title: json['title'],
        userId: json['userId'],
        link: json['link'],
        comment: json['comment'],
        tags: json['tags'],
        createdAt: new Date(json['createdAt']),
        updatedAt: new Date(json['updatedAt'])
    }
}

export default PostModel