import styles from '../layout/header/header-desktop.module.scss'

const ChatLoading = ({ ...props }) => {
    return (
        <svg height='10' width='20' className={styles['loader']} {...props}>
            <circle className={styles['dot']} cx='5' cy='8' r='1' fill='#A0A0A0' />
            <circle className={styles['dot']} cx='10' cy='8' r='1' fill='#A0A0A0' />
            <circle className={styles['dot']} cx='15' cy='8' r='1' fill='#A0A0A0' />
        </svg>
    )
}

export default ChatLoading
