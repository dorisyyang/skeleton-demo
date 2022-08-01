import React, { useState, useMemo } from 'react'
import styles from '@/components/list/list-item.module.scss'
import classNames from 'classnames';
import { New } from 'src/components/icons'
import { layoutContext } from 'src/components/layout/layoutContext'
import LazyLoad from 'react-lazyload';

export interface IProductItem {
    model_id: string,
    product_id: string,
    product_name: string,
    product_color_code: string,
    product_color: string,
    product_type: string,
    product_off: string,
    product_price: number,
    product_normal_price?: number,
    product_image_icon: string
    detail_url: string,
    image_file: string,
    instock?: number | boolean,
    [key: string]: any
}


export interface IProduct {
    [key: string] : IProductItem[]
}


export interface ListItemProps {
    data: IProduct,
    defaultColor: string,
    showNewTag?: boolean,
    newTagTopPostion?: number, // when showNewTag is true，can set newTag top position
    isFlipImages?: boolean, // flip noraml and hover img
    children?:React.ReactNode,
    className?: string
}

const FRAME_SIZE_S = '280x140';
const FRAME_SIZE_M = '360x180';
const FRAME_SIZE_L = '600x300';

const COLOR_ICON_L = '80x80';
const COLOR_ICON_M = '60x60';
const COLOR_ICON_S = '32x32';
const COLOR_ICON_XS = '8x8';

const Image_CDN_URL = 'https://img.ebdcdn.com/';

function replaceImagUrl<T extends string | Array<string>> (url: string, searchValue: T,  replaceValue: T) : string{
    let ImgUrl = url;
    if (typeof searchValue === 'string') {
        ImgUrl = ImgUrl.replace(searchValue, replaceValue as string)
    } else {
        searchValue.forEach((item: string, index: number) => {
            ImgUrl = ImgUrl.replace(item, replaceValue[index])
        })
    }
    return ImgUrl
}

function generateFullImageUrl(url: string, size?: string, quality?: boolean): string{
    let suffix = '';
    if (size) {
        let [width, height] = size.split('x');
        suffix = `?im=Resize,width=${width},height=${height},aspect=fill;UnsharpMask,sigma=1.0,gain=1.0`;
        suffix += quality ? '&q=85' : '';
    }
    return Image_CDN_URL +  url + suffix;
}

const ListItem: React.FC<ListItemProps> = (props) => {
    const {
        data,
        defaultColor = "C1",
        showNewTag = false,
        newTagTopPostion = 0,
        isFlipImages = false,
        className,
    } = props;

    const { isMobile } = React.useContext(layoutContext);

    const [curColor, setCurColor] = useState(defaultColor)

    const curProduct = useMemo(() => {
        return data[curColor][0]
    }, [curColor])

    const searchAndReplaceValue = isFlipImages ? [["gray"], ["white"]] : [["gray", "_3"], ["white", "_1"]]
    
    return (
       <div className={classNames(styles['list-item'], className)}>
           <div className={styles['item-image']}>
                <a className={styles['event-list-link']} href={curProduct.detail_url} title={curProduct.product_name}>
                    <LazyLoad>
                        <img className={classNames(styles['img-main'])} 
                            src={generateFullImageUrl(replaceImagUrl<string[]>(curProduct.image_file, (!isFlipImages ? ["gray"] : ["gray", "_3"]), (!isFlipImages ? ["white"] : ["white", "_1"])), FRAME_SIZE_L, true)} 
                            alt={curProduct.product_name + ' ' + curProduct.product_type} width="600" height="300"/>
                    </LazyLoad>
                    {
                        !isMobile && 
                        <LazyLoad>
                            <img className={classNames(styles['img-hover'])} 
                            src={generateFullImageUrl(replaceImagUrl<string[]>(curProduct.image_file, (!isFlipImages ? ["gray", "_3"] : ["gray"]), (!isFlipImages ? ["white", "_1"] :  ["white"])), FRAME_SIZE_L, true)} 
                            alt={curProduct.product_name + ' ' + curProduct.product_type} width="600" height="300"/>
                        </LazyLoad>
                        
                    }
                </a>
                {
                  showNewTag && <New className={styles['new-tag']} style={{top: `${newTagTopPostion}px`}}/>
                }
           </div>
           
           <div className={classNames(styles['item-colors'], )}>
               {
                   Object.keys(data).map((key) => 
                    <div className={classNames(styles['item-color'], key === curColor ? styles['current-color'] : '')} key={key} onClick={() => {setCurColor(key)}}>
                        <span className={styles['image-icon']}>
                            <LazyLoad>
                                <img src={generateFullImageUrl(data[key][0].product_image_icon, COLOR_ICON_S, true)} alt={curProduct.product_color} title={curProduct.product_color} width="32" height="32"/>
                            </LazyLoad>
                        </span>
                    </div>
                   )
               }
           </div>

           <div className={styles['item-info']}>
                <a href={curProduct.detail_url}>
                    <span className={styles['name']}>{curProduct.product_name}</span>
                    <span className={styles['item-price']}>
                        <span className={classNames(styles['normal-price'], styles['price-symbol'])}>${curProduct.product_normal_price}</span>
                    </span>
                    {
                        curProduct.instock && curProduct.instock < 1? <p className="out-of-stock">Out of stock</p> : null
                    }
                    <p className={styles['item-current-color']}>{curProduct.product_color}</p>
                 </a>
           </div>
       </div>
    )
}

export default ListItem;