const route = {
    index: '/',
    archive: '/archive',
    tag: '/tag',
    message: '/message',
    work: '/work',
    friend: '/friend',
    about: '/about',
    post: '/post',
    login: '/user/login'
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
    footerRecordationLink: 'http://beian.miit.gov.cn/'
};

const resource = {
    indexBannerImg: '/img/index-bg.png',
    avatarImg: '/img/avatar.jpg'
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
            name: text.friend,
            to: route.friend
        }, {
            name: text.about,
            to: route.about
        }],
        navBtn: [{
            name: text.login,
            to: route.login
        }]
    }
};
