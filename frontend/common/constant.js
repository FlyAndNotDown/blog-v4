const route = {
  index: '/',
  archive: '/archive',
  tagSummary: '/tag/0',
  tag: '/tag',
  about: '/about',
  post: '/post/key',
  sitemap: '/sitemap.xml',

  site: 'https://www.kindem.xyz/',
  recordation: 'http://beian.miit.gov.cn/',
  github: 'https://github.com/FlyAndNotDown',
  npm: 'https://www.npmjs.com/~kindem',
  jianshu: 'https://www.jianshu.com/u/d498ebae7b21',
  zhihu: 'https://www.zhihu.com/people/kindem',
  sf: 'https://segmentfault.com/u/liuweimeng',
  juejin: 'https://juejin.im/user/5b3a3d53f265da62d21e14fe',

  blogTheme: 'https://github.com/FlyAndNotDown/blog-v4',
  blogFramework: 'https://nextjs.org/',
  blogFrontendFramework: 'https://ant.design/index-cn',

  baiduSpiderService: 'http://data.zz.baidu.com/urls?site=https://www.kindem.xyz&token=lDsJO81mKXxekZI6',

  tiStudio: 'https://tis.ac.cn/',
};

const backendRoute = {
  postArchiveAll: '/backend/post/archive/all',
  postSummariesAll: '/backend/post/summaries/all',
  postId: '/backend/post/id',
  postCount: '/backend/post/count',
  tagSummaries: '/backend/tag/summaries',
  aboutMarkdown: '/public/about.md',
};

const text = {
  siteName: 'Kindem的博客',
  siteAuthor: 'Kindem',
  siteAuthorContact: 'johnkindem@qq.com',
  siteRobotsIndexRule: 'index,follow',

  indexPageDescription: 'Kindem的博客 - 记录技术，感悟生活。',
  archivePageDescription: 'Kindem的博客 - 归档',
  tagPageDescription: 'Kindem的博客 - 标签',
  aboutPageDescription: 'Kindem的博客 - 关于',

  baseKeywords: ['kindem', 'blog', '博客'],
  indexPageKeywords: ['首页', 'index'],
  archivePageKeywords: ['归档', 'archive'],
  tagPageKeywords: ['标签', 'tag'],
  aboutPageKeywords: ['关于', 'about'],

  logo: 'Kindem',
  archive: '归档',
  tag: '标签',
  about: '关于',
  menu: 'Menu',

  indexSlogan: '眼界决定格局',
  indexSubSlogan: 'What you see, where you reached',

  briefAvatarImgAlt: 'avatar',
  iconImgAlt: 'icon',

  footerThemeTip: 'Theme By',
  footerTheme: 'Deep-Dark',
  footerFrameworkTip: 'Framework by',
  footerThanksFrontendFramework: 'And-Design',
  footerThanksApplicationFramework: 'Next.js',
  footerCopyRight: '©2017-2021 Copyright',
  footerSite: 'kindem.xyz',
  footerRecordation: '湘ICP备17018771号-1',
  footerContact: '联系站长',
  footerContactMail: 'johnkindem@qq.com',
  footerGetFriend: '交换友链',
  footerTiStudio: 'TiStudio',

  loggerTagServer: 'server',
  loggerTagCommon: 'common',

  serverError: '服务器错误',
};

const icon = {
  source: '//at.alicdn.com/t/font_849519_l662brlemx.js',
  key: {
    github: 'k-github',
    npm: 'k-npm',
    jianshu: 'k-jianshu',
    zhihu: 'k-zhihu',
    sf: 'k-sf',
    juejin: 'k-juejin',
    githubDark: 'k-github-dark',
    qqDark: 'k-qq-dark'
  }
};

const resource = {
  indexBannerImg: '/static/img/index-bg.png',
  iconImg: '/static/img/icon.png',
  iconPureImg: '/static/img/icon-pure.png'
};

/**
 * Constant
 * @description global constant definition
 * @author John Kindem
 * @since 2020-7-4
 */
export const Constant = {
  route,
  backendRoute,
  text,
  icon,
  resource
};
