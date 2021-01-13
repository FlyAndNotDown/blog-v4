'use strict';

const Service = require('egg').Service;
const SMTPClient = require('emailjs').SMTPClient;

class ValidationCodeGenerator {
  static generate() {
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += Math.floor(Math.random()*10).toString();
    }
    return result;
  }
}

class ValidationCodeService extends Service {
  async sendValidationCode(email) {
    const { ctx } = this;

    const client = new SMTPClient(ctx.app.config.emailServer.client);
    const validationCode = ValidationCodeGenerator.generate();
    try {
      await client.sendAsync({
        text: `你的验证码，请在五分钟内使用：${validationCode}`,
        from: `${ctx.app.config.emailServer.sender.name} <${ctx.app.config.emailServer.sender.email}>`,
        to: email,
        subject: 'Kindem的博客-验证码',
      });
      return {
        success: true,
        validationCode,
      };
    } catch (e) {
      return {
        success: false,
      };
    }
  }
}

module.exports = ValidationCodeService;
