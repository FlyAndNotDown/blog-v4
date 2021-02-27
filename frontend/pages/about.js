import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { Content } from '../component/container/content';
import { Footer } from "../component/display/footer";
import { Request } from "../common/utils/request";
import { AboutPostDetail } from "../component/display/about-post-detail";
import { Constant } from "../common/constant";
import { Header } from "../component/common/header";
import { BaiduSpiderUrlPoster } from "../common/utils/baidu-spider-url-poster";
import { BlogConfig } from "../blog.config";

function AboutPage(props) {
  const source = props.source || '';

  return (
    <div>
      <Header title={`${Constant.text.about} - ${Constant.text.siteName}`}/>
      <NavBar alwaysAffixed={true}/>
      <Body>
        <Content>
          <AboutPostDetail source={source}/>
        </Content>
        <Footer/>
      </Body>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  await BaiduSpiderUrlPoster.postUrl(`${BlogConfig.host}${ctx.req.url}`);
  const data = await Request.get(Constant.backendRoute.aboutMarkdown);

  return {
    props: {
      source: data.toString(),
    }
  };
}

export default AboutPage;
