import React from 'react';
import { BlogConfig } from '../../blog.config';
import { MockData } from '../../common/mock/mock';
import { NavBar } from '../../component/nav/nav-bar';
import { Body } from '../../component/container/body';
import { Content } from '../../component/container/content';
import { Footer } from '../../component/display/footer';
import { PostDetail } from '../../component/display/post-detail';
import Axios from "axios";
import {BackendUtils} from "../../common/utils/backend";

function PostPage(props) {
    const post = props.post || {};
    const friends = props.common.friends || [];
    const user = props.common.user || {};

    return (
        <div>
            <NavBar
                user={user}
                alwaysAffixed={true}/>
            <Body>
                <Content>
                    <PostDetail
                        id={post.id}
                        title={post.title}
                        time={post.time}
                        tags={post.tags}
                        content={post.content}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

if (BlogConfig.useMockData) {
    PostPage.getInitialProps = async (context) => {
        const id = parseInt(context.query.id) || 0;
        if (BlogConfig.useMockData) {
            return id >= MockData.posts.length ? {} : MockData.posts[id];
        } else {
            return {};
        }
    };
} else {
    PostPage.getServerSideProps = async (context) => {
        const id = parseInt(context.query.id) || 0;
        const { data } = await Axios.get(BackendUtils.getUrl(`/backend/post/pk/${id}`));
        return data.success ? {
            post: {
                title: data.content.post.name,
                time: data.content.post.created_at,
                tags: data.content.post.tags.map(tag => tag.name),
                content: data.content.post.content
            }
        } : {};
    }
}

export default PostPage;