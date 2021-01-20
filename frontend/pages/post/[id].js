import React from 'react';
import { NavBar } from '../../component/nav/nav-bar';
import { Body } from '../../component/container/body';
import { Content } from '../../component/container/content';
import { Footer } from '../../component/display/footer';
import { PostDetail } from '../../component/display/post-detail';
import { Request } from "../../common/utils/request";
import { Constant } from "../../common/constant";

function PostPage(props) {
    const post = props.post || {};
    const friends = props.common.friends || [];

    return (
        <div>
            <NavBar alwaysAffixed={true}/>
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
    const data = await Request.get(`${Constant.backendRoute.postId}/${context.params.id}`);

    return {
        props: {
            post: data.success ? data.content.post : {},
            common: {
                friends: []
            }
        }
    }
}

export default PostPage;
