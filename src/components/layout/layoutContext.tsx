import React, { ReactElement, PropsWithChildren } from 'react';
export interface LayoutContextProps {
    DEVICE?: string
}
export const layoutContext = React.createContext<LayoutContextProps>({})

export default function LayoutContextProvider({
    children,
    ...restProps
}: PropsWithChildren<LayoutContextProps>): ReactElement {
    return (
        <layoutContext.Provider value={restProps}>
            {children}
        </layoutContext.Provider>
    )
}
