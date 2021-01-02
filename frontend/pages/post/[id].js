import React from 'react';
import { BlogConfig } from '../../blog.config';
import { MockData } from '../../common/mock/mock';
import { NavBar } from '../../component/nav/nav-bar';
import { Body } from '../../component/container/body';
import { Content } from '../../component/container/content';
import { Footer } from '../../component/display/footer';
import { PostDetail } from '../../component/display/post-detail';
import { Network } from "../../common/utils/network";
import { BackendUtils } from "../../common/utils/backend";

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
                        date={post.date}
                        tags={post.tags}
                        content={post.content}/>
                </Content>
                <Footer friends={friends}/>
            </Body>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { data } = await Network.getInstance().get(BackendUtils.getUrl(`/backend/post/id/${context.params.id}`));
    return {
        props: {
            post: data.success ? data.content.post : {},
            common: {
                friends: [],
                user: {},
            }
        }
    }
}

export default PostPage;