'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getLogin() {
    const { ctx } = this;

    const userLogin = !!ctx.session.userLogin;
    const userPk = ctx.session.userPk || -1;

    if (!(userPk > 0)) {
      ctx.body = {
        success: false,
        reason: 'bad user info in session',
      };
      return;
    }

    if (userLogin) {
      const user = ctx.model.User.findByPk(userPk);
      if (!user) {
        ctx.body = {
          success: false,
          reason: 'bad user info in session',
        };
        return;
      }

      ctx.body = {
        success: true,
        content: {
          login: true,
          info: ctx.model.User.findByPk(userPk, {
            attributes: [
              'username',
              'avatar',
            ],
          }),
        },
      };
    } else {
      ctx.body = {
        success: true,
        content: {
          login: false,
          info: null,
        },
      };
    }
  }

  async postLoginEmail() {
    const { ctx } = this;

    const email = ctx.request.body.email || '';
    const password = ctx.request.body.password || '';

    const user = ctx.model.User.getEmailUser(email);
    if (!user) {
      ctx.body = {
        result: false,
        reason: 'email is not exists',
      };
      return;
    }

    if (password !== user.password) {
      ctx.body = {
        result: false,
        reason: 'bad password',
      };
      return;
    }

    ctx.session.userLogin = true;
    ctx.session.userPk = user.pk;
    ctx.body = {
      result: true,
    };
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

    ctx.session.userLogin = false;
    ctx.session.userPk = null;
    ctx.body = {
      result: true,
    };
  }
}

module.exports = UserController;
