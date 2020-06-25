import React from 'react';
import Constant from '../common/constant';
import Color from '../common/style/color';
import Align from '../common/style/align';
import NavBar from '../component/nav/nav-bar';
import Banner from '../component/display/banner';
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
                        style={{ backgroundColor: Color.test }}
                        xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }} xl={{ span: 0, offset: 0 }} xxl={{ span: 7, offset: 0 }}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Col>
                    <Col
                        style={{ backgroundColor: Color.test2 }}
                        xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }} xl={{ span: 0, offset: 0 }} xxl={{ span: 10, offset: 0 }}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Col>
                    <Col
                        style={{ backgroundColor: Color.test3 }}
                        xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }} xl={{ span: 0, offset: 0 }} xxl={{ span: 7, offset: 0 }}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Col>
                </Row>
            </BodyAfterBanner>
        </div>
    );
}
