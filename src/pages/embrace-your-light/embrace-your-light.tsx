import React, { useState, useEffect, useContext, useRef, PropsWithChildren} from 'react'

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import styles from './embrace-your-light.module.scss'

import classNames from 'classnames';

import Skeleton from '../../components/skeleton'
import SkeletonList from 'src/components/list/skeleton-list'

import ListItem from 'src/components/list/list-item';

import { get } from 'src/api/createHttpRequest'

import { layoutContext } from 'src/components/layout/layoutContext' 


const EmbraceYourLight: React.FC<PropsWithChildren<PropsWithChildren<{}>>> = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { isMobile } = useContext(layoutContext)

    /*video bannner bof*/
    const [playVideo, setPlayVideo] = useState<boolean>(false);
    const videoRef  = useRef<HTMLVideoElement>(null)

    const handlePlayVideo = () => {
        if (playVideo) {
            return;
        }
        setPlayVideo(true);
        videoRef.current?.load();
        videoRef.current?.play();
    }
    /*video bannner eof*/

    useEffect(() => {
        get("/api/products")
          .then((data) => {
              if (data.code === 200) {
                  setProducts(data.data)
                  console.log('data', data.data);
                  console.log('data-10890', data.data["10890"])
              }
            //   setTimeout(() => {
                setLoading(false)
            //   }, 100)
          });
    }, []);
    

    return (
        <div className={styles["lele-container"]}>
            
            {/* top banner */}
            <div className={styles["lele-top-banner"]}>
                <picture className={styles["banner-box"]}>
                    <source media="(min-width: 768px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/top-banner.jpg"/>
                    <source media="(min-width: 300px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/top-banner-m.jpg"/>
                    <img className="lazyload" data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/top-banner.jpg" alt="LELE PONS X EYEBUYDIRECT" width="1920"/>
                </picture>
                <div className={styles["top-txt"]}>
                    <h1 className={styles["txt-box"]}>
                        <span className={styles["img-box"]}>
                            <img className="lazyload" src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/banner-title-n.svg" alt="Embrace your light" width="859" height="220"/>
                        </span>
                    </h1>
                    <p>15 new styles. Endless ways to shine.</p>
                </div>

                <span className={styles["tip"]}>Impression</span>

            </div>

            <div className={styles["top-banner-text"]}>
                <div className={styles["text-headline-wrapper"]}>
                    <div className={styles["text-box"]}>
                        <span>“embracing your light</span>
                    </div>
                    <div className={styles["text-box"]}>
                        <span>is about celebration.”</span>
                    </div>
                </div>
                <p>A collection of bold, bright, and expressive sunglasses to stand out and let your light shine  — in partnership with social media sensation and self-love advocate, Lele Pons.</p>
            </div>


            <div className={styles['list-container']}>
                {
                    <SkeletonList count={3} loading={loading}>
                        <ListItem data={products["10796"]} defaultColor="C2"/>
                        <ListItem data={products["10888"]} defaultColor="C1" showNewTag={true}/>
                        <ListItem data={products["10887"]} defaultColor="C1" showNewTag={true} newTagTopPostion={-5}/>
                    </SkeletonList>
                }
            </div>

            {/* one bof */}
            {/* model banner */}
            <div className={styles["lele-container-one"]}>
                <div className={styles["one-left"]}>
                    <div className={styles["img-box"]}>
                        <picture>
                            <source media="(min-width: 768px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-1.jpg"/>
                            <source media="(min-width: 300px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-1-m.jpg"/>
                            <img className="lazyload" data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-1.jpg" alt="Elsa / Impression"/>
                        </picture>
                        {/* {
                            !isMobile && <div className={styles["img-cover"]}></div>
                        } */}
                        
                    </div>
                </div>

                <div className={styles["one-right"]}>
                    <div className={styles["img-box"]}>
                        <picture>
                            <source media="(min-width: 768px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-2.jpg"/>
                            <source media="(min-width: 300px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-2-m.jpg"/>
                            <img className="lazyload" data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-2.jpg" alt="Elsa / Impression" />
                        </picture>
                        {/* {
                            !isMobile && <div className={styles["img-cover"]}></div>
                        } */}
                        <span className={classNames(styles['frame-name'], styles["frame-name-two"])}>Elsa / Impression</span>
                    </div>
                </div>
            </div>

            {/* model frame */}
            <div className={styles['list-container']}>
                {
                    <SkeletonList count={3} loading={loading}>
                       <ListItem data={products["10787"]} defaultColor="C1"/>
                        <ListItem data={products["10892"]} defaultColor="C2" showNewTag={true} newTagTopPostion={-15}/>
                        <ListItem data={products["10886"]} defaultColor="C2" showNewTag={true} newTagTopPostion={-15}/>
                    </SkeletonList>
                }
            </div>
            {/* one eof */}

            {/* two bof */}
            <div className={classNames(styles["lele-container-two"])}>
                <div className={styles["content-img"]}>
                    <picture className={styles["img-box"]}>
                        <source media='(min-width: 768px)' data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-3.jpg"/>
                        <source media='(min-width: 300px)' data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-3-m.jpg"/>
                        <img className='lazyload' data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-3.jpg" alt="Shine on" />
                    </picture>

                    <div className={styles["lele-svg"]}>
                        <div className={styles["svg-box"]}>
                            <img className='lazyload' data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-pons-logo.svg" alt="Lele Pons" />
                        </div>
                    </div>
                </div>

                <div className={classNames(styles["content-frame"])}>
                    <div className={styles["content-text-two"]}>
                        <h2>Shine on</h2>
                        <p className={styles["lele-frame-content-text"]}>Being like everyone else is boring! Celebrate what makes you special with bold sunglasses that shine.</p>
                    </div>

                     {/* phone 和desktop显示不同 desktop: main 和 hover的刚好相反：flip*/}
                     <SkeletonList loading={loading}>
                        <ListItem className='content-frame-item' data={products["10885"]} defaultColor="C2" showNewTag={true} isFlipImages={true}/>
                    </SkeletonList>
                </div>
               
            </div>
            {/* two eof */}


            <div className={styles['list-container']}>
                {
                    <SkeletonList count={3} loading={loading}>
                        <ListItem data={products["10898"]} defaultColor="C3" showNewTag={true} newTagTopPostion={-20}/>
                        <ListItem data={products["10889"]} defaultColor="C2" showNewTag={true} newTagTopPostion={-15}/>
                        <ListItem data={products["10804"]} defaultColor="C2"/>
                    </SkeletonList>
                }
                
            </div>

            <div className={styles["lele-video-banner"]}>
                <div className={styles["video-box"]}>
                    <video ref={videoRef} className={classNames("lazyload", styles["video-player"], {[styles["vd-c"]]: !playVideo})} data-poster="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/video-banner-cover.jpg" 
                        controls={true} muted={playVideo ? false : true} autoPlay={true} loop={true} playsInline={true} width="1920" height="1080">
                        <source type="video/mp4" src={playVideo ? "https://img.ebdcdn.com/video/collections/lele-banner-video-01-new.mp4" : "https://img.ebdcdn.com/video/collections/lele-banner-video.mp4"} />
                    </video>
                    <meta itemProp="name" content="Lele Pons X EYEBUYDIRECT" />
                    <meta itemProp="description" content="Lele Pons X EYEBUYDIRECT" />
                    <meta itemProp="contentUrl" content="https://img.ebdcdn.com/video/collections/lele-banner-video.mp4" />
                    <meta itemProp="uploadDate" content="2020-04-08T12:00:00+08:00" />
                    <meta itemProp="thumbnailUrl" content="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/video-banner-cover.jpg" />
                    <div className={classNames(styles["video-text"], {[styles["none"]]: playVideo})}>
                        <div className={styles["video-text-content"]}>
                            <h2>
                                <div className={styles["img-box"]}>
                                    <img className="lazyload" data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/video-title.svg" alt="Lele Pons X EYEBUYDIRECT" width="810" height="130"/>
                                </div>
                            </h2>
                            <span className={classNames(styles["tips-video"], styles["text-btn"])}  data-width="1280" data-height="720" data-event-cate="Video" data-event-name="Tips Index" data-event-label="Lele Pons X EYEBUYDIRECT" onClick={handlePlayVideo}>
                                <img className="lazyload" data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-play.svg" alt=""  width="21" height="24"/>
                                <span>Play video</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['list-container']}>
                {
                    <SkeletonList count={3} loading={loading}>
                       <ListItem data={products["10891"]} defaultColor="C2" showNewTag={true}/>
                        <ListItem data={products["10899"]} defaultColor="C3" showNewTag={true}/>
                        <ListItem data={products["10800"]} defaultColor="C2"/>
                    </SkeletonList>
                }
            </div>

            {/* three bof */}
            <div className={classNames(styles["lele-container-two"], styles["revert"])}>
                <div className={styles["content-img"]}>
                    <picture className={styles["img-box"]}>
                        <source media='(min-width: 768px)' data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-4.jpg"/>
                        <source media='(min-width: 300px)' data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-4-m.jpg"/>
                        <img className='lazyload' data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-4.jpg" alt="Good to glow" />
                    </picture>

                    <div className={styles["lele-svg"]}>
                        <div className={styles["svg-box"]}>
                            <img className='lazyload' data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-pons-logo.svg" alt="Lele Pons" />
                        </div>
                    </div>
                </div>

                <div className={classNames(styles["content-frame"])}>
                    <div className={styles["content-text-two"]}>
                        <h2>Good to glow</h2>
                        <p className={styles["lele-frame-content-text"]}>Bold shapes, bright colors, cool details --  pop on a pair of these fun frames to see your true self glow.</p>
                    </div>

                     {/* phone 和desktop显示不同 desktop待修改*/}
                     <SkeletonList loading={loading}>
                        <ListItem className='content-frame-item' data={products["10890"]} defaultColor="C2" showNewTag={true} isFlipImages={true}/>
                    </SkeletonList>
                </div>
               
            </div>
            {/* three eof */}
          
            <div className={styles['list-container']}>
                <SkeletonList count={3} loading={loading}>
                    <ListItem data={products["10783"]} defaultColor="C2"/>
                    <ListItem data={products["10784"]} defaultColor="C3"/>
                    <ListItem data={products["10785"]} defaultColor="C3"/>
                </SkeletonList>
            </div>

            {/* five bof */}
            <div className={styles["lele-container-five"]}>
                <div className={styles['img-box']}>    
                    <picture>
                        <source media="(min-width: 768px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-5.jpg?q=85" />
                        <source media="(min-width: 300px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-5-m.jpg?q=85" />
                        <img className="lazyload" data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-5.jpg?q=85" alt="Impression" />
                    </picture>  
                    <span className={styles['frame-name']}>Impression</span>
                </div> 
                <div className={styles['container-five-text']}>
                    <div className={styles['container-five-text-container']}>
                        <div className={styles['container-five-text-content']}>
                            <div className={styles['text-box']}>
                                <span>“being</span>    
                            </div>
                            <div className={styles['text-box']}>
                                <span>comfortable and</span>
                            </div>
                            <div className={styles['text-box']}>
                                <span>loving who you</span>
                            </div>
                            <div className={styles['text-box']}>
                                <span>are is the best</span>
                            </div>
                            <div className={styles['text-box']}>
                                <span>look of all.”</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* five eof */}


            <div className={styles['list-container']}>
                 <SkeletonList count={3} loading={loading}>
                        <ListItem data={products["10786"]} defaultColor="C3"/>
                        <ListItem data={products["10788"]} defaultColor="C3"/>
                        <ListItem data={products["10802"]} defaultColor="C2"/>
                </SkeletonList>
            </div>

            {/* six bof */}
            <div className={classNames(styles["lele-container-two"])}>
                <div className={styles["content-img"]}>
                    <picture className={styles["img-box"]}>
                        <source media='(min-width: 768px)' data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-6.jpg"/>
                        <source media='(min-width: 300px)' data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-6-m.jpg"/>
                        <img className='lazyload' data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-6.jpg" alt="Bright minded" />
                    </picture>

                    <div className={styles["lele-svg"]}>
                        <div className={styles["svg-box"]}>
                            <img className='lazyload' data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-pons-logo.svg" alt="Lele Pons" width="285" height="285"/>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles["content-frame"])}>
                    <div className={styles["content-text-two"]}>
                        <h2>Bright minded</h2>
                        <p className={styles["lele-frame-content-text"]}>Make the world a brighter place with a playful look to match your personality.</p>
                    </div>

                    {/* phone 和desktop显示不同 */}
                    <SkeletonList loading={loading}>
                        <ListItem className='content-frame-item' data={products["10799"]} defaultColor="C1" isFlipImages={true}/>
                    </SkeletonList>
                </div>
               
            </div>
            {/* six eof */}

            <div className={styles['list-container']}>
                <SkeletonList count={3} loading={loading}>
                        <ListItem data={products["10791"]} defaultColor="C2"/>
                        <ListItem data={products["10792"]} defaultColor="C1"/>
                        <ListItem data={products["10803"]} defaultColor="C3"/>
                </SkeletonList>
            </div>

            {/* seven bof */}
            <div>
                <h3 className={styles["lele-title-footer"]}>Shade? Never heard of it...</h3>
                <p className={styles["lele-text-footer"]}>Step into summer with confidence, and a colorful pair of sunglasses to complete the look.</p>
            </div>
            <div className={classNames(styles["lele-container-seven"], 'clearfix')}>
                <div className={styles["img-box"]}>        
                    <picture>
                        <source media="(min-width: 768px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-7.jpg" />
                        <source media="(min-width: 300px)" data-srcset="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-7-m.jpg" />
                        <img className="lazyload" data-src="https://img.ebdcdn.com/image/upload/static/images/collection/lelepons/lele-7.jpg" alt="Alexandra" />
                    </picture> 
                    {/* 有动画 待修改 */}
                    {/* <div className={styles["img-cover"]}></div> */}
                    <span className={classNames(styles["frame-name"], styles["frame-name-two"])}>Alexandra</span>
                </div>
            </div>
            {/* seven eof */}
           
            <div className={styles['list-container']}>
                <SkeletonList count={6} loading={loading}>
                        <ListItem data={products["10793"]} defaultColor="C3"/>
                        <ListItem data={products["10794"]} defaultColor="C3"/>
                        <ListItem data={products["10795"]} defaultColor="C3"/>
                        <ListItem data={products["10797"]} defaultColor="C3"/>
                        <ListItem data={products["10801"]} defaultColor="C3"/>
                        <ListItem data={products["10798"]} defaultColor="C1"/>
                </SkeletonList>
            </div>

            {/* footer bof */}
            <div className={styles["lele-footer"]}>
                <p>Inspired? Find more ways to embrace your light.</p>    
                <a className={classNames(styles["btn"], styles["btn-box"])} href="https://www.eyebuydirect.com/eyeglasses" title="Shop eyeglasses">Shop eyeglasses</a>
                <a className={classNames(styles["btn"], styles["btn-box"])} href="https://www.eyebuydirect.com/sunglasses" title="Shop sunglasses">Shop sunglasses</a>
            </div>
            {/* footer eof */}

        </div>
       
    )
}

export default EmbraceYourLight;