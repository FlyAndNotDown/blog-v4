import React from 'react';
import { Constant } from '../common/constant';
import { NavBar } from '../component/nav/nav-bar';
import { Banner } from '../component/display/banner';
import { BodyAfterBanner } from '../component/container/body-after-banner';
import { MockData } from '../common/mock/mock';
import { BlogConfig } from '../blog.config';
import { PostList } from '../component/display/post-list';
import { Footer } from '../component/display/footer';
import { Content} from '../component/container/content';

function Index(props) {
    const posts = props.posts || [];
    const common = props.common || {};
    const friends = common.friends || [];

    return (
        <div>
            <NavBar/>
            <Banner
                background={Constant.resource.indexBannerImg}
                slogan={Constant.text.indexSlogan}
                subSlogan={Constant.text.indexSubSlogan}/>
            <BodyAfterBanner>
                <Content>
                    <PostList posts={posts}/>
                </Content>
                <Footer friends={friends}/>
            </BodyAfterBanner>
        </div>
    );
}

Index.getInitialProps = async () => {
    return BlogConfig.useMockData ? MockData.index : {};
};

export default Index;
