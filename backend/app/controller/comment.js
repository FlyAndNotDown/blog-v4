'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  async getList() {
    const { ctx } = this;
    ctx.body = {
      success: true,
      content: {
        comments: ctx.model.Comment.getCommentListWithAuthor(),
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
        reason: 'bad author',
      };
      return;
    }

    const comment = ctx.model.Comment.createPost(author, content);
    if (comment === null) {
      // TODO
    }
  }
}

module.exports = CommentController;
