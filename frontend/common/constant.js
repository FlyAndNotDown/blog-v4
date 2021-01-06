const route = {
    index: '/',
    archive: '/archive',
    tagSummary: '/tag/0',
    tag: '/tag',
    message: '/message',
    about: '/about',
    post: '/post',
    login: '/user/login',
    pay: '/pay',
    ad: '/ad',

    site: 'https://kindem.xyz/',
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

    oauthGithub: '',
    oauthQQ: ''
};

const text = {
    logo: 'Kindem',
    archive: '归档',
    tag: '标签',
    message: '留言',
    work: '作品',
    about: '关于',
    login: '登录',
    logout: '注销',
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
    footerCopyRight: '©2017-2020 Copyright',
    footerSite: 'kindem.xyz',
    footerRecordation: '湘ICP备17018771号-1',
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
    loginFormForgetBtnContent: '忘记密码',
    loginFormEmailPlaceholder: '邮箱',
    loginFormPasswordPlaceholder: '密码',
    loginFormRepeatPlaceholder: '重复密码',
    loginFormValidationCodePlaceHolder: '邮箱验证码',
    loginFormFetchValidationCode: '获取',

    messagePageLoginButton: '登录以留言',
    messageFormPlaceholder: '说点什么吧~~',
    messageFormSendMessageButton: '发表留言',
    messageListTitle: '留言板',

    serverError: '服务器错误',
    failedToLogin: '用户名或密码错误',
    loginSuccessfully: '登录成功，将为您跳转'
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
    iconPureImg: '/static/img/icon-pure.png',
    aboutMarkdownSource: '/static/about.md'
};

const format = {
    momentFormat: 'YYYY-MM-DD hh:mm:ss'
};

/**
 * Constant
 * @description global constant definition
 * @author John Kindem
 * @since 2020-7-4
 */
export const Constant = {
    route,
    text,
    icon,
    resource,
    format
};
