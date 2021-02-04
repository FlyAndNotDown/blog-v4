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

  // CORS (DEV)
  config.cors = {
    origin: 'https://www.kindem.xyz',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  // add your user config here
  const userConfig = {};

  return {
    ...config,
    ...userConfig,
  };
};
