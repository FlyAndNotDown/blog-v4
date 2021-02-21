'use strict';

const { Controller } = require('egg');

class TagController extends Controller {
  async getSummaries() {
    const { ctx } = this;

    // for analysis
    await ctx.service.analysis.logVisits();

    ctx.body = {
      success: true,
      content: {
        summaries: await ctx.model.Tag.getTagListWithPosts(),
      },
    };
  }
}

module.exports = TagController;
