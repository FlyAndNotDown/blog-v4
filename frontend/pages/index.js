import React from 'react';
import { Constant } from '../common/constant';
import { NavBar } from '../component/nav/nav-bar';
import { Banner } from '../component/display/banner';
import { BodyAfterBanner } from '../component/container/body-after-banner';
import { PostList } from '../component/display/post-list';
import { Footer } from '../component/display/footer';
import { Content} from '../component/container/content';
import { Request } from "../common/utils/request";

function IndexPage(props) {
    const summaries = props.summaries || [];
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
                    <PostList summaries={summaries}/>
                </Content>
                <Footer friends={friends}/>
            </BodyAfterBanner>
        </div>
    );
}

export async function getServerSideProps() {
    const data = await Request.get(Constant.backendRoute.postSummariesAll);

    return {
        props: {
            summaries: data.success ? data.content.summaries : null,
            common: {
                friends: []
            }
        }

    }
}

export default IndexPage;
