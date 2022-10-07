import React from "react";
import Skeleton from '@/components/skeleton'
import styles from './skeleton-list-item.module.scss'
const SkeletonListItem: React.FC = () => {
    return (
        <div>
            {/* <div className={styles['item-image']}>
                <Skeleton.Image width={100} height={100}/>
            </div> */}
            <Skeleton className={styles['item-image']} height={129}></Skeleton>
            <div className={styles["item-colors"]}>
                <Skeleton.Avatar count={4} width={24} height={24}/>
            </div>
            <Skeleton className={styles['img-x-auto']} count={2} spaceBetween={15} widthMultiple={['41%', '30%']} heightMultiple={[30, 16]}></Skeleton>
        </div>
    )
}

export default SkeletonListItem