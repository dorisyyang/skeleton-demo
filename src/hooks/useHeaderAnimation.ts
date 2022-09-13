import { useEffect, useRef } from 'react'

const useHeaderAnimation = () => {
    const topBarHide = useRef<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const topBarDom: HTMLElement = document.getElementById('headerTopBar') as HTMLElement
        const headerDom: HTMLElement = document.getElementById('header') as HTMLElement
        const scrollTop = document.documentElement.scrollTop || window.scrollY || document.body.scrollTop
        const topBarHeight = topBarDom.offsetHeight //获取标签距离顶部位置
        if (!topBarDom || !headerDom) return
        if (scrollTop >= topBarHeight) {
            // 说明要消失头部
            if (!topBarHide.current) {
                topBarDom.style.transform = `translateY(-${topBarHeight}px)`
                headerDom.style.transform = `translateY(0px)`
                topBarHide.current = true
            }
        } else {
            // 说明要出现头部
            if (topBarHide.current) {
                topBarDom.style.transform = `translateY(0px)`
                headerDom.style.transform = `translateY(${topBarHeight}px)`
                topBarHide.current = false
            }
        }
    }
}

export default useHeaderAnimation
