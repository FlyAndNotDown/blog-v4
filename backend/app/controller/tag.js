'use strict';

const Controller = require('egg').Controller;

class TagController extends Controller {
  async getSummaries() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }
}

module.exports = TagController;
