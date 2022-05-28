import React from "react"
import { SkeletonImage as Image } from 'src/components/icons'
import classNames from 'classnames';
import { SkeletonStyleProps } from './index'
import { styleOptionsToCssProperties } from './skeleton'

export interface ImageProps extends Pick<SkeletonStyleProps, 'baseColor' | 'borderRadius'>{
    wrapperCls?: string;
    style?: React.CSSProperties;
    className?: string;
    width?: number | string;
    height?: number | string;
    fill?: string;
}
const SkeletonImage: React.FC<ImageProps> = (props) => {
    const {
        wrapperCls,
        baseColor,
        borderRadius,
        style: styleProp,
        ...rest
    } = props;

    const style = {
        ...styleProp,
        ...styleOptionsToCssProperties({baseColor, borderRadius}),
    }

    const cls = classNames(
        wrapperCls,
        'skeleton-image')
    return (
        <div className={cls} style={style}>
            <Image {...rest}/>
        </div>
    )
}

export default SkeletonImage
