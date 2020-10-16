import React from 'react'
import { IPostComment } from '../typings/PostComment'

import useFilter from '../../../hooks/useFilter'
import HighlightTypography from '../../../components/HighlightTypography'

const PostComment: IPostComment = ({ post: { comment } }) => {
    const [{ query }] = useFilter()

    return (
        <HighlightTypography
            paragraph
            text={comment}
            query={query}
        />
    )
}

export default PostComment
