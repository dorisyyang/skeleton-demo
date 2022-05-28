import React, { useState, useEffect } from 'react'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import styles from './embrace-your-light.module.scss'

import classNames from 'classnames';

import Skeleton, { SkeletonTheme} from '../../components/skeleton'

import ListItem from 'src/components/list/list-item';

import { Products } from '../../mockData'

import SkeletonList from 'src/components/list/skeleton-list'

import { get } from 'src/api/createHttpRequest'

export interface EmbraceYourLightProps {
    children?:React.ReactNode
}

const EmbraceYourLight: React.FC<EmbraceYourLightProps> = (props) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    React.useEffect(() => {
        get("/api/products")
          .then((data) => {
            setTimeout(() => {
                setLoading(false)
            }, 500)
              if (data.code === 200) {
                  setProducts(data.data)
                  console.log('data', data.data);
                  console.log('data-10890', data.data["10890"])
              }
          });
    }, []);

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
        <>
            <div className={styles['list-container']}>
                {
                    <SkeletonList count={3} loading={loading}>
                        <ListItem data={products["10796"]} defaultColor="C2"/>
                        <ListItem data={products["10888"]} defaultColor="C1" showNewTag={true}/>
                        <ListItem data={products["10887"]} defaultColor="C1" showNewTag={true}/>
                    </SkeletonList>
                }
            </div>

            
            <div className={styles['list-container']}>
                {
                    <SkeletonList count={3} loading={loading}>
                       <ListItem data={products["10787"]} defaultColor="C1"/>
                        <ListItem data={products["10892"]} defaultColor="C2" showNewTag={true}/>
                        <ListItem data={products["10886"]} defaultColor="C2" showNewTag={true}/>
                    </SkeletonList>
                }
            </div>

            {/* phone 和desktop显示不同 */}
            <SkeletonList loading={loading}>
                <ListItem data={products["10885"]} defaultColor="C2" showNewTag={true}/>
            </SkeletonList>

            <div className={styles['list-container']}>
                {
                    <SkeletonList count={3} loading={loading}>
                       <ListItem data={products["10898"]} defaultColor="C3" showNewTag={true}/>
                        <ListItem data={products["10889"]} defaultColor="C2" showNewTag={true}/>
                        <ListItem data={products["10804"]} defaultColor="C2"/>
                    </SkeletonList>
                }
                
            </div>

            {/* clearfix */}
            <div className={styles['list-container']}>
                {
                    <SkeletonList count={3} loading={loading}>
                       <ListItem data={products["10891"]} defaultColor="C2" showNewTag={true}/>
                        <ListItem data={products["10899"]} defaultColor="C3" showNewTag={true}/>
                        <ListItem data={products["10800"]} defaultColor="C2"/>
                    </SkeletonList>
                }
            </div>

            <SkeletonList loading={loading}>
                <ListItem data={products["10890"]} defaultColor="C1" showNewTag={true}/>
            </SkeletonList>
          
            <div className={styles['list-container']}>
                <SkeletonList count={3} loading={loading}>
                    <ListItem data={products["10783"]} defaultColor="C2"/>
                    <ListItem data={products["10784"]} defaultColor="C3"/>
                    <ListItem data={products["10785"]} defaultColor="C3"/>
                </SkeletonList>
            </div>


            <div className={styles['list-container']}>
                 <SkeletonList count={3} loading={loading}>
                        <ListItem data={products["10786"]} defaultColor="C3"/>
                        <ListItem data={products["10788"]} defaultColor="C3"/>
                        <ListItem data={products["10802"]} defaultColor="C2"/>
                </SkeletonList>
            </div>

            {/* phone 和desktop显示不同 */}
            <SkeletonList loading={loading}>
                <ListItem data={Products["10799"]} defaultColor="C1"/>
            </SkeletonList>

            <div className={styles['list-container']}>
                <SkeletonList count={3} loading={loading}>
                        <ListItem data={products["10791"]} defaultColor="C2"/>
                        <ListItem data={products["10792"]} defaultColor="C1"/>
                        <ListItem data={products["10803"]} defaultColor="C3"/>
                </SkeletonList>
            </div>
           
            <div className={styles['list-container']}>
                <SkeletonList count={6} loading={loading}>
                        <ListItem data={products["10793"]} defaultColor="C3"/>
                        <ListItem data={products["10794"]} defaultColor="C3"/>
                        <ListItem data={products["10795"]} defaultColor="C3"/>
                        <ListItem data={products["10797"]} defaultColor="C3"/>
                        <ListItem data={products["10801"]} defaultColor="C3"/>
                        <ListItem data={products["10798"]} defaultColor="C1"/>
                </SkeletonList>
                
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