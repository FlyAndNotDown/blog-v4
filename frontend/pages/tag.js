import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Footer } from '../component/display/footer';
import { Content } from '../component/container/content';
import { BlogConfig } from '../blog.config';
import { MockData } from '../common/mock/mock';
import { TagList } from '../component/display/tag-list';

function TagPage(props) {
    const tags = props.tags || [];
    const friends = props.common.friends || [];
    const user = props.common.user || {};

    return (
        <div>
            <NavBar
                user={user}
                alwaysAffixed={true}/>
            <Body>
                <Content>
                    <TagList tags={tags}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

TagPage.getInitialProps = async () => {
    return BlogConfig.useMockData ? MockData.tag : {};
};

export default TagPage;
