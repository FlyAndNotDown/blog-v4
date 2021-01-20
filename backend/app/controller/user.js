'use strict';

const { Controller } = require('egg');
const { sha512 } = require('hash.js');

class UserController extends Controller {
  async getLogin() {
    const { ctx } = this;

    const userLogin = !!ctx.session.userLogin;
    const userId = ctx.session.userId || -1;

    if (!(userId > 0)) {
      ctx.body = {
        success: false,
        reason: 'session中保存的用户信息不合法',
      };
      return;
    }

    if (userLogin) {
      const user = await ctx.model.User.findByPk(userId);
      if (!user) {
        ctx.body = {
          success: false,
          reason: 'session中保存的用户信息不合法',
        };
        return;
      }

      ctx.body = {
        success: true,
        content: {
          login: true,
          info: await ctx.model.User.findByPk(userId, {
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

  async getSalt() {
    const { ctx } = this;

    const email = ctx.params.email || '';

    const user = await ctx.model.User.getEmailUser(email);
    if (!user) {
      ctx.body = {
        success: false,
        reason: '用户不存在',
      };
      return;
    }
    ctx.body = {
      success: true,
      content: {
        salt: user.salt,
      },
    };
  }

  async postValidationEmail() {
    const { ctx } = this;

    const email = ctx.request.body.email || '';

    const lastCreatedTime = ctx.session.validationCodeCreatedTime || 0;

    if (Date.now() - lastCreatedTime < 60 * 1000) {
      ctx.body = {
        success: false,
        reason: '发送过于频繁，请一分钟后重试',
      };
      return;
    }

    const result = await ctx.service.validationCode.sendValidationCode(email);
    if (result.success) {
      ctx.session.validationCode = result.validationCode;
      ctx.session.validationCodeCreatedTime = Date.now();
      ctx.body = {
        success: true,
      };
    } else {
      ctx.body = {
        success: false,
        reason: '无法发送验证码至目标邮箱',
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
        reason: '用户不存在',
      };
      return;
    }

    if (password !== user.password) {
      ctx.body = {
        success: false,
        reason: '邮箱或密码错误',
      };
      return;
    }

    await user.logSignIn();
    ctx.session.userLogin = true;
    ctx.session.userId = user.id;
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
    const validationCode = ctx.request.body.validationCode || '';

    const codeInSession = ctx.session.validationCode || '';
    const createdTimeOfCodeInSession = ctx.session.validationCodeCreatedTime || 0;

    if (validationCode !== codeInSession
      || Date.now() - createdTimeOfCodeInSession > 60 * 5 * 1000) {
      ctx.body = {
        success: false,
        reason: '验证码错误或已失效',
      };
      return;
    }

    const user = await ctx.model.User.getEmailUser(email);
    if (user != null) {
      ctx.body = {
        success: false,
        reason: '该邮箱已经注册过账户',
      };
      return;
    }

    const salt = await ctx.service.salt.generateSalt();
    const passwordWithSalt = sha512().update(`${password}${salt}`).digest('hex');

    const newUser = await ctx.model.User.createEmailUser(email, username, salt, passwordWithSalt);
    if (newUser == null) {
      ctx.body = {
        success: false,
        reason: '无法创建账户',
      };
      return;
    }
    await newUser.logSignIn();
    ctx.body = {
      success: true,
    };
  }

  async deleteLogin() {
    const { ctx } = this;

    ctx.session.userLogin = false;
    ctx.session.userId = -1;
    ctx.body = {
      result: true,
    };
  }
}

module.exports = UserController;
