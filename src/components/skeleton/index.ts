import OriginSkeleton from './skeleton'
import SkeletonAvatar from './avatar'
import SkeletonImage from './image'

type SkeletonType = typeof OriginSkeleton & {
    Avatar: typeof SkeletonAvatar,
    Image: typeof SkeletonImage
}

const Skeleton = OriginSkeleton as SkeletonType
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Image = SkeletonImage;

export default Skeleton
export * from './skeletonContext'
export * from './types'