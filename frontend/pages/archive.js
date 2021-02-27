import React from 'react';
import { NavBar } from '../component/nav/nav-bar';
import { Body } from '../component/container/body';
import { ArchiveList } from '../component/display/archive-list';
import { Footer } from '../component/display/footer';
import { Content } from '../component/container/content';
import { Request } from "../common/utils/request";
import { Constant } from "../common/constant";
import { Header } from "../component/common/header";
import { BaiduSpiderUrlPoster } from "../common/utils/baidu-spider-url-poster";
import { BlogConfig } from "../blog.config";

function ArchivePage(props) {
  const archive = props.archive || [];

  return (
    <div>
      <Header title={`${Constant.text.archive} - ${Constant.text.siteName}`}/>
      <NavBar alwaysAffixed={true}/>
      <Body>
        <Content>
          <ArchiveList items={archive}/>
        </Content>
        <Footer/>
      </Body>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  await BaiduSpiderUrlPoster.postUrl(`${BlogConfig.host}${ctx.req.url}`);
  const data = await Request.get(Constant.backendRoute.postArchiveAll);

  return {
    props: {
      archive: data.success ? data.content.archive : [],
    }
  };
}

export default ArchivePage;
