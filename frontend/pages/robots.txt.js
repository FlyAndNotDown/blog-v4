import React from 'react';
import { Constant } from "../common/constant";
import { BlogConfig } from "../blog.config";

function RobotsTxtPage() {
  return null;
}

async function RobotsTxtGenerator() {
  let result = 'User-agent: *\r\n';
  result += `Sitemap: ${BlogConfig.host}${Constant.route.sitemap}`;
  return result;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/plain");
  res.write(await RobotsTxtGenerator());
  res.end();

  return {
    props: {},
  };
}

export default RobotsTxtPage;
