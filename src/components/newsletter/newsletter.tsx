import { Close, Mail, Right } from '@/components/icons'
import { Input, Button, Tooltip } from '@eyebuydirect/ebd.front.lib'
import React, { useCallback, useState } from 'react'
import styles from './newsletter.module.scss'
import { post } from '@/api/createHttpRequest'
import Qs from 'qs'

const NewsLetter = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>('')
    const toggleTooltip = useCallback(
        (val) => {
            setVisible(val)
        },
        [visible]
    )

    const formRef = React.useRef<HTMLFormElement>(null)
    const subscribeFn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = {
            email: formRef.current?.email.value,
            email_type: formRef.current?.email_type.value,
        }
        if (!formData.email) {
            setMsg("Please enter your email address.")
        } else {
            await post('/system/subscribe', Qs.stringify(formData)).then((data: any) => {
                setMsg(data.msg)
            })
        }
        toggleTooltip(true)
    }
    return (
        <div className={styles['footer-join']}>
            <p className={styles['join-d-title']}>See our latest collections & exclusive offers before the crowd!</p>
            <p className={styles['join-m-title']}>Join The Exclusive Club</p>
            <form ref={formRef} onSubmit={subscribeFn} className={styles['subscribe-form']}>
                <div>
                    <Tooltip
                        visible={visible}
                        overlay={
                            <>
                                <span>{msg}</span>
                                <Close className={styles.close} onClick={() => toggleTooltip(false)} width={14} height={14} />
                            </>
                        }
                        trigger='click'
                        placement='topLeft'
                        overlayClassName={styles.tooltip}
                    >
                        <div>
                            <Input
                                name='email'
                                type='email'
                                id='subscribe-newsletter-email'
                                onFocus={() => toggleTooltip(false)}
                                placeholder="Email address"
                                autoComplete='off'
                                prefix={<Mail width={22} height={20} />}
                                className={styles['newsletter-input']}
                            />
                        </div>
                        <Input className={styles['email-type']} type='hidden' name='email_type' value='newsletter' />
                    </Tooltip>
                    <Button
                        data-event-cate='Footer'
                        data-event-name='Social'
                        data-event-label='Newsletter Submit'
                        className={styles['newsletter-btn']}
                        htmlType='submit'
                    >
                        <Right width={24} height={24} />
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default NewsLetter
