import React from 'react';
import { NavBar } from '../../../component/nav/nav-bar';
import { Body } from '../../../component/container/body';
import { Content } from '../../../component/container/content';
import { Footer } from '../../../component/display/footer';
import { PostDetail } from '../../../component/display/post-detail';
import { Request } from "../../../common/utils/request";
import { Constant } from "../../../common/constant";
import { Header } from "../../../component/common/header";
import { BaiduSpiderUrlPoster } from "../../../common/utils/baidu-spider-url-poster";
import { BlogConfig } from "../../../blog.config";

function PostPage(props) {
  const post = props.post || {};

  return (
    <div>
      <Header title={`${post.title} - ${Constant.text.siteName}`}/>
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
        <Footer/>
      </Body>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  await BaiduSpiderUrlPoster.postUrl(`${BlogConfig.host}${ctx.req.url}`);
  const data = await Request.get(`${Constant.backendRoute.postId}/${ctx.params.id}`);

  return {
    props: {
      post: data.success ? data.content.post : {},
    }
  };
}

export default PostPage;
