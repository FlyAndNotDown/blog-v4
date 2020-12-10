import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { BlogConfig } from '../blog.config';
import { MockData } from '../common/mock/mock';
import { Content } from '../component/container/content';

function AboutPage(props) {
    const user = props.common.user || {};

    return (
        <div>
            <NavBar
                user={user}
                alwaysAffixed={true}/>
            <Body>
                <Content>

                </Content>
            </Body>
        </div>
    );
}

AboutPage.getInitialProps = async () => {
    return BlogConfig.useMockData ? MockData.about : {};
};

export default AboutPage;
