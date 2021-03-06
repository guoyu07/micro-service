'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517215126304_8672';

  // add your config here
  // config.middleware = [];
  // config.middleware = ['errors'];
  config.middleware = [ 'auth', 'errors' ];

  // config.expire_offset = 60 * 60 * 24 * 3; // 3天过期
  config.expire_offset = 60 * 3; // 3分钟过期

  const _host = 'localhost';
  config.msapi = {
    user: `${_host}:9102`,
    wx: `${_host}:9103`,
    media: `${_host}:9106`,
    track: `${_host}:9107`,
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: null,
      db: 0,
    },
  };

  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      // ignore: ctx => isInnerIp(ctx.ip),
      enable: false,
    },
  };

  // config.cors = {
  //   origin: '*',
  //   allowMethods: 'GET'
  // };

  // config.security = {
  //   domainWhiteList: ['http://localhost:9101']
  // };

  config.appid = 'wx7aacccc73ccea206';

  return config;
};
