module.exports = appInfo => {
    const config = exports = {};

    const userConfig = {
        devMode: true
    };

    config.keys = appInfo.name + '_1595069658186_8005';
    config.middleware = [];
    config.sequelize = userConfig.devMode ? {
        dialect: 'mysql',
        host: '119.3.159.48',
        port: 3306,
        database: 'blog4',
    } : {};

    return {
        ...config,
        ...userConfig,
    };
};
