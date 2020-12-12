'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async getByPk() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }

  async getSummaries() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }
}

module.exports = PostController;
