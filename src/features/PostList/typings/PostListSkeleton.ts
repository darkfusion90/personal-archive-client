export interface IPostListSkeletonProps {
    skeletons?: number
    itemClassName?: string
    subheader?: React.ReactNode
}

export type IPostListSkeleton = React.ComponentType<IPostListSkeletonProps>