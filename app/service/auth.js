'use strict';

const Service = require('egg').Service;

class AuthService extends Service {
  /**
     * 生成token
     * @param {String} data 数据
     * @return {String} token
     */
  async createToken(data) {
    return this.app.jwt.sign(data, this.config.jwt.secret);
  }

  /**
   * 解密token
   * @param {String} token token
   * @return {String} _id 用户主键
   */
  async decodeToken(token) {
    const decode = this.app.jwt.verify(token, this.config.jwt.secret);
    console.log(decode);
    return decode._id;
  }
}

module.exports = AuthService;
