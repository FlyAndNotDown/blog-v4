import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { ArchiveList } from '../component/display/archive-list';
import { BlogConfig } from '../blog.config';
import { MockData } from '../common/mock/mock';
import { Footer } from '../component/display/footer';
import { Content } from '../component/container/content';

function ArchivePage(props) {
    const archives = props.archives || [];
    const friends = props.common.friends || [];

    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>
                <Content>
                    <ArchiveList items={archives}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

ArchivePage.getInitialProps = async () => {
    return BlogConfig.useMockData ? MockData.archive : {};
};

export default ArchivePage;