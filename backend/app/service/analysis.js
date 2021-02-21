'use strict';

const { Service } = require('egg');

class AnalysisService extends Service {
  async logVisits() {
    const { ctx } = this;
    await ctx.model.Visit.logVisits(ctx.request.url);
  }
}

module.exports = AnalysisService;
