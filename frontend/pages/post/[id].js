import React from 'react';
import { NavBar } from '../../component/nav/nav-bar';
import { Body } from '../../component/container/body';
import { Content } from '../../component/container/content';
import { Footer } from '../../component/display/footer';
import { PostDetail } from '../../component/display/post-detail';
import { Network } from "../../common/utils/network";
import { BackendUtils } from "../../common/utils/backend";
import { Constant } from "../../common/constant";
import { Logger } from "../../common/utils/logger";

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
    let response = null;
    try {
        response = await Network.getInstance().get(BackendUtils.getUrl(`${Constant.backendRoute.postId}/${context.params.id}`));
    } catch (e) {
        Logger.printProduct(Constant.text.loggerTagServer, Constant.text.serverError);
    }
    response = response || {};
    const data = response.data || {};

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