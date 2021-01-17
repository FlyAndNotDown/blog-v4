'use strict';

const Service = require('egg').Service;

class SaltGenerator {
  static generate() {
    let result = '';
    for (let i = 0; i < 12; i++) {
      const random = Math.floor(Math.random() * 16);
      result += random.toString(16);
    }
    return result;
  }
}

class SaltService extends Service {
  async generateSalt() {
    return SaltGenerator.generate();
  }
}

module.exports = SaltService;
