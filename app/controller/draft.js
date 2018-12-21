'use strict';

const Controller = require('egg').Controller;

class DraftController extends Controller {
  async createDraft() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = DraftController;
