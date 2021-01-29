import React from 'react'

import Skeleton, { SkeletonProps } from '@material-ui/lab/Skeleton'
import { IPostListSkeleton } from '../typings/PostListSkeleton'
import { List, ListItem, ListItemText } from '@material-ui/core'

const WaveSkeleton: React.FC<SkeletonProps> = (props) =>
    <Skeleton animation='wave' {...props} />

const PostListSkeleton: IPostListSkeleton = ({
    skeletons = 10,
    itemClassName = '',
    subheader
}) => {
    const renderSkeleton = (_: any, index: number) => {
        return (
            <ListItem key={index} className={itemClassName}>
                <ListItemText
                    primary={<WaveSkeleton />}
                    secondary={
                        <>
                            <WaveSkeleton variant='rect' height={64} />
                            <WaveSkeleton />
                        </>
                    }
                />
            </ListItem>
        )
    }

    return (
        <List>
            {subheader}
            {Array(skeletons).fill(null).map(renderSkeleton)}
        </List>
    )
}

export default PostListSkeleton
