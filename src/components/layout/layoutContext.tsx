import React, { ReactElement, useMemo } from 'react';
export interface LayoutContextProps {
    children?: React.ReactNode,
    isMobile?: boolean
}
export const layoutContext = React.createContext<LayoutContextProps>({})

export default function LayoutContextProvider({
    children,
    ...restProps
}: LayoutContextProps): ReactElement {
    return (
        <layoutContext.Provider value={restProps}>
            {children}
        </layoutContext.Provider>
    )
}
