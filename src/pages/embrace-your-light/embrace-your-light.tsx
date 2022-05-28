import React, { useState, useEffect } from 'react'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import styles from './embrace-your-light.module.scss'

import classNames from 'classnames';

import Skeleton, { SkeletonTheme} from '../../components/skeleton'

import ListItem from 'src/components/list/list-item';

import { Products } from '../../mockData'

import SkeletonListItem from 'src/components/list/skeleton-list-item'



export interface EmbraceYourLightProps {
    children?:React.ReactNode
}

const EmbraceYourLight: React.FC<EmbraceYourLightProps> = (props) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            // setLoading(false)
        }, 500)
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

    console.log('10788', Products["10788"])

    return (
        <>
    

            <div className={styles['list-container']}>
                {
                    loading &&  Array.from({length: 5}).map((item, index) => 
                        <SkeletonListItem key={index}/>
                    ) 
                }
                {
                    !loading && 
                   <>
                        <ListItem data={Products["10796"]} defaultColor="C2"/>
                        <ListItem data={Products["10888"]} defaultColor="C1" showNewTag={true}/>
                        <ListItem data={Products["10887"]} defaultColor="C1" showNewTag={true}/>
                   </>
                }
               
            </div>

            
            <div className={styles['list-container']}>
                {
                    loading &&  Array.from({length: 5}).map((item, index) => 
                        <SkeletonListItem key={index}/>
                    ) 
                }
                 {
                    !loading && 
                   <>
                        <ListItem data={Products["10787"]} defaultColor="C1"/>
                        <ListItem data={Products["10892"]} defaultColor="C2" showNewTag={true}/>
                        <ListItem data={Products["10886"]} defaultColor="C2" showNewTag={true}/>
                   </>
                }
                
            </div>

            {/* phone 和desktop显示不同 */}
            <ListItem data={Products["10885"]} defaultColor="C2" showNewTag={true}/>


            <div className={styles['list-container']}>
                {
                    loading &&  Array.from({length: 5}).map((item, index) => 
                        <SkeletonListItem key={index}/>
                    ) 
                }
                 {
                    !loading && 
                   <>
                        <ListItem data={Products["10898"]} defaultColor="C3" showNewTag={true}/>
                        <ListItem data={Products["10889"]} defaultColor="C2" showNewTag={true}/>
                        <ListItem data={Products["10804"]} defaultColor="C2"/>
                   </>
                }
                
            </div>

            {/* clearfix */}
            <div className={styles['list-container']}>
                {
                    loading &&  Array.from({length: 5}).map((item, index) => 
                        <SkeletonListItem key={index}/>
                    ) 
                }
                {
                    !loading && 
                    <>
                        <ListItem data={Products["10891"]} defaultColor="C2" showNewTag={true}/>
                        <ListItem data={Products["10899"]} defaultColor="C3" showNewTag={true}/>
                        <ListItem data={Products["10800"]} defaultColor="C2"/>
                    </>
                }
            </div>

            <ListItem data={Products["10890"]} defaultColor="C2" showNewTag={true}/>

            <div className={styles['list-container']}>
                {
                    loading &&  Array.from({length: 5}).map((item, index) => 
                        <SkeletonListItem key={index}/>
                    ) 
                }
                {
                    !loading && 
                    <>
                        <ListItem data={Products["10783"]} defaultColor="C2"/>
                        <ListItem data={Products["10784"]} defaultColor="C3"/>
                        <ListItem data={Products["10785"]} defaultColor="C3"/>
                    </>
                }
            </div>


            <div className={styles['list-container']}>
                {
                    loading &&  Array.from({length: 5}).map((item, index) => 
                        <SkeletonListItem key={index}/>
                    ) 
                }
                {
                    !loading && 
                    <>
                       <ListItem data={Products["10786"]} defaultColor="C3"/>
                        <ListItem data={Products["10788"]} defaultColor="C3"/>
                        <ListItem data={Products["10802"]} defaultColor="C2"/>
                    </>
                }
            </div>

            {/* phone 和desktop显示不同 */}
            <ListItem data={Products["10799"]} defaultColor="C1"/>


            <div className={styles['list-container']}>
                {
                    loading &&  Array.from({length: 5}).map((item, index) => 
                        <SkeletonListItem key={index}/>
                    ) 
                }
                {
                    !loading && 
                    <>
                      <ListItem data={Products["10791"]} defaultColor="C2"/>
                        <ListItem data={Products["10792"]} defaultColor="C1"/>
                        <ListItem data={Products["10803"]} defaultColor="C3"/>
                    </>
                }
                
            </div>
           
            <div className={styles['list-container']}>
                {
                    loading &&  Array.from({length: 5}).map((item, index) => 
                        <SkeletonListItem key={index}/>
                    ) 
                }
                {
                    !loading && 
                    <>
                        <ListItem data={Products["10793"]} defaultColor="C3"/>
                        <ListItem data={Products["10794"]} defaultColor="C3"/>
                        <ListItem data={Products["10795"]} defaultColor="C3"/>
                        <ListItem data={Products["10797"]} defaultColor="C3"/>
                        <ListItem data={Products["10801"]} defaultColor="C3"/>
                        <ListItem data={Products["10798"]} defaultColor="C1"/>
                    </>
                }
                
            </div>
            

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
        </>
       
    )
}

export default EmbraceYourLight;