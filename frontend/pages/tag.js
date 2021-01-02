import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Footer } from '../component/display/footer';
import { Content } from '../component/container/content';
import { TagList } from '../component/display/tag-list';
import { Network } from "../common/utils/network";
import { BackendUtils } from "../common/utils/backend";

function TagPage(props) {
    const summaries = props.summaries || [];
    const friends = props.common.friends || [];
    const user = props.common.user || {};

    return (
        <div>
            <NavBar
                user={user}
                alwaysAffixed={true}/>
            <Body>
                <Content>
                    <TagList summaries={summaries}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

export async function getServerSideProps() {
    const { data } = await Network.getInstance().get(BackendUtils.getUrl('/backend/tag/summaries'));
    return {
        props: {
            summaries: data.success ? data.content.summaries : {},
            common: {
                friends: [],
                user: {},
            }
        }
    }
}

export default TagPage;
