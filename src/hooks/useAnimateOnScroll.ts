import { useEffect } from 'react'

const animateCSS = (element: HTMLElement, animation: string, prefix: string = 'animate__') => {
  // We create a Promise and return it
//   new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;
    const node = element;
    if (node) {
        node.classList.add(`${prefix}animated`, animationName);
        //  When the animation ends, we clean the classes and resolve the Promise
        // const handleAnimationEnd = (event: Event) => {
        //     event.stopPropagation();
        //     node.classList.remove(`${prefix}animated`, animationName);
        //     resolve('Animation ended');
        // }
        // node.addEventListener('animationend', handleAnimationEnd, {once: true});
    }
//   })
}

const debounce = (func: Function, timeout = 6) => {
    let timerId: ReturnType<typeof setInterval>;
    return (...args: any) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

interface IAnimateConf {
    animateThreshold: number, // the specified number of pixels have come into view, trigger the animation
    scrollPollInterval: number // The frequency at which user scrolling is 'polled'
    animateName: string
}

const useAnimateOnScroll = (DEVICE: string, options: IAnimateConf = {
    animateThreshold: 10,
    scrollPollInterval: 6,
    animateName: 'slideInUp',
}) => {
    useEffect(() => {
        const checkEleIntoView = (target: any) => {
            let tPos = target.getBoundingClientRect();
            // 获取可视区宽高
            let clientHeight = window.innerHeight || document.documentElement.clientHeight;
            return tPos.top <  clientHeight - options.animateThreshold
        }
        const handleWindowScroll = debounce(() => {
            // 执行逻辑 glassess的动画
            document.querySelectorAll('.animate').forEach((ele: any) => {
                if (!ele.classList.contains('animate__animated') && checkEleIntoView(ele)) {
                    let animateName = ele.getAttribute('data-animation') ?? options.animateName
                    let animateDevice = ele.getAttribute('data-animate-device');
                    if (!animateDevice || (animateDevice && animateDevice === DEVICE)) {
                        animateCSS(ele, animateName)
                    }
                }
            })

            let scrollTop = document.documentElement.scrollTop || window.scrollY || document.body.scrollTop;
            if (DEVICE === 'desktop') {
                document.querySelectorAll('.js-lele-rotate').forEach((ele: any) => {
                    let top = ele.getBoundingClientRect().top;
                    let res = (scrollTop - top)/7;
                    ele.style.transform = `rotate(${res}deg)`;
                })
            }
            /*lele-container-five*/
            let leleFive = document.querySelector('.js-lele-container-five');
            if (leleFive) {
                let react = leleFive.getBoundingClientRect();
                if (react.top < react.height) {
                    leleFive.querySelectorAll('.js-text').forEach((ele: any) => {
                        let animateName = ele.getAttribute('data-animation');
                        if (!ele.classList.contains('animate__animated') && animateName) {
                            animateCSS(ele, animateName)
                        }
                    })
                }
            }
           
            // document.querySelector

        }, options.scrollPollInterval)
       
        handleWindowScroll()

        window.addEventListener('scroll', handleWindowScroll)
        return () => {
            window.removeEventListener('scroll', handleWindowScroll)
        }
    }, [DEVICE, options])
}

export default useAnimateOnScroll
