import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Content } from '../component/container/content';
import { Footer } from "../component/display/footer";
import { Network } from "../common/utils/network";
import { BackendUtils } from "../common/utils/backend";

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
                    {source}
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

export async function getServerSideProps() {
    const { data } = await Network.getInstance().get(BackendUtils.getUrl('/public/about.md'));
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
