'use strict';

const Service = require('egg').Service;

class AuthService extends Service {
  /**
     * 生成token
     * @param {String} loginName 登录名
     * @return {String} token
     */
  async createToken(loginName) {
    return this.jwt.sign({ loginName }, this.config.jwt.secret);
  }
}

module.exports = AuthService;
