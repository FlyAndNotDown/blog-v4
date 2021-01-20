import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { ArchiveList } from '../component/display/archive-list';
import { Footer } from '../component/display/footer';
import { Content } from '../component/container/content';
import { Request } from "../common/utils/request";
import { Constant } from "../common/constant";

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
    const data = await Request.get(Constant.backendRoute.postArchiveAll);

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
