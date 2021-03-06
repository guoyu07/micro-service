'use strict';

const Service = require('egg').Service;

class AuthWx extends Service {

  async findOne(options) {
    const { ctx } = this;
    return await ctx.model.AuthWx.findOne({ where: options });
  }

  async find(id) {
    const auth = await this.ctx.model.AuthWx.findById(id);
    if (!auth) {
      this.ctx.throw(404, 'auth not found');
    }
    return auth;
  }

  async create({ user_id, wxuser_id }) {
    const verify_time = Date.now();
    const expire_time = verify_time + 1000 * 60 * 60 * 24 * 365; // 一年过期
    return this.ctx.model.AuthWx.create({
      user_id,
      wxuser_id,
      verify_time,
      expire_time,
    });
  }

}

module.exports = AuthWx;
