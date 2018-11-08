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


  return config;
};
