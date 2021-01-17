'use strict';

const { Controller } = require('egg');

class CommentController extends Controller {
  async getList() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      content: {
        comments: await ctx.model.Comment.getCommentListWithAuthor(),
      },
    };
  }

  async post() {
    const { ctx } = this;
    const author = ctx.request.body.author || -1;
    const content = ctx.request.body.content || '';

    if (author === -1) {
      ctx.body = {
        success: false,
        reason: '用户参数错误',
      };
      return;
    }

    const comment = await ctx.model.Comment.createPost(author, content);
    if (comment === null) {
      ctx.body = {
        success: false,
        reason: '无法新建评论',
      };
      return;
    }
    ctx.body = {
      success: true,
    };
  }
}

module.exports = CommentController;
