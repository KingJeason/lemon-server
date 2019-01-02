'use strict';

const Controller = require('egg').Controller;

class DraftController extends Controller {
  async create () {
    // this.ctx.body = 'hi, egg';
    const { ctx, service } = this;
    const { user } = ctx.request; //  token解析的user
    const { markdown, previewImage, title, type } = ctx.request.body;
    const draft = await service.draft.newAndSave(title, markdown, previewImage, type, user._id);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: {
        _id: draft._id,
      },
    };
  }

  async update () {
    const { ctx, service } = this;
    const { user } = ctx.request;
    const { ...rest } = ctx.request.body;
    const { id:_id } = ctx.params;
    // 判断传过来的user和库里的draft里的userId是否一致
    const isValid = await service.draft.valideUser(user._id, _id);
    if (!isValid) {
      ctx.status = 401;
      ctx.body = {
        success: false,
        error_msg: '你是黑客么!😤',
      };
      return;
    }
    await service.draft.update(_id, { ...rest });
    ctx.status = 200;
    ctx.body = {
      success: true,
    };
  }

  async index () {
    const { ctx } = this;
    const { model: { Draft }, request: { user } } = ctx;
    console.log(user);
    const drafts = await Draft.find({ userId: user._id }).sort({ updatedAt: -1 });
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: drafts,
    };
  }

  async show () {
    const { ctx } = this;
    const _id = ctx.params.id;
    const draft = await ctx.model.Draft.findById(_id);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: draft,
    };
  }
}

module.exports = DraftController;
