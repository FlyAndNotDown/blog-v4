import React from 'react';
import Constant from '../common/constant';
import Align from '../common/style/align';
import NavBar from '../component/nav/nav-bar';
import Banner from '../component/display/banner';
import PostItem from '../component/display/post-item';
import BodyAfterBanner from '../component/container/body-after-banner';
import { Col, Row } from 'antd';

export default function() {
    return (
        <div>
            <NavBar/>
            <Banner
                height={Align.bannerHeight}
                background={Constant.resource.indexBannerImg}
                slogan={Constant.text.indexSlogan}
                subSlogan={Constant.text.indexSubSlogan}/>
            <BodyAfterBanner offset={Align.bannerHeight}>
                <Row>
                    <Col
                        xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }} xl={{ span: 0, offset: 0 }} xxl={{ span: 10, offset: 7 }}>
                        <br/><br/>
                        <PostItem
                            title={'MacOS 搭建 OpenGL 开发环境'}
                            description={'使用 CLion IDE + GLFW3 + GLAD 搭建 MacOS OpenGL 开发环境的详细流程'}
                            time={'2020-4-21'}
                            tags={['Graphic', 'OpenGL']}/>
                    </Col>
                </Row>
            </BodyAfterBanner>
        </div>
    );
}
