import React, { ReactElement, PropsWithChildren } from 'react';
import { SkeletonStyleProps } from './types'
export const SkeletonThemeContext = React.createContext<SkeletonStyleProps>({})
export type SkeletonThemeProps = PropsWithChildren<SkeletonStyleProps>
export function SkeletonTheme({
    children,
    ...styleOptions
}: SkeletonThemeProps): ReactElement {
    return (
        <SkeletonThemeContext.Provider value={styleOptions}>
            {children}
        </SkeletonThemeContext.Provider>
    )
}
