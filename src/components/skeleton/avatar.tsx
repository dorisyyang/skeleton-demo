import Skeleton, { SkeletonProps } from './index'
import React from 'react';

const SkeletonAvatar: React.FC<Omit<SkeletonProps, 'circle'>> = (props) => {
    const {
        width = 60,
        height = 60,
        ...rest
    } = props;
    return (
        <Skeleton  circle={true} width={width} height={height}  {...rest}/>
    )
}

export default SkeletonAvatar
