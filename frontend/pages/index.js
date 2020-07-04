import React from 'react';
import Constant from '../common/constant';
import { NavBar } from '../component/nav/nav-bar';
import { Banner } from '../component/display/banner';
import { PostItem } from '../component/display/post-item';
import { BodyAfterBanner } from '../component/container/body-after-banner';
import { MockData } from '../common/mock/mock';
import { BlogConfig } from '../blog.config';
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
                        xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }} xl={{ span: 0, offset: 0 }} xxl={{ span: 10, offset: 7 }}>
                        {posts.map((post, key) => (
                            <PostItem
                                key={key}
                                title={post.title}
                                description={post.description}
                                time={post.time}
                                tags={post.tags}/>
                        ))}
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
