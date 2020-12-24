'use strict';

const Controller = require('egg').Controller;

class TagController extends Controller {
  async getSummaries() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      content: {
        summaries: ctx.model.Tag.getTagListWithPosts(),
      },
    };
  }
}

module.exports = TagController;
