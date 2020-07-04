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
    indexSubSlogan: 'Before your death, everything in process'
};

const resource = {
    indexBannerImg: '/img/index-bg.png'
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
