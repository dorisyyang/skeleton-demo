import React, { CSSProperties} from 'react'

export type ComponentType =
  | React.ComponentType<any>
  | React.ForwardRefExoticComponent<any>
  | React.FC<any>
  | keyof React.ReactHTML;


export interface SkeletonStyleProps {
    /**
    * Skeleton baseColor
    */
    baseColor?: string
    /**
    * Skeleton highlightColor
    */
    highlightColor?: string
    /**
    * Skeleton borderRadius, set the borderRadius.
    */
    borderRadius?: string | number
    /*
    * Skeleton active, control show or hide animation, default: true
    */
    active?: boolean;
    /**
    * Skeleton animation duration
    */
    duration?: number
}

export interface SkeletonProps extends SkeletonStyleProps {
    /**
    * Skeleton count, how many lines will be generate.
    */
    count?: number;
    /*
    * Skeleton loading, true: skeleton; false: show children component
    */
    loading?: boolean; // 
    /*
    * Skeleton wrapper
    */
    wrapper?: React.FunctionComponent
    /*
    * Skeleton className
    */
    className?: string;
    /*
    * Skeleton containerClassName
    */
    containerClassName?: string;
    /*
    * Skeleton children
    */
    children?: React.ReactNode;
    /*
    * Skeleton circle, true:  border-radius: 50%
    */
    circle?: boolean;
    /**
    * Skeleton spaceBetween, space that will be generate each lines if count > 1   default: 10px
    */
    spaceBetween?: string | number,
    /**
    * Skeleton width, set the width.
    */
    width?: string | number
    /**
    * Skeleton height, set the height.
    */
    height?: string | number
    /**
     * Skeleton widthMultiple, width for each skeleton if count > 1
     */
    widthMultiple?: (string|number)[];
    /**
    * Skeleton heightMultiple, height for each skeleton if count > 1
    */
    heightMultiple?: (string|number)[];
    style?: CSSProperties;
    /**
    * Skeleton dataTestId, used for test component, default 'Skeleton',
    */
    dataTestId?: string;
    /**
    * Skeleton component, default div, can also use h3  and soon on
    */
    component?: ComponentType
}