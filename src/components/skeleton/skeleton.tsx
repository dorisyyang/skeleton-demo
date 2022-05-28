import React, { CSSProperties, ReactElement} from 'react'
import classNames from 'classnames';
import './skeleton.scss'
import { SkeletonThemeContext } from './skeletonContext'

import { SkeletonStyleProps, SkeletonProps} from './types'
// For performance & cleanliness, don't add any inline styles unless we have to
export function styleOptionsToCssProperties({
    baseColor,
    highlightColor,
    borderRadius,
    circle,
    duration,
    active = true
}: SkeletonStyleProps & Pick<SkeletonProps, 'circle' | 'active'>): CSSProperties {
    const style: CSSProperties & Record<`${string}`, string> = {};
   
    if (typeof duration === 'number') style['--animation-duration'] = `${duration}s`
    if (!active) style['--pseudo-element-display'] = 'none'

    if (typeof borderRadius === 'string' || typeof borderRadius === 'number')
        style.borderRadius = borderRadius

    if (circle) style.borderRadius = '50%'

    if (typeof baseColor !== 'undefined') style['--base-color'] = baseColor
    if (typeof highlightColor !== 'undefined') style['--highlight-color'] = highlightColor

    return style
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
    const {
        count = 1,
        loading,
        wrapper: Wrapper,
        className,
        containerClassName,
        children,
        circle = false,
        spaceBetween = '10px',
        width,
        height,
        widthMultiple,
        heightMultiple,
        style: styleProp,
        component: Component = 'div',
        dataTestId = 'Skeleton',
        ...originalPropsStyleOptions
    } = props;

    const contextStyleOptions = React.useContext(SkeletonThemeContext)

    if (!props.hasOwnProperty('loading') || loading) {

        const elements: ReactElement[] = [];

        const cls = classNames(
            className,
            'skeleton-item')

        const styleOptions = {
            ...contextStyleOptions,
            ...originalPropsStyleOptions,
            circle,
        }

        // `styleProp` has the least priority out of everything
        const style = {
            ...styleProp,
            ...styleOptionsToCssProperties(styleOptions),
        }

        const ItemSpace = typeof spaceBetween === 'number' ? `${spaceBetween}px` : spaceBetween

        for (let i = 0; i < count; i++) {
            const widthSkeleton = widthMultiple?.length? widthMultiple[i] || width: width;
            const heightSkeleton = heightMultiple?.length? heightMultiple[i] || height: height;
            const spaceSkeleton = (i !== count - 1) ? ItemSpace: '';
            const skeletonEle = (
                <Component className={cls} style={{...style, width: widthSkeleton, height: heightSkeleton, marginBottom: spaceSkeleton}} key={i} data-testid={`${dataTestId}-${i}`}>
                    &zwnj;
                </Component>
            )
            elements.push(skeletonEle)
        }

        const content = Wrapper? elements.map((el, i) => <Wrapper key={i}>{el}</Wrapper>): elements;

        return containerClassName ? 
            <div className={containerClassName}>
                {content}
            </div>
            :
            <>
                {content}
            </>
    }
    return <>{children}</>;
}

export default Skeleton;