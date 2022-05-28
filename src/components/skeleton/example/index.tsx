import React, { useState, useEffect } from 'react'

import Skeleton, { SkeletonTheme} from '../index'

const UseExample: React.FC = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            <Skeleton height={24} style={{marginBottom: '16px'}} loading={loading}>
                <h3>这是一个标题</h3>
            </Skeleton>

            <br/>

            <Skeleton.Avatar />
            <Skeleton.Avatar width={50} height={50}/>


            <br/>
            <Skeleton count={5} active spaceBetween={15} widthMultiple={['100%', '50%', '75%']} heightMultiple={['50px', '20px', '15px']}/>

            <br/>
            <SkeletonTheme highlightColor='red' borderRadius={20} active={false}>
                <Skeleton count={5} active spaceBetween={15} widthMultiple={['100%', '50%', '75%']} heightMultiple={['50px', '20px', '15px']}/>
                <br/>
                <Skeleton count={5}/>
            </SkeletonTheme>
        </>
    )
}

export default UseExample;