'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  async getList() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }

  async post() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }
}

module.exports = CommentController;
