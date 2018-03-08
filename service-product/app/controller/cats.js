'use strict';

const Controller = require('egg').Controller;

const createRule = {
  name: 'string',
  pid: { type: 'int', required: false },
  is_parent: { type: 'enum', values: [ 'N', 'Y' ], required: false },
  sort: { type: 'int', required: false },
  description: { type: 'string', required: false },
};

const testData = {
  "name": "电子产品",
  "is_parent": "Y",
  "sort": 1,
  "description": "个人电子产品，不包含家电"
};

class RESTController extends Controller {

  async index() {
    const { ctx } = this;
    const data = await ctx.service.cats.list(ctx.query);
    ctx.body = {
      errcode: 0,
      errmsg: 'get list success!',
      data,
    };
  }

  async create() {
    const { ctx } = this;
    ctx.validate(createRule);
    const data = await ctx.service.cats.create(ctx.request.body);
    ctx.body = {
      errcode: 0,
      errmsg: 'create success!',
      data,
    };
  }

  async show() {
    const { ctx } = this;
    const data = await ctx.service.cats.find(ctx.params.id);
    ctx.body = {
      errcode: 0,
      errmsg: 'get success!',
      data,
    };
  }

  async update() {
    const { ctx } = this;
    const body = ctx.request.body;
    const data = await ctx.service.cats.update(ctx.params.id, body);
    ctx.body = {
      errcode: 0,
      errmsg: 'update success!',
      data,
    };
  }

  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    await ctx.service.cats.del(id);
    ctx.body = {
      errcode: 0,
      errmsg: 'delete success!',
      data: { id },
    };
  }

}

module.exports = RESTController;
