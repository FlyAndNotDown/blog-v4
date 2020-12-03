export default [{
    post: {
        title: 'git clone 慢的解决方法',
        time: '2020-12-1 10:30:40',
        tags: ['Git', 'Tips', '踩坑'],
        content: '# 🤔 问题\n' +
            '大家可能都遇到过对 `github` 上托管的仓库使用 `git clone` 指令奇慢无比的问题，网上很多人说使用代理来加速 `git` ，但是这也不是长久的解决办法，使用了代理，指不定哪天还要换回来，就很麻烦\n' +
            '\n' +
            '`git clone` 慢的原因其实主要是因为这条指令默认是将所有的 `git` 历史记录都克隆下来，也就是把git项目从头演变一次\n' +
            '\n' +
            '# 🍗 git clone 的浅拷贝\n' +
            '这里推荐大家使用浅拷贝来 `clone` 项目，浅拷贝的好处是不用 `clone` 项目的完整历史，而只需 `clone` 最近的一次提交，但是项目里面的文件都会完整地被下载下来，只是历史不会完全保留，如果你并不关系项目的 `git` 历史，那就完全可以使用浅拷贝来完成 `clone`\n' +
            '\n' +
            '像这样:\n' +
            '\n' +
            '```\n' +
            'git clone --depth=1 https://......\n' +
            '```\n' +
            '\n' +
            '项目克隆下来你会发现文件都在，一切都正常，但是历史却只保留了最近的一次 `commit` ，速度当然快\n',
    },
    common: {
        friends: [{
            name: '栗子木凤凰芯',
            to: 'https://chestnut-phoenix.xyz/'
        }, {
            name: '网站架构',
            to: 'http://www.architecy.com/'
        }, {
            name: '虎书博客',
            to: 'http://www.tigerbook.cn/'
        }],
        user: {
            login: true,
            info: {
                id: 1,
                username: 'Kindem',
                avatar: null
            }
        }
    }
}, {
    post: {
        title: 'git push 每次都要输入登录凭据的解决方法',
        time: '2020-7-23 03:40:55',
        tags: ['Git', 'Tips', '踩坑'],
        content: '# 🤔 问题\n' +
            '每一次使用 `git push` 命令都需要重新输入一次用户名和密码，这是一个很烦人的小问题。`Google` 之，找到了解决办法。\n' +
            '\n' +
            '# 🍗 解决办法\n' +
            '在 `git bash` 中输入：\n' +
            '\n' +
            '```\n' +
            'git config --global credential.helper store\n' +
            '```\n' +
            '\n' +
            '下一次你再在你的项目中使用\n' +
            '\n' +
            '```\n' +
            'git push\n' +
            '```\n' +
            '\n' +
            '命令的时候，你的登录凭据将会被记住，这样就不用每次push都重新输入一次用户名和密码了。\n',
    },
    common: {
        friends: [{
            name: '栗子木凤凰芯',
            to: 'https://chestnut-phoenix.xyz/'
        }, {
            name: '网站架构',
            to: 'http://www.architecy.com/'
        }, {
            name: '虎书博客',
            to: 'http://www.tigerbook.cn/'
        }],
        user: {
            login: true,
            info: {
                id: 1,
                username: 'Kindem',
                avatar: null
            }
        }
    }
}];