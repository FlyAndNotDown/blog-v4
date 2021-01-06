import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Content } from '../component/container/content';
import { Footer } from "../component/display/footer";
import { Network } from "../common/utils/network";
import { BackendUtils } from "../common/utils/backend";
import { AboutPostDetail } from "../component/display/about-post-detail";
import { Constant } from "../common/constant";
import {Logger} from "../common/utils/logger";

function AboutPage(props) {
    const source = props.source || '';
    const friends = props.common.friends || [];
    const user = props.common.user || {};

    return (
        <div>
            <NavBar
                user={user}
                alwaysAffixed={true}/>
            <Body>
                <Content>
                    <AboutPostDetail source={source}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

export async function getServerSideProps() {
    let response = null;
    try {
        response = await Network.getInstance().get(BackendUtils.getUrl(Constant.backendRoute.aboutMarkdown));
    } catch (e) {
        Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    response = response || {};
    const data = response.data || '';

    return {
        props: {
            source: data.toString(),
            common: {
                friends: [],
                user: {}
            }
        }
    }
}

export default AboutPage;
