import React from 'react';
import { BlogConfig } from '../../blog.config';
import { MockData } from '../../common/mock/mock';

function PostPage(props) {
    const id = props.id || 0;
    const name = props.name || '';
    const labels = props.labels || [];
    const content = props.content || '';

    return (
        <div></div>
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