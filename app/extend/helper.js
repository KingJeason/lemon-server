'use strict';
const bcrypt = require('bcryptjs');

exports.validateId = str => {
  return /^[a-zA-Z0-9\-_]+$/i.test(str);
};

exports.bhash = str => {
  return bcrypt.hashSync(str, 10);
};

/**
 * 比较pass和库里的hash是否一致
 * @param {String} pass 明文密码
 * @param {String} hash 加密后密码
 * @return {Boolean} true为一致
 */
exports.comparePass = async (pass, hash) => {
  const res = await bcrypt.compare(pass, hash);
  console.log(res, 'resres');
  return res;
};
