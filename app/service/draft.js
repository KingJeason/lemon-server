'use strict';
const Service = require('egg').Service;
const mongoose = require('mongoose');

class DraftService extends Service {
  /**
           *
           * @param {String} title 文章标题
           * @param {String} markdown markdown内容
           * @param {String} previewImage 背景图的url
           * @param {String} type markdown/富文本
           * @param {ObjectId} userId userid
           * @return {Promise} 承接draft的Promise对象
           */
  async newAndSave(title, markdown, previewImage, type, userId) {
    const { Draft } = this.ctx.model;
    const draft = new Draft();
    draft.title = title;
    draft.markdown = markdown;
    if (previewImage) {
      draft.previewImage = previewImage;
    }
    draft.type = type;
    draft.userId = userId;
    return draft.save();
  }

  /**
    *
    * @param {String} tokenId token里的id
    * @param {String} _id draft实例的id
    * @return {Boolean} @true 一致 @false 不一致
    */
  async valideUser(tokenId, _id) {
    const { Draft } = this.ctx.model;
    const draft = await Draft.findById(_id);
    console.log(draft, '123123123');
    // console.log(mongoose.Types.ObjectId(draft.userId).toString(), tokenId);
    return mongoose.Types.ObjectId(draft.userId).toString() === mongoose.Types.ObjectId(tokenId).toString();
  }

  async update(_id, obj) {
    const { Draft } = this.ctx.model;
    console.log(obj, 'obj', _id);
    await Draft.findByIdAndUpdate(_id, obj);

  }
}
module.exports = DraftService;
