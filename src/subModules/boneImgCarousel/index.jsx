import './index.less';

import React, { useState } from 'react';
import { Carousel } from 'antd';

import boneImg from '../../img/1391.png';

function BoneImgCarousel(props) {
    const { clickHandler } = props;
    const fnGetimg = () => {}

    const [imgLoaded, changeImgLoaded] = useState(true);
    const imgList = [boneImg, boneImg, boneImg, boneImg];

    return (
        <div className='bone-banner' onClick={clickHandler()}>
            {
                imgLoaded && <Carousel>
                    {
                        imgList.map(img => (
                            <div>
                                <h3>
                                    <img 
                                        src={img}
                                    />
                                </h3>
                            </div>
                        ))
                    }
                </Carousel>
            }
        </div>
    )
}
export default BoneImgCarousel;