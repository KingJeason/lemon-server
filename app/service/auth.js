'use strict';

const Service = require('egg').Service;

class AuthService extends Service {
  /**
     * 生成token
     * @param {String} id 登录名
     * @return {String} token
     */
  async createToken(id) {
    return this.app.jwt.sign({ id }, this.config.jwt.secret);
  }
}

module.exports = AuthService;
