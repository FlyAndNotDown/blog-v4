'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async getByPk() {
    const { ctx } = this;
    const pk = ctx.params.pk || -1;
    const post = await ctx.model.Post.getPost(pk);
    if (post === null) {
      ctx.body = {
        success: false,
        reason: 'bad pk',
      };
      return;
    }
    ctx.body = {
      success: true,
      content: { post },
    };
  }

  async getCount() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      content: {
        count: await ctx.model.Post.count(),
      },
    };
  }

  async getSummaries() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      content: {
        summaries: await ctx.model.Post.getPostSummaryList(),
      },
    };
  }

  async getSummariesWithRange() {
    const { ctx } = this;
    const pkBegin = ctx.params.pkBegin || -1;
    const pkEnd = ctx.params.pkEnd || -1;
    if (pkBegin < 0 || pkEnd < 0 || pkBegin > pkEnd) {
      ctx.body = {
        success: false,
        reason: 'bad params',
      };
      return;
    }
    ctx.body = {
      success: true,
      content: {
        summaries: await ctx.model.Post.getPostSummaryListByRange(pkBegin, pkEnd),
      },
    };
  }
}

module.exports = PostController;
