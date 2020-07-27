const route = {
    index: '/',
    archive: '/archive',
    tag: '/tag',
    message: '/message',
    work: '/work',
    friend: '/friend',
    about: '/about',
    post: '/post',
    login: '/user/login',
    pay: '/pay',
    ad: '/ad'
};

const text = {
    logo: 'Kindem',
    archive: '归档',
    tag: '标签',
    message: '留言',
    work: '作品',
    friend: '友链',
    about: '关于',
    login: '登录',
    menu: 'Menu',

    indexSlogan: '离开世界前，一切都是过程',
    indexSubSlogan: 'Before your death, everything in process',

    briefAvatarImgAlt: 'avatar',
    iconImgAlt: 'icon',

    footerThemeTip: 'Theme By',
    footerTheme: 'Deep-Dark',
    footerThemeLink: 'https://github.com/FlyAndNotDown/blog-v4',
    footerFrameworkTip: 'Framework by',
    footerThanksFrontendFramework: 'And-Design',
    footerThanksFrontendFrameworkLink: 'https://ant.design/index-cn',
    footerThanksApplicationFramework: 'Next.js',
    footerThanksApplicationFrameworkLink: 'https://nextjs.org/',
    footerCopyRight: '©2017-2020 Copyright',
    footerSite: 'kindem.xyz',
    footerSiteLink: 'https://kindem.xyz/',
    footerRecordation: '湘ICP备17018771号-1',
    footerRecordationLink: 'http://beian.miit.gov.cn/',
    footerGithubIconKey: 'k-github',
    footerGithubIconLink: 'https://github.com/FlyAndNotDown',
    footerNpmIconKey: 'k-npm',
    footerNpmIconLink: 'https://www.npmjs.com/~kindem',
    footerJianshuIconKey: 'k-jianshu',
    footerJianshuIconLink: 'https://www.jianshu.com/u/d498ebae7b21',
    footerZhihuIconKey: 'k-zhihu',
    footerZhihuIconLink: 'https://www.zhihu.com/people/kindem',
    footerSegmentFaultIconKey: 'k-sf',
    footerSegmentFaultIconLink: 'https://segmentfault.com/u/liuweimeng',
    footerJuejinIconKey: 'k-juejin',
    footerJuejinIconLink: 'https://juejin.im/user/5b3a3d53f265da62d21e14fe',
    footerContact: '联系站长',
    footerContactMail: 'johnkindem@qq.com',
    footerPay: '赞赏',
    footerAdvertisement: '广告合作',
    footerGetFriend: '交换友链',

    loginFormLoginTitle: '登录',
    loginFormRegisterTitle: '注册',
    loginFormLoginBtnContent: '即刻登录',
    loginFormRegisterBtnContent: '即刻注册',
    loginFormSwitchToRegisterBtnContent: '注册',
    loginFormSwitchToLoginBtnContent: '登录',
    loginFormForgetBtnContent: '忘记密码'
};

const resource = {
    indexBannerImg: '/img/index-bg.png',
    avatarImg: '/img/avatar.jpg',
    iconImg: '/img/icon.png'
};

/**
 * Constant
 * @description global constant definition
 * @author John Kindem
 * @since 2020-7-4
 */
export const Constant = {
    route: route,
    text: text,
    resource: resource,
    other: {
        navLink: [{
            name: text.archive,
            to: route.archive,
        }, {
            name: text.tag,
            to: route.tag
        }, {
            name: text.message,
            to: route.message
        }, {
            name: text.work,
            to: route.work
        }, {
            name: text.about,
            to: route.about
        }],
        navBtn: [{
            name: text.login,
            to: route.login
        }],
        footerIconLink: [{
            key: text.footerGithubIconKey,
            link: text.footerGithubIconLink
        }, {
            key: text.footerNpmIconKey,
            link: text.footerNpmIconLink
        }, {
            key: text.footerJianshuIconKey,
            link: text.footerJianshuIconLink
        }, {
            key: text.footerZhihuIconKey,
            link: text.footerZhihuIconLink
        }, {
            key: text.footerSegmentFaultIconKey,
            link: text.footerSegmentFaultIconLink
        }, {
            key: text.footerJuejinIconKey,
            link: text.footerJuejinIconLink
        }]
    }
};
