import styles from './header-top-bar-desktop.module.scss'
import useHeaderAnimation from '@/hooks/useHeaderAnimation'
import classNames from 'classnames'

declare global {
    interface Window {
        enableUsableNetAssistive: any
    }
}

const HeaderTopBarDesktop: React.FC = () => {
    useHeaderAnimation()

    return (
        <div id='headerTopBar' className={styles['header-top-bar']}>
            <div className={styles['promotion-notice']}></div>
            <div
                id='usablenet-mode'
                className={classNames(styles['accessibility-mode'], 'UsableNetAssistive')}
                data-event-cate='Navigation'
                data-event-name='Accessibility'
                data-event-label='Accessibility'
                tabIndex={-1}
            >
                Enter Accessibility Mode
            </div>
        </div>
    )
}
export default HeaderTopBarDesktop
