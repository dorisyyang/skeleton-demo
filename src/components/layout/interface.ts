import React from 'react'

export interface IIcon {
    src: string
    position: string
}
export interface INormalLink {
    label: string
    title: string
    url: string
    color: string
    icon?: IIcon
}

export interface IColumnLink {
    title: string
    links: INormalLink[]
    style?: 'item' | 'group'
}

export interface IImage {
    alt: string
    src: string
}

export interface IImageLink {
    url: string
    img: IImage
    title: string
    icon?: IIcon
}

/*bof footer*/
export interface IFooterData {
    title: string
    links: INormalLink[]
}

export interface FooterProps {
    data: IFooterData[]
}
/*eof footer*/

/*bof header*/
export interface INav {
    title: string
    columns: IColumnLink[]
    images: IImageLink[]
}
export interface WishlistProps {
    description: string
    img: string
    price: string
    title: string
}
export interface IHeaderData {
    nav: INav[]
    help: IColumnLink
    wishlist: WishlistProps[]
}
/*eof header*/

/*bof layout*/
export type LayoutType = 'Default' | 'Simple' | 'Custom' | undefined // undefined : 默认为Default类型

export interface CustomLayoutOpts {
    showDefaultHeader?: boolean
    showSimpleHeader?: boolean
    showFooter?: boolean
}
export interface LayoutProps {
    layoutType?: LayoutType
    customLayoutOpts?: CustomLayoutOpts
    footerData: IFooterData[]
    headerData: IHeaderData
    children?: React.ReactNode
}
/*eof layout*/

export interface FvpProps {
    showPopup?: boolean
}
