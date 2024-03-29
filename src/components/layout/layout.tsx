import React from 'react'
import LayoutContextProvider from './layoutContext' 
import HeaderMobile from './header/header-mobile';
import FooterMobile from './footer/footer-mobile';
import HeaderDesktop from './header/header-desktop';
import FooterDesktop from './footer/footer-desktop';
import styles from '@/components/layout/layout.module.scss'
import useDevice from '../../hooks/useDevice'
import { HeaderTopBarDesktop, HeaderTopBarMobile } from './header-top-bar'
import NewsLetter from '../newsletter/newsletter'

export interface LayoutProps {
    children?:React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const DEVICE = useDevice()
    return (
        <LayoutContextProvider DEVICE={DEVICE}>
            <div className={styles[`layout-${ DEVICE !== 'desktop' ? "mobile" : "desktop"}`]}>
                {
                    DEVICE !== 'desktop' ? 
                    <>
                        <HeaderTopBarMobile />
                        <HeaderMobile />
                    </> : 
                    <>
                        <HeaderTopBarDesktop />
                        <HeaderDesktop />
                    </>
                }
                {children}
                <NewsLetter />
                {
                    DEVICE !== 'desktop' ? <FooterMobile /> : <FooterDesktop />
                }
            </div>
        </LayoutContextProvider>
    )
}

export default Layout;