import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Row, Col } from 'antd';
import { ArchiveList } from '../component/display/archive-list';
import { BlogConfig } from '../blog.config';
import { MockData } from '../common/mock/mock';
import { Footer } from '../component/display/footer';

function Archive(props) {
    const archives = props.archives || [];

    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>
                <Row>
                    <Col
                        xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}
                        lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }} xxl={{ span: 12, offset: 6 }}>
                        <ArchiveList items={archives}/>
                    </Col>
                </Row>
                <Footer/>
            </Body>
        </div>
    );
}

Archive.getInitialProps = async () => {
    return BlogConfig.useMockData ? MockData.archive : {};
};

export default Archive;