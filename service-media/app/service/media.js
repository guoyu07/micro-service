'use strict';

const Service = require('egg').Service;

class RESTService extends Service {

  async list({ offset = 0, limit = 10, order_by = 'created_at', order = 'ASC' }) {
    return this.ctx.model.Media.findAndCountAll({
      offset,
      limit,
      order: [[ order_by, order.toUpperCase() ]],
    });
  }

  async find(id) {
    const res = await this.ctx.model.Media.findById(id);
    if (!res) {
      this.ctx.throw(404, 'Media not found');
    }
    return res;
  }

  async findOne(options) {
    return await this.ctx.model.Media.findOne({ where: options });
  }

  async create(params) {
    return this.ctx.model.Media.create(params);
  }

  async update(id, updates) {
    const res = await this.ctx.model.Media.findById(id);
    if (!res) {
      this.ctx.throw(404, 'Media not found');
    }
    return res.update(updates);
  }

  async del(id) {
    const res = await this.ctx.model.Media.findById(id);
    if (!res) {
      this.ctx.throw(404, 'Media not found');
    }
    return res.destroy();
  }

}

module.exports = RESTService;
