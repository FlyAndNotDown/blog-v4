import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { ArchiveList } from '../component/display/archive-list';
import { Footer } from '../component/display/footer';
import { Content } from '../component/container/content';
import { Network } from "../common/utils/network";
import { BackendUtils } from "../common/utils/backend";
import { Constant } from "../common/constant";
import {Logger} from "../common/utils/logger";

function ArchivePage(props) {
    const archive = props.archive || [];
    const friends = props.common.friends || [];
    const user = props.common.user || {};

    return (
        <div>
            <NavBar
                user={user}
                alwaysAffixed={true}/>
            <Body>
                <Content>
                    <ArchiveList items={archive}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

export async function getServerSideProps() {
    let response = null;
    try {
        response = await Network.getInstance().get(BackendUtils.getUrl(Constant.backendRoute.postArchiveAll));
    } catch (e) {
        Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    response = response || {};
    const data = response.data || {};

    return {
        props: {
            archive: data.success ? data.content.archive : [],
            common: {
                friends: [],
                user: {},
            }
        }
    }
}

export default ArchivePage;