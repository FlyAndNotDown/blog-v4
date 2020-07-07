import React from 'react';
import { Constant } from '../common/constant';
import { NavBar } from '../component/nav/nav-bar';
import { Banner } from '../component/display/banner';
import { BodyAfterBanner } from '../component/container/body-after-banner';
import { MockData } from '../common/mock/mock';
import { BlogConfig } from '../blog.config';
import { PostList } from '../component/display/post-list';
import { Col, Row } from 'antd';

function Index(props) {
    const posts = props.posts || [];

    return (
        <div>
            <NavBar/>
            <Banner
                background={Constant.resource.indexBannerImg}
                slogan={Constant.text.indexSlogan}
                subSlogan={Constant.text.indexSubSlogan}/>
            <BodyAfterBanner>
                <Row>
                    <Col
                        xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
                        lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 12, offset: 6 }}>
                        <PostList posts={posts}/>
                    </Col>
                </Row>
            </BodyAfterBanner>
        </div>
    );
}

Index.getInitialProps = async () => {
    return BlogConfig.useMockData ? MockData.index : {};
};

export default Index;
