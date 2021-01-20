import React from 'react';
import { NavBar } from '../../component/nav/nav-bar';
import { Body } from '../../component/container/body';
import { Footer } from '../../component/display/footer';
import { Content } from '../../component/container/content';
import { TagList } from '../../component/display/tag-list';
import { Request } from "../../common/utils/request";
import { Constant } from "../../common/constant";

function TagPage(props) {
    const id = props.id || 0;
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
                    <TagList
                        initialId={id}
                        summaries={summaries}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

export async function getServerSideProps(context) {
    const data = await Request.get(Constant.backendRoute.tagSummaries);

    return {
        props: {
            id: parseInt(context.params.id),
            summaries: data.success ? data.content.summaries : [],
            common: {
                friends: []
            }
        }
    }
}

export default TagPage;
