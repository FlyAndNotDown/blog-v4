import React from 'react';
import { NavBar } from '../../component/nav/nav-bar';
import { Body } from '../../component/container/body';
import { Footer } from '../../component/display/footer';
import { Content } from '../../component/container/content';
import { TagList } from '../../component/display/tag-list';
import { Request } from "../../common/utils/request";
import { Constant } from "../../common/constant";
import { Header } from "../../component/common/header";
import { BaiduSpiderUrlPoster } from "../../common/utils/baidu-spider-url-poster";
import { BlogConfig } from "../../blog.config";

function TagPage(props) {
  const id = props.id || 0;
  const summaries = props.summaries || [];

  return (
    <div>
      <Header title={`${Constant.text.tag} - ${Constant.text.siteName}`}/>
      <NavBar alwaysAffixed={true}/>
      <Body>
        <Content>
          <TagList
            initialId={id}
            summaries={summaries}/>
        </Content>
        <Footer/>
      </Body>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  await BaiduSpiderUrlPoster.postUrl(`${BlogConfig.host}${ctx.req.url}`);
  const data = await Request.get(Constant.backendRoute.tagSummaries);

  return {
    props: {
      id: parseInt(ctx.params.id),
      summaries: data.success ? data.content.summaries : [],
    }
  };
}

export default TagPage;
