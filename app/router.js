'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const apiV1Router = app.router.namespace('/api/v1');
  const { controller: { user } } = app;

  // 用户
  apiV1Router.post('/signup', user.signUp);
};
