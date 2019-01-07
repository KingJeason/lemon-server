'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const router = app.router.namespace('/api/v1');
  const {
    controller: {
      user,
      draft,
      util,
    },
    middleware,
  } = app;
  const token = middleware.token();

  // 用户
  router.post('/signup', user.signUp);
  router.post('/signin', user.signIn);
  router.get('/user/me', token, user.getMe);

  // draft
  router.resources('/drafts', token, draft);

  // 七牛
  router.get('/qiniu/token', token, util.getQiniuToken);
};
