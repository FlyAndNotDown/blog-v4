'use strict';

const { Controller } = require('egg');

class TagController extends Controller {
  async getSummaries() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      content: {
        summaries: await ctx.model.Tag.getTagListWithPosts(),
      },
    };
  }
}

module.exports = TagController;
