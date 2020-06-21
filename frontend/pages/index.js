import React from 'react';
import Constant from '../common/constant';
import NavBar from '../component/nav-bar';
import Banner from '../component/banner';

export default function() {
    return (
        <div>
            <NavBar/>
            <Banner
                background={Constant.indexBannerImgPath}
                slogan={Constant.indexSlogan}
                subSlogan={Constant.indexSubSlogan}/>
        </div>
    );
}
