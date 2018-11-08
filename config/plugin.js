'use strict';

// had enabled by egg
// exports.static = true;
exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};
