'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async getByPk() {
    const { ctx } = this;
    const pk = ctx.params.pk;
    const post = ctx.model.Post.getPost(pk);
    ctx.body = {
      success: true,
      content: { post },
    };
  }

  async getSummaries() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      content: {
        summaries: ctx.mode.Post.getPostSummaryList(),
      },
    };
  }
}

module.exports = PostController;
