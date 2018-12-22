'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const apiV1Router = app.router.namespace('/api/v1');
  const {
    controller: {
      user,
      draft,
    },
    middleware,
  } = app;
  const token = middleware.token();

  // 用户
  apiV1Router.post('/signup', user.signUp);
  apiV1Router.post('/signin', user.signIn);
  apiV1Router.get('/user/me', token, user.getMe);

  // draft
  apiV1Router.resources('/drafts', token, draft);
  // apiV1Router.put('/draft', token, draft.update);
};
