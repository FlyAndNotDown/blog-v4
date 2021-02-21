'use strict';

const { Controller } = require('egg');

class PostController extends Controller {
  async getById() {
    const { ctx } = this;

    // for analysis
    await ctx.service.analysis.logVisits();

    const id = ctx.params.id || -1;
    const post = await ctx.model.Post.getPostById(id);
    if (post === null) {
      ctx.body = {
        success: false,
        reason: '不正确的id',
      };
      return;
    }
    ctx.body = {
      success: true,
      content: { post },
    };
  }

  async getSummaries() {
    const { ctx } = this;

    // for analysis
    await ctx.service.analysis.logVisits();

    ctx.body = {
      success: true,
      content: {
        summaries: await ctx.model.Post.getPostSummaryList(),
      },
    };
  }

  async getArchive() {
    const { ctx } = this;

    // for analysis
    await ctx.service.analysis.logVisits();

    ctx.body = {
      success: true,
      content: {
        archive: await ctx.model.Post.getArchive(),
      },
    };
  }
}

module.exports = PostController;
