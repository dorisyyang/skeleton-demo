import React, { useState, PropsWithChildren } from 'react'
import styles from '@/components/list/list-item.module.scss'
import classNames from 'classnames';
import { New } from 'src/components/icons'
import { layoutContext } from 'src/components/layout/layoutContext' 

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
    children?:React.ReactNode
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
    } = props;

    const { isMobile } = React.useContext(layoutContext);
    const curProduct = data[defaultColor][0];
    
    return (
       <div className={styles['list-item']}>

           <div className={styles['item-image']}>
                <a className={styles['event-list-link']} href={curProduct.detail_url} title={curProduct.product_name}>
                    <img className={classNames(styles['img-main'], "lazyload")} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src={generateFullImageUrl(replaceImagUrl<string>(curProduct.image_file, "gray", "white"), FRAME_SIZE_L)} alt={curProduct.product_name + ' ' + curProduct.product_type} width="600" height="300"/>
                    {
                        !isMobile && <img className={classNames(styles['img-hover'], "lazyload")} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src={generateFullImageUrl(replaceImagUrl<string>(curProduct.image_file, "gray", "white"), FRAME_SIZE_L, true)} alt={curProduct.product_name + ' ' + curProduct.product_type}/>
                    }
                    {
                        showNewTag && <New className={styles['new-tag']}/>
                    }
                </a>
           </div>
           
           <div className={classNames(styles['item-colors'], )}>
               {
                   Object.keys(data).map((key) => 
                    <div className={classNames(styles['item-color'], key === defaultColor ? styles['current-color'] : '')} key={key}>
                        <span className={styles['image-icon']}>
                            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://img.ebdcdn.com/product/color/spl8214.jpg?im=Resize,width=32,height=32,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&amp;q=85" alt="Black" title="Black" width="32" height="32"/>
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