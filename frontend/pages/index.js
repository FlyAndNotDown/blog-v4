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
import { BackendUtils } from "../common/utils/backend";
import { Network } from "../common/utils/network";

function IndexPage(props) {
    console.log(props);

    const posts = props.posts || [];
    const common = props.common || {};
    const friends = common.friends || [];
    const user = common.user || {};

    return (
        <div>
            <NavBar user={user}/>
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

IndexPage.getInitialProps = async () => {
    if (BlogConfig.useMockData) {
        return MockData.index;
    }
    const { data } = await Network.getInstance().get(BackendUtils.getUrl('/backend/post/summaries/all'));
    return data;
};

export default IndexPage;
