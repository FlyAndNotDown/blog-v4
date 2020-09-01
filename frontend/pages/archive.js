import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Row, Col } from 'antd';
import { ArchiveList } from '../component/display/archive-list';
import { BlogConfig } from '../blog.config';
import { MockData } from '../common/mock/mock';
import { Footer } from '../component/display/footer';
import { Content } from '../component/container/content';

function Archive(props) {
    const archives = props.archives || [];

    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>
                <Content>
                    <ArchiveList items={archives}/>
                </Content>
                <Footer/>
            </Body>
        </div>
    );
}

Archive.getInitialProps = async () => {
    return BlogConfig.useMockData ? MockData.archive : {};
};

export default Archive;