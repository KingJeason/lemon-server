'use strict';

const Controller = require('egg').Controller;
const qiniu = require('qiniu');
class UtilController extends Controller {

  // 七牛服务器端生成token返回给用户端
  // https://developer.qiniu.com/kodo/sdk/1289/nodejs
  async getQiniuToken() {
    const { ctx } = this;
    const { qiniuToken: { accessKey, secretKey } } = this.config;
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
      scope: 'lemon',
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    ctx.body = {
      success: true,
      data: uploadToken,
    };
  }
}

module.exports = UtilController;
