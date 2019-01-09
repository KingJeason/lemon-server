'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.name = '柠檬';

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541691764891_9048';

  // add your config here
  config.middleware = [];

  // database
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0',
    },
  };

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/lemon',
    options: {
      server: { poolSize: 20 },
      reconnectTries: 10,
      reconnectInterval: 500,
    },
  };

  exports.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
    },
  };

  config.classifies = [ '阅读', '前端', '后端', '算法', '工具', '生活' ];


  config.host = 'http://lemon-room.com';

  // 邮箱配置
  config.mail_opts = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
      user: '1503268691@qq.com',
      pass: 'vmgolvqjsowphfeg',
    },
    ignoreTLS: true,
  };

  // 七牛云上传配置
  config.qiniuToken = {
    accessKey: 'v4idqD6T6yVdroo3btZP--hvSadckyWvzwjAqWhF',
    secretKey: 'BOgvx52Gf_wSxulvAqs19KyIflAJnHjDXozFNsSi',
  };

  // jwt秘钥
  config.jwt = {
    secret: 'wsyyxy',
  };

  exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };


  return config;
};
