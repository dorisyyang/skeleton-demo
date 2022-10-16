import React from "react";
import Skeleton from '@/components/skeleton'
import { SkeletonListProps } from './skeleton-list'
import styles from './skeleton-list-item.module.scss'

const SkeletonListItem: React.FC<Partial<SkeletonListProps["itemProps"]>> = ({Image, Avatar, Info}) => {
    return (
        <div>
            {/* <div className={styles['item-image']}>
                <Skeleton.Image width={100} height={100}/>
            </div> */}
            <Skeleton className={styles['item-image']} height={Image?.height ?? 129}></Skeleton>
            <div className={styles["item-colors"]}>
                <Skeleton.Avatar count={4} width={24} height={Avatar?.height ?? 24}/>
            </div>
            <Skeleton className={styles['item-info']} count={2} spaceBetween={15} widthMultiple={Info?.widthMultiple ?? ['41%', '30%']} heightMultiple={Info?.heightMultiple ?? [30, 16]}></Skeleton>
        </div>
    )
}

export default SkeletonListItem