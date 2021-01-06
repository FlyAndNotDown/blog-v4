import React from 'react';
import { NavBar } from '../../component/nav/nav-bar';
import { Body } from '../../component/container/body';
import { Footer } from '../../component/display/footer';
import { Content } from '../../component/container/content';
import { TagList } from '../../component/display/tag-list';
import { Network } from "../../common/utils/network";
import { BackendUtils } from "../../common/utils/backend";
import { Constant } from "../../common/constant";
import { Logger } from "../../common/utils/logger";

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
    let response = null;
    try {
        response = await Network.getInstance().get(BackendUtils.getUrl(Constant.backendRoute.tagSummaries));;
    } catch (e) {
        Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    response = response || {};
    const data = response.data || {};

    return {
        props: {
            id: parseInt(context.params.id),
            summaries: data.success ? data.content.summaries : [],
            common: {
                friends: [],
                user: {},
            }
        }
    }
}

export default TagPage;
