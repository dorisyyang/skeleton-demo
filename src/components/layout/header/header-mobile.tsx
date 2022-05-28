import React, { useState } from 'react'
import styles from '@/components/layout/header/header-mobile.module.scss'
import { Search, Favorite, Cart, Menu as IconMenu, Chat, Telephone, Mail, Local } from '../../icons'
import { Drawer, Button } from '@eyebuydirect/ebd.front.lib'
export interface HeaderMobileProps {
    children?:React.ReactNode
}

const HeaderMobile: React.FC<HeaderMobileProps> = (props) => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    const [cartVisible, setCartVisible] = useState<boolean>(false)
    const [wishlistVisible, setWishlistVisible] = useState<boolean>(false)
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles['btn-left-shortcut']}>
                    <span className={styles['btn-left-menu']} onClick={() => setMenuVisible(true)}>
                        <IconMenu width={26} height={26} />
                    </span>
                    <span className={styles['btn-left-search']}>
                        <Search width={16} height={16} />
                    </span>
                </div>
                <a className={styles.logo} href="/">
                    <img src='/assets/images/ebd-logo-mobile.svg' alt='EyeBuyDirect.com' width={74} height={30} />
                </a>
                <ul className={styles['btn-right-shortcut']}>
                    <li>
                        <div onClick={() => setWishlistVisible(true)}>
                            <Favorite width={17} height={17} />
                            <span className={styles['favorite-nums']}>12</span>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => setCartVisible(true)}>
                            <Cart width={15} height={18} />
                        </div>
                    </li>
                </ul>
            </div>

            <Drawer
             className='header-drawer header-menu-drawer'
             title={
                <a href='/passport'>
                    <Button type='primary'>Sign In</Button>
                </a>
             }
             placement='left'
             visible={menuVisible}
             width='100vw'
             onClose={() => setMenuVisible(false)}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

            <Drawer
                className='header-drawer'
                title={<>My Wishlist (3)</>}
                width='100vw'
                visible={wishlistVisible}
                onClose={() => setWishlistVisible(false)}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

            <Drawer className='header-drawer' title={<>My Cart (3)</>} width='100vw' visible={cartVisible} onClose={() => setCartVisible(false)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default HeaderMobile;