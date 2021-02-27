import React from 'react';
import { Constant } from '../common/constant';
import { NavBar } from '../component/nav/nav-bar';
import { Banner } from '../component/display/banner';
import { BodyAfterBanner } from '../component/container/body-after-banner';
import { PostList } from '../component/display/post-list';
import { Footer } from '../component/display/footer';
import { Content} from '../component/container/content';
import { Request } from '../common/utils/request';
import { Header } from '../component/common/header';
import { BaiduSpiderUrlPoster } from "../common/utils/baidu-spider-url-poster";
import { BlogConfig } from "../blog.config";

function IndexPage(props) {
  const summaries = props.summaries || [];

  return (
    <div>
      <Header title={Constant.text.siteName}/>
      <NavBar/>
      <Banner
        background={Constant.resource.indexBannerImg}
        slogan={Constant.text.indexSlogan}
        subSlogan={Constant.text.indexSubSlogan}/>
      <BodyAfterBanner>
        <Content>
          <PostList summaries={summaries}/>
        </Content>
        <Footer/>
      </BodyAfterBanner>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  await BaiduSpiderUrlPoster.postUrl(`${BlogConfig.host}${ctx.req.url}`);
  const data = await Request.get(Constant.backendRoute.postSummariesAll);

  return {
    props: {
      summaries: data.success ? data.content.summaries : null,
    }
  };
}

export default IndexPage;
