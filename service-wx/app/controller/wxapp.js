'use strict';

const Controller = require('egg').Controller;

class WxappController extends Controller {
  async wxapps() {
    const { ctx } = this;
    const wxapps = await ctx.service.wxapps.list(ctx.query);
    ctx.body = {
      errcode: 0,
      errmsg: 'get wxapps success!',
      data: wxapps,
    };
    ctx.status = 200;
  }
  async wxapp() {
    const { ctx } = this;
    const wxapp = await ctx.service.wxapp.find(ctx.params.id);
    ctx.body = {
      errcode: 0,
      errmsg: 'get wxapp success!',
      data: wxapp,
    };
    ctx.status = 200;
  }
  async create() {
    const { ctx } = this;
    const created = await ctx.service.wxapp.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = created;
  }
}

module.exports = WxappController;
