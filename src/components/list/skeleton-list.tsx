import React, { ReactNode } from "react";
import SkeletonListItem from './skeleton-list-item'
export interface SkeletonListProps {
    count?: number,
    loading: boolean
    children:React.ReactNode
}
const SkeletonList: React.FC<SkeletonListProps> = ({
    count = 1,
    loading,
    children
}) => {
    return (
        <>
            {
                loading ? 
                Array.from({length: count}).map((item, index) => 
                    <SkeletonListItem key={index}/>
                ) :
                children
            }
        </>
    )
}

export default SkeletonList