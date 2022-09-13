import React, { useState, useEffect, PropsWithChildren} from 'react'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import styles from '@/components/layout/header/header-mobile.module.scss'
import { Search, Favorite, Cart, Menu as IconMenu, EbdLogo, Chat, Telephone, Mail, Local } from '../../icons'
import { Drawer, Button, Menu} from '@eyebuydirect/ebd.front.lib'
import { get } from 'src/api/createHttpRequest'
import { IHeaderData, INav} from 'src/components/layout/interface'
import classNames from 'classnames';

const  {Item, SubMenu} = Menu;

const NavImageMenu: React.FC<INav> = ({ title, images }) => (
    <SubMenu
        eventKey={title}
        key={title}
        title={title}
    >
        {images.map((item, key: number) => (
            <Item key={item.title + key}>
                <a
                    href={item.url}
                    className={styles['nav-image']}
                >
                    {item.img && <img className="lazyload" src={item.img.src} alt={item.img.alt} width={82} height={54} />}
                    <span className={styles['nav-title']}>
                        <div dangerouslySetInnerHTML={{ __html: item.title }} />
                    </span>
                </a>
            </Item>
        ))}
    </SubMenu>
)

const NormalMenu: React.FC<INav> = ({ title, columns, images }) => {
    const menuTitle = title.toLowerCase()
    let dynamicCount = 0

    return (
        <SubMenu
            eventKey={title}
            key={title}
            title={title}
        >
            {columns.map(({ title, style, links }, key: number) => {
                if (style === 'item') {
                    return links.map((item, index: number) => (
                        <Item key={item.title}>
                            <a
                                href={item.url}
                                title={item.title}
                                style={{ color: item.color || 'black' }}
                                className={item.title === 'On Sale' ? 'onsale-color' : ''}
                            >
                                {item.title}
                            </a>
                        </Item>
                    ))
                } else {
                    return (
                        <SubMenu
                            key={`${menuTitle}-${title}`}
                            title={title}
                        >
                            {links.map((item) => {
                                dynamicCount++
                                return (
                                    <Item key={`${menuTitle}-${item.title}`}>
                                        <a
                                            href={item.url}
                                            title={item.title}
                                            style={{ color: item.color || 'black' }}
                                        >
                                            {item.icon && item.icon.position === 'front' ? (
                                                <img className={classNames(styles['im-front-icon-nav'], 'lazyload')} src={item.icon.src} alt='' height={16} />
                                            ) : null}
                                            {item.title}
                                            {item.icon && item.icon.position === 'end' ? (
                                                <img className={classNames(styles['im-end-icon-nav'], '')} src={item.icon.src} alt='' height={16} />
                                            ) : null}
                                        </a>
                                    </Item>
                                )
                            })}
                        </SubMenu>
                    )
                }
            })}
            {images.length === 1 &&
                images.map((item, index: number) => (
                    <Item key={item.title}>
                        <a
                            href={item.url}
                        >
                            {item.title}
                        </a>
                    </Item>
                ))}
        </SubMenu>
    )
}

const HeaderMobile: React.FC<PropsWithChildren<{}>> = (props) => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    const [cartVisible, setCartVisible] = useState<boolean>(false)
    const [wishlistVisible, setWishlistVisible] = useState<boolean>(false)
    const [headerData, setHeaderData] = useState<IHeaderData | null>(null)
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const rootSubmenuKeys = headerData?.nav ? [...headerData.nav.map((e) => e.title), 'Help'] : []
    const onOpenChange = (keys: string[]) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
        if (!latestOpenKey || rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys)
        } else {
            setOpenKeys(latestOpenKey != null ? [latestOpenKey] : [])
        }
    }
    useEffect(() => {
        get("/api/header")
          .then((data) => {
              if (data.code === 200) {
                setHeaderData(data.data)
              }
          });
    }, [])
    return (
        <div id='header' className={styles.header}>
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
                    <EbdLogo width={172} height={19} />
                </a>
                <ul className={styles['btn-right-shortcut']}>
                    <li>
                        <div onClick={() => setWishlistVisible(true)}>
                            <Favorite width={17} height={17} />
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
                <Menu mode='inline' triggerSubMenuAction='click' openKeys={openKeys} onOpenChange={onOpenChange}>
                    {headerData?.nav && 
                        headerData.nav.map((navData) => {
                            const { title, columns } = navData
                            if (columns.length === 0) {
                                return <NavImageMenu {...navData} key={title}></NavImageMenu>
                            } else {
                                return <NormalMenu {...navData} key={title} />
                            }
                        })}
                    <SubMenu
                        key='help'
                        title="Help"
                    >
                        { headerData?.help &&
                            headerData.help.links.map((link, index: number) => {
                                return (
                                    <Item key={link.title}>
                                        <a href={link.url} title={link.title}>
                                            {link.title}
                                        </a>
                                    </Item>
                                )
                            })}

                        <div className={styles['help-details']}>
                            <h4>Have questions?</h4>
                            <div className={styles['faq-others']}>
                                <div className={styles['nav-live-chat']}>
                                    <div className={styles['head-live-chat']}></div>
                                    <div
                                        className={styles['chat-tip']}
                                        id='EBD_LP_DIV_1404808752448'
                                    >
                                        <Chat width={18} height={16} />
                                        <span>Start a live chat</span>
                                    </div>
                                </div>
                                <div className={styles['faq-tel-time']}>
                                    <Telephone width={16} height={16} />
                                    <a className={styles['tel']} href="tel:+1-855-393-2891">
                                        <span>1-855-393-2891</span>
                                    </a>
                                    <span className={styles['tel-txt']}>(Available 24/7)</span>
                                </div>

                                <a
                                    href='mailto:support@eyebuydirect.com'
                                    className={styles['faq-send-msg']}
                                >
                                    <Mail width={16} height={14} />
                                    <span>support@eyebuydirect.com</span>
                                </a>

                                <a
                                    href='eyecare/find-eye-doctor'
                                    className={styles['btn-find']}
                                >
                                    <Local width={15} height={18} />
                                    <span>Find eye doctors near you</span>
                                </a>
                            </div>
                        </div>
                    </SubMenu>
                </Menu>
                <div className={styles['slide-footer']}>
                    <a href='/default/contact'>
                        Contact
                    </a>
                    <a href='/order-tracking/index'>
                        Order Tracking
                    </a>
                </div>
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