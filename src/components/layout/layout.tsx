import React from 'react'
import LayoutContextProvider from './layoutContext' 
import HeaderMobile from './header/header-mobile';
import FooterMobile from './footer/footer-mobile';
import HeaderDesktop from './header/header-desktop';
import FooterDesktop from './footer/footer-desktop';
import styles from '@/components/layout/layout.module.scss'
import { useMediaQuery } from 'react-responsive'

export interface LayoutProps {
    children?:React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 1024px)'
    })
    return (
        <LayoutContextProvider isMobile={isMobile}>
            <div className={styles[`layout-${ isMobile ? "mobile" : "desktop"}`]}>
                {
                    isMobile ? <HeaderMobile /> : <HeaderDesktop />
                }
                {children}
                {
                    isMobile ? <FooterMobile /> : <FooterDesktop />
                }
            </div>
        </LayoutContextProvider>
    )
}

export default Layout;