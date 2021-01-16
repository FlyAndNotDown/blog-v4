/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607769693604_1832';

  // add your middleware config here
  config.middleware = [];

  // sequelize model config
  config.sequelize = {
    dialect: 'mysql',
    database: 'blog4',
    host: '127.0.0.1',
    port: 3306,
    username: 'production',
    password: 'production',
  };

  // add your user config here
  const userConfig = {
    emailServer: {
      client: {
        user: 'noreply@kindem.xyz',
        password: 'tjS6WAu35zJGn8Dy',
        host: 'smtp.exmail.qq.com',
        port: 465,
        ssl: true,
      },
      sender: {
        name: 'Kindem的小秘书',
        email: 'noreply@kindem.xyz',
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
