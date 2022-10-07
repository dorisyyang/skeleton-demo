import React, { useState, PropsWithChildren } from 'react'
import { INav, INormalLink } from '@/components/layout/interface'
import classNames from 'classnames'
import styles from './header-desktop.module.scss'
// import SearchBox from '@/components/algolia/searchBox'
import { Button, Navigation } from '@eyebuydirect/ebd.front.lib'
import { EbdLogo, Help, Favorite, Cart, Chat, Telephone, Mail, Local } from '@/components/icons'
import useHeaderData from '@/hooks/useHeaderData'

const NavItemWithMutipleImage: React.FC<INav> = ({ title, columns, images }) => {
    return (
        <Navigation.Item title={title}>
            <div className={classNames(styles['sub-nav-box'], styles['clearfix'], styles['sub-eyeglasses'])}>
                {columns.length > 0 &&
                    columns.map((col, key: number) => (
                        <dl
                            key={key}
                            className={classNames(styles['sub-nav-side'], key === 0 ? styles['sub-side-first'] : styles['sub-side-second'])}
                        >
                            <dd key='title' className={styles['feature-title']}>
                                {col.title}
                            </dd>
                            {col.links.map((item, index: number) => (
                                <dd key={index.toString()}>
                                    <a href={item.url}
                                        title={item.title}
                                        style={{ color: item.color || 'black' }}
                                        className={classNames(
                                            item?.icon && item.icon.position === 'front' ? styles['front-icon-a-link'] : '',
                                            item.title === 'On Sale' ? styles['onsale-color'] : ''
                                        )}
                                    >
                                        {item.title}
                                        {item?.icon ? <img className={styles['im-icon-nav']} src={item.icon.src} alt='' height={16} /> : null}
                                    </a>
                                </dd>
                            ))}
                        </dl>
                    ))}
                <dl className={styles['sub-nav-image']}>
                    {images.length > 0 &&
                        images.map((item, key: number) => (
                            <dd key={key}>
                                <a
                                    href={item.url}
                                    className={styles['nav-image']}
                                >
                                    <span className={styles['nav-picture']}>
                                        {item.img && <img src={encodeURI(item.img.src)} alt={item.img.alt} width={160} height={212} />}
                                    </span>

                                    <div className={styles['bg-layer']}></div>
                                    <p className={styles['nav-title-scope']}>
                                        <span className={styles['nav-title']}>{item.title}</span>
                                    </p>
                                </a>
                            </dd>
                        ))}
                </dl>
            </div>
        </Navigation.Item>
    )
}

const NavItemWithOnlyImage: React.FC<INav> = ({ title, images }) => (
    <Navigation.Item title={title}>
        <div className={classNames(styles['sub-nav-box'], styles['clearfix'], styles['sub-brands'])}>
            <dl className={styles['sub-nav-image']}>
                {images.length &&
                    images.map((item, key: number) => (
                        <dd key={key}>
                              <a
                                  href={item.url}
                                  className={styles['nav-image']}
                              >
                                  <span className={styles['nav-picture']}>
                                      {item.img && (
                                          <img
                                              src={encodeURI(item.img.src)}
                                              alt={item.img.alt}
                                              width={177}
                                              height={161}
                                          />
                                      )}
                                  </span>
                                  <div className={styles['bg-layer']}></div>
                                  <p className={styles['nav-title-scope']}>
                                      <span className={styles['nav-title']} dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                      {item?.icon ? <img className={styles['im-icon-nav']} src={item.icon.src} alt='' height={16} /> : null}
                                  </p>
                              </a>
                        </dd>
                    ))}
            </dl>
        </div>
    </Navigation.Item>
)

const NavItemWithSingleImage: React.FC<INav> = ({ title, columns, images }) => {
    return (
        <Navigation.Item title={title}>
            <div className={classNames(styles['sub-nav-box'], styles['clearfix'], styles['sub-lenses'])}>
                {columns.length > 0 &&
                    columns.map((col, key: number) => {
                        let count = 0
                        const subList = col.links.reduce<INormalLink[][]>(
                            (acc, cur, index) => {
                                if (index % 3 === 0 && index > 0 && key === 0) {
                                    count++
                                }
                                if (!acc[count]) {
                                    acc[count] = []
                                }
                                acc[count].push(cur)
                                return acc
                            },
                            [[]]
                        )
                        return subList.map((elt, index) => (
                            <dl key={`${key}_${index}`} className={classNames(styles['sub-nav-side'], styles['discover-slide-' + key], 'clearfix')}>
                                <dd className={styles['feature-title']}>{index === 0 && col.title}</dd>
                                {elt.map((item: INormalLink, subindex) => (
                                    <dd key={`sub_${index}_${subindex}`}>
                                      <a
                                          href={item.url}
                                          title={item.title}
                                      >
                                          {item.title}
                                          {item?.icon ? <img className={styles['im-icon-nav']} src={item.icon.src} alt='' height={16} /> : null}
                                      </a>
                                    </dd>
                                ))}
                            </dl>
                        ))
                    })}
                <dl className={styles['sub-nav-image']}>
                    {images.length &&
                        images.map((item, index: number) => (
                            <dd key={index}>
                                <a
                                  href={item.url}
                                  className={styles['nav-image']}
                                    
                                >
                                    {item.img && (
                                        <span className={styles['nav-picture']}>
                                            <img src={encodeURI(item.img.src)} alt={item.img.alt} width={312} height={212} />
                                        </span>
                                    )}
                                    <div className={styles['bg-layer']}></div>
                                    <p className={styles['nav-title-scope']}>
                                        <span className={styles['nav-title']}>{item.title}</span>
                                        <span className={styles['nav-sub-title']}>Everything you need to know about our lenses.</span>
                                    </p>
                                </a>
                            </dd>
                        ))}
                </dl>
            </div>
        </Navigation.Item>
    )
}

