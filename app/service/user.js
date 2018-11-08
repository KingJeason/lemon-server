'use strict';

const utility = require('utility');
const uuid = require('uuid/v4');
const Service = require('egg').Service;

class UserService extends Service {

  /*
   * 根据关键字，获取一组用户
   * Callback:
   * - err, 数据库异常
   * - users, 用户列表
   * @param {String} query 关键字
   * @param {Object} opt 选项
   * @return {Promise[users]} 承载用户列表的 Promise 对象
   */
  getUsersByQuery(query, opt) {
    return this.ctx.model.User.find(query, '', opt).exec();
  }
  /**
   *
   * @param {String} name name
   * @param {String} loginname 登录名
   * @param {String} pass 密码
   * @param {String} email 邮箱
   * @param {String} avatar_url 头像地址
   * @param {Boolean} active 是否激活
   * @return {Boolean} void
   */
  newAndSave(name, loginname, pass, email, avatar_url, active) {
    const { User } = this.ctx.model;
    const user = new User();
    user.name = loginname;
    user.loginname = loginname;
    user.pass = pass;
    user.email = email;
    user.avatar = avatar_url;
    user.active = active || false;
    user.accessToken = uuid();
    console.log(user);
    return user.save();
  }
}

module.exports = UserService;
