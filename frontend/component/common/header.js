import React from 'react';
import Head from "next/head";
import { Constant } from "../../common/constant";

export function Header(props) {
  const title = props.title || '';
  const description = props.description || null;
  let keywords = props.keywords || [];
  keywords = Constant.text.baseKeywords.concat(keywords);

  const keywordsGenerator = (array) => {
    let result = '';
    for (let i = 0; i < array.length; i++) {
      result += i === array.length - 1 ? array[i] : `${array[i]},`;
    }
    return result;
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name={'robots'} content={Constant.text.siteRobotsIndexRule}/>
      <meta name={'author'} content={`${Constant.text.siteAuthor},${Constant.text.siteAuthorContact}`}/>
      <meta name={'sogou_site_verification'} content={Constant.text.sougouSiteValidationCode}/>
      {description && (<meta name={'description'} content={description}/>)}
      {keywords.length > 0 && (<meta name={'keywords'} content={keywordsGenerator(keywords)}/>)}
    </Head>
  );
}
