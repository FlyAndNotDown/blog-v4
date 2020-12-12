'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async get() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }

  async getLogin() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }

  async postLoginEmail() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }

  async postLoginGithub() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }

  async postLoginQQ() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }

  async deleteLogin() {
    const { ctx } = this;
    // TODO
    ctx.body = {};
  }
}

module.exports = UserController;
