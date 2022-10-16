import React, { ReactNode } from "react";
import { SkeletonProps } from '@/components/skeleton'
import SkeletonListItem from './skeleton-list-item'
export interface SkeletonListProps{
    count?: number,
    loading: boolean,
    itemProps?: Partial<Record<'Image' | 'Avatar' | 'Info', Pick<SkeletonProps, 'width' | 'height' | 'widthMultiple' | 'heightMultiple'>>>,
    children:React.ReactNode,
}
const SkeletonList: React.FC<SkeletonListProps> = ({
    count = 1,
    loading,
    children,
    itemProps
}) => {
    return (
        <>
            {
                loading ? 
                Array.from({length: count}).map((item, index) => 
                    <SkeletonListItem key={index} {...itemProps}/>
                ) :
                children
            }
        </>
    )
}

export default SkeletonList