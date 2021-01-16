'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async getById() {
    const { ctx } = this;
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

  async getArchive() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      content: {
        archive: await ctx.model.Post.getArchive(),
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
        reason: '不合法的参数',
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
