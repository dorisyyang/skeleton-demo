import React, { PropsWithChildren} from 'react'
import styles from './footer-desktop.module.scss'
import { getYear } from 'date-fns'
import { Facebook, Instagram, Play, Tiktok, Twitter } from 'src/components/icons'
import { INormalLink } from 'src/components/layout/interface'
import useFooterData from 'src/hooks/useFooterData'

function unorderedList(links: INormalLink[]) {
  return links.map((item1, index1: number) => (
          <a href={item1.url} key={index1}>{item1.title}</a>
  ))
}
const FooterDesktop: React.FC<PropsWithChildren<{}>> = () => {
    const data = useFooterData();
    return (
        <div className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={`${styles['link-wrap']} clearfix`}>
                    <div className={styles['follow-logo']}>
                        <div className={styles['follow-us']}>
                            <div className={styles['follow-title']}>Follow us</div>
                            <div className={styles['follow-us-title']}>
                                <a
                                    title='Follow us on Instagram'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.instagram.com/eyebuydirect/'
                                >
                                    <Instagram width={25} height={25} />
                                </a>
                                <a
                                    className={styles.facebook}
                                    title='Follow us on Facebook'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.facebook.com/EyeBuyDirect/'
                                >
                                    <Facebook width={24} height={24} />
                                </a>

                                <a
                                    className={styles.twitter}
                                    title='Follow us on Twitter'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://twitter.com/eyebuydirect/'
                                >
                                    <Twitter width={32} height={32} />
                                </a>
                                <a
                                    title='Follow us on YouTube'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.youtube.com/EyeBuyDirect/'
                                >
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
                        </div>
                        <div className={styles['payment-logo']}>
                            <a
                                href='https://www.resellerratings.com'
                                onClick={() => {
                                    window.open(
                                        'https://seals.resellerratings.com/landing.php?seller=13034',
                                        'name',
                                        'height=760,width=780,scrollbars=1'
                                    )
                                    return false
                                }}
                            >
                                <img className='lazyload' 
                                    data-src={`/assets/images/logo-resellerratings.png`}
                                    alt='Reseller Ratings'
                                    width={130}
                                    height={37}
                                />
                            </a>
                            <a
                                rel='noopener noreferrer'
                                href='https://bizratesurveys.com/reviews/detail/www.eyebuydirect.com/143709'
                                title='See EyeBuyDirect.com Reviews at Bizrate.com'
                                target='_blank'
                            >
                                <img
                                    className='lazyload' 
                                    data-src={`/assets/images/logo-bizrate.svg`}
                                    alt='Bizrate'
                                    width={170}
                                    height={46}
                                />
                            </a>
                        </div>
                        <div className={styles['footer-newsweek']}>
                            <img className='lazyload' 
                                data-src={`/assets/images/newsweek.png`} alt='Newsweek' width={70} height={35} />
                        </div>
                        <div className={styles['language-link']}>
                            Change region:
                            <a className={styles.current} href="https://www.local.com">US</a>
                            <a href="https://www.local.fr">FR</a>
                            <a href="https://www.local.ca">CA</a>
                            <a href="https://au.local.com">AU</a>
                        </div>
                    </div>
                    <div className={styles.item}>
                        {data &&
                            data.map((item, index: number) => {
                                if (index <= data.length - 3) {
                                    return (
                                        <div className={styles['item-content']} key={index}>
                                            <div className={styles['links-title']}>{item.title}</div>
                                            <div className={styles['links-items']}>
                                                {item.links.map((item1, index1: number) => {
                                                    return (
                                                      <a href={item1.url} key={index1}>
                                                          {item1.title}
                                                      </a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                } else if (index === data.length - 2) {
                                    return (
                                        <div className={styles['item-content']} key={index}>
                                            <div className={styles['links-title']}>{item.title}</div>
                                            <div className={styles['links-items']}> {unorderedList(item.links)}</div>
                                            <div className={`${styles['links-title']} ${styles['links-brands']}`}>{data[data.length - 1].title}</div>
                                            <div className={styles['links-items']}>
                                                {data[data.length - 1].links.map((item2, index2: number) => {
                                                    return (
                                                        <a
                                                          href={item2.url} key={index2}
                                                            className={styles['brand-link']}
                                                        >
                                                            {item2.title}
                                                        </a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                    </div>
                </div>
                <div className={styles.copyright}>
                    © 2006-{getYear(new Date())}{' '}
                    <a href='/'>eyebuydirect.com</a>
                    <div className={styles.other}>
                        <span className={styles['text-link']}>
                            <a href='/learning-center/privacy-policy-new'>
                              Privacy Policy
                            </a>
                        </span>
                        <span className={styles['text-link']}>
                            <a href='/learning-center/terms-of-use'>
                                Terms and Conditions of Use
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterDesktop
