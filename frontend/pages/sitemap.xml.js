import React from 'react';
import { BlogConfig } from "../blog.config";
import { Constant } from "../common/constant";
import { Request } from "../common/utils/request";

function SitemapXmlPage() {
  return null;
}

async function SitemapXmlGenerator() {
  let result = `<urlset xmlns="${BlogConfig.host}">`;

  // base page
  result += `<url><loc>${BlogConfig.host}</loc><changefreq>always</changefreq><priority>1.0</priority></url>`;
  result += `<url><loc>${BlogConfig.host}${Constant.route.archive}</loc><changefreq>always</changefreq><priority>1.0</priority></url>`;
  result += `<url><loc>${BlogConfig.host}${Constant.route.about}</loc><changefreq>always</changefreq><priority>1.0</priority></url>`;
  result += `<url><loc>${BlogConfig.host}${Constant.route.tagSummary}</loc><changefreq>always</changefreq><priority>1.0</priority></url>`;

  // pages
  const data = await Request.get(Constant.backendRoute.postCount);
  const postCount = data.success ? data.content.count : 0;
  for (let i = 1; i <= postCount; i++) {
    result += `<url><loc>${BlogConfig.host}${Constant.route.post}/${i}</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`;
  }

  result += `</urlset>`;
  return result;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.write(await SitemapXmlGenerator());
  res.end();

  return {
    props: {},
  };
}

export default SitemapXmlPage;
