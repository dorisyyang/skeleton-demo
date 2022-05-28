import React, { useState } from 'react'
import styles from '@/components/layout/footer/footer-mobile.module.scss'
import { Collapse, Button } from '@eyebuydirect/ebd.front.lib'
import { FooterData } from '../../../mockData'
import { Facebook, Instagram, Play, Tiktok, Twitter } from '../../icons'
import { getYear } from 'date-fns'
const { Panel } = Collapse

export interface FooterMobileProps {
    children?:React.ReactNode
}

const FooterMobile: React.FC<FooterMobileProps> = () => {
    const data = FooterData;
    return (
        <div className={styles['footer']}>
            <Collapse accordion ghost expandIconPosition='right'>
                {data.length > 0 &&
                    data.map((item, index: number) => (
                        <Panel header={item.category} key={index} className={styles['links-title']} forceRender={true}>
                            {item.links.map((item1, index1: number) => {
                                return (
                                    <a href={item1.url} key={index1} className={styles['links-item']}>{item1.title}</a>
                                )
                            })}
                        </Panel>
                    ))}
            </Collapse>
            <div className={styles.other}>
                <div className={styles['follow-us']}>
                    <a title='Follow us on Instagram' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/eyebuydirect/'>
                        <Instagram width={25} height={25} />
                    </a>
                    <a title='Follow us on Facebook' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/EyeBuyDirect/'>
                        <Facebook width={24} height={24} />
                    </a>

                    <a title='Follow us on Twitter' target='_blank' rel='noopener noreferrer' href='https://twitter.com/eyebuydirect/'>
                        <Twitter width={32} height={32} />
                    </a>
                    <a title='Follow us on YouTube' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/EyeBuyDirect/'>
                        <Play width={25} height={25} />
                    </a>
                    <a
                        className={styles.tiktok}
                        title='Follow us on Tiktok'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.tiktok.com/@eyebuydirect'
                    >
                        <Tiktok width={25} height={25} />
                    </a>
                </div>

                <div className={styles['bottom-pwa-div']}>
                    <Button className={styles['bottom-pwa-btn']}>Get the App</Button>
                </div>

                <p className={styles['text-link']}>
                    <a href='/learning-center/privacy-policy-new'>Privacy Policy</a>
                </p>
                <p className={styles['text-link']}>
                    <a href='/learning-center/terms-of-use'>Terms and Conditions of Use</a>
                </p>
            </div>
            <div className={styles['language-link']}>
                Change region:
                <a href='www.local.com' className={styles.current}>
                    US
                </a>
                <a href='fr.local.com'>FR</a>
                <a href='ca.local.com'>CA</a>
                <a href='au.local.com'>AU</a>
            </div>
            
            <div className={styles['footer-newsweek']}>
                <img src={'/assets/images/newsweek.png'} width={70} height={35} alt='Newsweek' />
            </div>
            <div className={styles.copyright}>
                2006-{getYear(new Date())}{' '}
                <a href='/'>EyeBuyDirect.com</a>
            </div>
        </div>
    )
}

export default FooterMobile;