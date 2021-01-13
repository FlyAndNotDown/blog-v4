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
      const user = await ctx.model.User.findByPk(userPk);
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
          info: await ctx.model.User.findByPk(userPk, {
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

  async postValidationEmail() {
    const { ctx } = this;

    const email = ctx.request.body.email || '';

    const result = await ctx.service.validationCode.sendValidationCode(email);
    if (result.success) {
      ctx.session.validationCode = {
        value: result.validationCode,
        createAt: new Date(),
      };
      ctx.body = {
        success: true,
      };
    } else {
      ctx.body = {
        success: false,
        reason: 'failed to send email',
      };
    }
  }

  async postLoginEmail() {
    const { ctx } = this;

    const email = ctx.request.body.email || '';
    const password = ctx.request.body.password || '';

    const user = await ctx.model.User.getEmailUser(email);
    if (!user) {
      ctx.body = {
        success: false,
        reason: 'email is not exists',
      };
      return;
    }

    if (password !== user.password) {
      ctx.body = {
        success: false,
        reason: 'bad password',
      };
      return;
    }

    await user.logSignIn();
    ctx.session.userLogin = true;
    ctx.session.userPk = user.pk;
    ctx.body = {
      success: true,
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

  async postRegisterEmail() {
    const { ctx } = this;

    const email = ctx.request.body.email || '';
    const username = ctx.request.body.username || '';
    const password = ctx.request.body.password || '';

    const user = await ctx.model.User.getEmailUser(email);
    if (user != null) {
      ctx.body = {
        success: false,
        reason: 'user has already exists',
      };
      return;
    }

    const newUser = await ctx.model.User.createEmailUser(email, username, password);
    if (newUser == null) {
      ctx.body = {
        success: false,
        reason: 'failed to create user',
      };
      return;
    }
    ctx.body = {
      success: true,
    };
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
