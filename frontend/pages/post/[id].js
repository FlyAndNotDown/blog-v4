import React from 'react';
import { BlogConfig } from '../../blog.config';
import { MockData } from '../../common/mock/mock';
import { NavBar } from '../../component/nav/nav-bar';
import { Body } from '../../component/container/body';
import { Content } from '../../component/container/content';
import { Footer } from '../../component/display/footer';

function PostPage(props) {
    const id = props.id || 0;
    const name = props.name || '';
    const labels = props.labels || [];
    const content = props.content || '';
    const friends = props.common.friends || [];

    return (
        <div>
            <NavBar alwaysAffixed={true}/>
            <Body>
                <Content>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

PostPage.getInitialProps = async (context) => {
    const id = parseInt(context.query.id) || 0;
    if (BlogConfig.useMockData) {
        return id >= MockData.posts.length ? {} : MockData.posts[id];
    } else {
        return {};
    }
};

export default PostPage;