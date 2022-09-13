import styles from './header-top-bar-mobile.module.scss'
import useHeaderAnimation from 'src/hooks/useHeaderAnimation'
import classNames from 'classnames'
import React from 'react'

declare global {
    interface Window {
        enableUsableNetAssistive: any
    }
}

const HeaderTopBarMobile: React.FC = () => {
    useHeaderAnimation()
    return (
        <div id='headerTopBar' className={styles['header-top-bar']}>
            <div
                id='usablenet-mode'
                className={classNames(styles['usablenet'], 'UsableNetAssistive')}
                data-event-cate='Navigation'
                data-event-name='Accessibility'
                data-event-label='Accessibility'
                tabIndex={1}
            >
                <div className={styles['accessibility-mode']}>
                    <img src={'/assets/images/icon-usablenet.svg'} width={20} height={20} alt='usableNet' />
                </div>
            </div>
            <div className={styles['promotion-notice']}></div>
        </div>
    )
}
export default HeaderTopBarMobile
