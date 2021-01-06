import React from 'react';
import { Constant } from '../common/constant';
import { NavBar } from '../component/nav/nav-bar';
import { Banner } from '../component/display/banner';
import { BodyAfterBanner } from '../component/container/body-after-banner';
import { PostList } from '../component/display/post-list';
import { Footer } from '../component/display/footer';
import { Content} from '../component/container/content';
import { BackendUtils } from "../common/utils/backend";
import { Network } from "../common/utils/network";
import {Logger} from "../common/utils/logger";

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
    let response = null;
    try {
        response = await Network.getInstance().get(BackendUtils.getUrl(Constant.backendRoute.postSummariesAll));
    } catch (e) {
        Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    response = response || {};
    const data = response.data || {};

    return {
        props: data.success ? data.content : {}
    }
}

export default IndexPage;