const HeaderDesktopDefault: React.FC<PropsWithChildren<{}>> = () => {
    const [navBg, setNavBg] = useState(false)
    const { nav: headerNav, help: helpData, wishlist: wishlistData } =  useHeaderData()
    return (
        <div id='header' className={styles.header}>
            <div className={styles.container}>
                  <a href='/' className={styles['logo-content']}>
                      <EbdLogo width={172} height={19} />
                  </a>
                <div className={styles['nav-content']}>
                    {navBg && <div className={styles['nav-bg-layer'] + ' ' + styles['active-bg']}></div>}
                    <Navigation className={styles['main-nav']} onMouseEnter={() => setNavBg(true)} onMouseLeave={() => setNavBg(false)}>
                        {headerNav &&
                            headerNav.map((itemData) => {
                                const { title, columns, images } = itemData
                                if (columns.length === 0) {
                                    return <NavItemWithOnlyImage {...itemData} key={title} />
                                } else if (images.length === 1) {
                                    return <NavItemWithSingleImage {...itemData} key={title} />
                                } else {
                                    return <NavItemWithMutipleImage {...itemData} key={title} />
                                }
                            })}
                    </Navigation>
                </div>
                {/* eof nav */}
                {/* <div className={styles['top-search-content']}>
                    <SearchBox placeholder={t('header.search.placeholder')} openOnFocus={true} debug={false} />
                </div> */}
                <div className={styles['shortcut-container']}>
                    <Navigation>
                        <Navigation.Item
                            isLink
                            title={
                              <a href='/passport' className={styles['shortcut-icon-link']} title='Sign In'>
                                  Sign In
                              </a>
                            }
                        ></Navigation.Item>
                        <Navigation.Item
                            isLink
                            title={
                              <a href='/contact'
                                className={styles['shortcut-icon-link']}
                                title='Help'
                              >
                                  <Help width={17} height={17} />
                              </a>
                            }
                        >
                            <div className={classNames(styles['shortcut-sub-content'], styles['sub-help'], styles['clearfix'])}>
                                <h3 className={styles['help-title']}>Help Center</h3>

                                {helpData &&
                                    helpData.links.length &&
                                    helpData.links.map((link, index: number) => {
                                        return (
                                          <a
                                            href={link.url} key={link.title}
                                              className={styles['help-link']}
                                              title={link.title}
                                          >
                                              {link.title}
                                          </a>
                                        )
                                    })}

                                <a
                                    href='/learning-center/faq'
                                    className={styles['btn-faq']}
                                    title='Help & FAQ'
                                >
                                    <Button type='primary'>Help & FAQ</Button>
                                </a>
                                <div className={styles['help-details']}>
                                    <h3 className={styles['shortcut-titile']}>Get in Touch</h3>
                                    <div className={styles['faq-others']}>
                                        <div className={styles['nav-live-chat']}>
                                            <div
                                                className='head-live-chat-new'
                                                id='LP_DIV_1454393189466'
                                            ></div>
                                            <div className='chat-tip'>
                                                <Chat className={styles['chat-img']} width={18} height={16} />
                                                <span className='chat-txt'>Start a live chat </span>
                                                {/* <span>
                                                    (Loading
                                                    <ChatLoading width={20} height={10} />)
                                                </span> */}
                                            </div>
                                        </div>
                                        <div className={styles['faq-tel-time']}>
                                            <Telephone className={styles['tel-img']} width={16} height={16} />
                                            <a className={styles['tel']} href="tel:+1-855-393-2891">
                                                <span>1-855-393-2891</span>
                                            </a>
                                            <span className={styles['tel-txt']}>(Available 24/7)</span>
                                        </div>

                                        <a
                                            href='mailto:support@eyebuydirect.com'
                                            className={styles['faq-send-msg']}
                                        >
                                            <Mail className={styles['send-img']} width={16} height={14} />
                                            <span className={styles['send-txt']}>support@eyebuydirect.com</span>
                                        </a>

                                        <a
                                            href='eyecare/find-eye-doctor'
                                            className={styles['btn-find']}
                                        >
                                            <Local className={styles['find-img']} width={15} height={18} />
                                            <span className={styles['find-txt']}>Find eye doctors near you</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Navigation.Item>
                        <Navigation.Item
                            isLink={true}
                            title={
                              <a href='/favorite'
                                  className={styles['shortcut-icon-link']}
                                  title='Wishlist'
                              >
                                  <Favorite width={17} height={17} />
                                  {wishlistData && wishlistData.length !== 0 && (
                                      <span className={styles['favorite-nums']}>{wishlistData.length}</span>
                                  )}
                              </a>
                            }
                        ></Navigation.Item>
                        <Navigation.Item
                            isLink
                            title={
                              <a href='/cart'
                                  className={styles['shortcut-icon-link']}
                                  title='Cart'
                              >
                                  <Cart width={15} height={18} />
                              </a>
                            }
                        ></Navigation.Item>
                    </Navigation>
                </div>
            </div>
        </div>
    )
}

export default HeaderDesktopDefault
