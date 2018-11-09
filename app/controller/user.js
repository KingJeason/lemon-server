'use strict';
const validator = require('validator');
const utility = require('utility');
const uuid = require('uuid');
const Controller = require('egg').Controller;

class UserController extends Controller {

  async signUp() {
    const { ctx, service, config } = this;
    let { loginname, pass, rePass, email } = ctx.request.body;
    loginname = validator.trim(loginname || '').toLowerCase();
    email = validator.trim(email || '').toLowerCase();
    pass = validator.trim(pass || '');
    rePass = validator.trim(rePass || '');
    let msg;
    // 验证信息的正确性
    console.log(loginname, pass, rePass, email);
    if ([ loginname, pass, rePass, email ].some(item => {
      return item === '';
    })) {
      msg = '信息不完整。';
    } else if (loginname.length < 5) {
      msg = '用户名至少需要5个字符。';
    } else if (!ctx.helper.validateId(loginname)) {
      msg = '用户名不合法。';
    } else if (!validator.isEmail(email)) {
      msg = '邮箱不合法。';
    } else if (pass !== rePass) {
      msg = '两次密码输入不一致。';
    }
    if (msg) {
      ctx.status = 422;
      ctx.body = {
        success: false,
        error_msg: msg,
      };
      return;
    }
    const users = await service.user.getUsersByQuery({
      $or: [
        { loginname },
        { email },
      ],
    }, {});
    console.log(users);
    if (users.length > 0) {
      ctx.status = 422;
      ctx.body = {
        success: false,
        error_msg: '用户名或邮箱已被使用',
      };
      return;
    }

    const passhash = ctx.helper.bhash(pass);
    const avatarUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541708653056&di=e51abbcf0cdc12e09d9a1559d35adc02&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_gif%2FUPz60PwoiajgCt96vuHfO2SQPGVhaFzxsicfvhnHVIo64K1kgulbxlph4ictzrVXFW2cJjwyr18O8wfbTXIUrkHBA%2F640%3Fwx_fmt%3Dgif';
    // await service.user.newAndSave(loginname, loginname, passhash, email, avatarUrl, false);
    await service.mail.sendActiveMail(email, utility.md5(email + passhash + config.session_secret), loginname);
  }
}

module.exports = UserController;
