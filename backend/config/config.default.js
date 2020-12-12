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

  // sequelize model config (DEV)
  config.sequelize = {
    dialect: 'mysql',
    database: 'blog4',
    host: '119.3.159.48',
    port: 3306,
    username: 'development',
    password: 'development',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
