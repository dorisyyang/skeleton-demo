import React, { useState, useEffect } from 'react'
import Layout from 'src/components/layout/layout'
import styles from './embrace-your-light.module.scss'
import classNames from 'classnames';

import Skeleton, { SkeletonTheme} from '../../components/skeleton'
import { Skeleton as NSkeleton} from 'react-skeleton-generator';

export interface EmbraceYourLightProps {
    children?:React.ReactNode
}

const EmbraceYourLight: React.FC<EmbraceYourLightProps> = (props) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const CardSkeleton = () => {
        return (
            <div className={styles.card}>
                <Skeleton  height={200}></Skeleton>
                <div className={styles.content}>
                    <Skeleton component='h3' height={24} style={{marginBottom: '16px'}}></Skeleton>
                    <Skeleton component='p' height={68}></Skeleton>
                </div>
            </div>
        )
    }
    return (
        <Layout>
            {
                loading ?  <CardSkeleton /> : 
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img src="https://img.ebdcdn.com/upload/banner/202203/150454037259.jpg" alt="" />
                    </div>
                    <div className={styles.content}>
                        <h4>Fit &amp; Style Quiz</h4>
                        <div className={styles.description}>
                            Need some help figuring out which glasses are right for you? Find your perfect pair.
                        </div>
                    </div>
                    
                </div>
            }
            <br/>

            <Skeleton height={24} style={{marginBottom: '16px'}} loading={loading}>
                <h3>这是一个标题</h3>
            </Skeleton>

            <br/>
            <SkeletonTheme highlightColor='red' borderRadius={20} active={false}>
                <Skeleton count={5} active spaceBetween={15} widthMultiple={['100%', '50%', '75%']} heightMultiple={['50px', '20px', '15px']}/>
                <br/>
                <Skeleton count={5}/>
            </SkeletonTheme>
            
            <br/>
           
            <NSkeleton.SkeletonThemeProvider>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <NSkeleton
                    width="50px"
                    height="50px"
                    borderRadius="50%"
                    />

                    <div style={{ width: '400px' }}>
                    <NSkeleton
                        borderRadius="10px"
                        count={3}
                        widthMultiple={['100%', '50%', '75%']}
                        heightMultiple={['50px', '20px', '15px']}
                    />
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <NSkeleton
                    borderRadius="10px"
                    count={3}
                    widthMultiple={['100%', '100%', '80%']}
                    heightMultiple={['20px', '20px', '20px']}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                    <NSkeleton
                    width="48%"
                    height="50px"
                    borderRadius="10px"
                    />

                    <NSkeleton
                    width="48%"
                    height="50px"
                    borderRadius="10px"
                    />
                </div>
            </NSkeleton.SkeletonThemeProvider>

            {/* <div className={classNames(styles.card, (imgSrc === '' ? styles['loading'] : ''))}>
                <div className="image">
                    <img src={imgSrc} alt="" />
                </div>
            </div> */}
        </Layout>
       
    )
}

export default EmbraceYourLight;