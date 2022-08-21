import { useState, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'
const useDevice = (initailVal?: string) => {
    const [device, setDevice] = useState(initailVal)
    const device_mobile = useMediaQuery('(max-width: 767px)')
    const device_tablet = useMediaQuery('(max-width: 1024px)')
    useEffect(() => {
        let c_device
        if (device_mobile) {
            c_device = 'mobile'
        } else {
            c_device = device_tablet ? 'tablet' : 'desktop'
        }
        setDevice(c_device)
    }, [initailVal, device_mobile, device_tablet])

    return device
}

export default useDevice
