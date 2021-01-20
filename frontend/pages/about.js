import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Content } from '../component/container/content';
import { Footer } from "../component/display/footer";
import { Request } from "../common/utils/request";
import { AboutPostDetail } from "../component/display/about-post-detail";
import { Constant } from "../common/constant";

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
    const data = await Request.get(Constant.backendRoute.aboutMarkdown);

    return {
        props: {
            source: data.toString(),
            common: {
                friends: []
            }
        }
    }
}

export default AboutPage;
