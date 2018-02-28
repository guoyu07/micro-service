'use strict';

module.exports = Sequelize => {
  const { STRING, INTEGER, DATE } = Sequelize;
  return {
    wxapp: {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      app_type: INTEGER,
      wxmch_id: INTEGER,
      name: STRING(32),
      appid: STRING(32),
      secret: STRING(32),
      access_token: STRING(32),
      expires_in: DATE,
      status: {
        type: INTEGER,
        defaultValue: 0,
      },
      created_at: DATE,
      updated_at: DATE,
    },
    wxmch: {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: STRING(32),
      mchid: STRING(32),
      secret: STRING(128),
      status: {
        type: INTEGER,
        defaultValue: 0,
      },
      created_at: DATE,
      updated_at: DATE,
    },
    wxuser: {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      appid: STRING(32),
      unionid: STRING(32),
      openid: STRING(32),
      session_key: STRING(64),
      nickname: STRING(64),
      avatar: STRING(255),
      gender: INTEGER,
      city: STRING(32),
      province: STRING(32),
      country: STRING(32),
      status: {
        type: INTEGER,
        defaultValue: 0,
      },
      created_at: DATE,
      updated_at: DATE,
    },
    wxpay: {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      appid: STRING(32),
      mch_id: STRING(32),
      device_info: STRING(32),
      body: STRING(128),
      detail: STRING(255),
      attach: STRING(128),
      out_trade_no: STRING(32),
      fee_type: STRING(16),
      total_fee: INTEGER,
      spbill_create_ip: STRING(16),
      time_start: STRING(14),
      time_expire: STRING(14),
      goods_tag: STRING(32),
      trade_type: STRING(128),
      product_id: STRING(32),
      limit_pay: STRING(32),
      openid: STRING(128),
      prepay_id: STRING(64),
      code_url: STRING(64),
      is_subscribe: STRING(1),
      trade_state: STRING(32),
      bank_type: STRING(16),
      settlement_total_fee: INTEGER,
      cash_fee: INTEGER,
      cash_fee_type: STRING(16),
      coupon_fee: INTEGER,
      coupon_count: INTEGER,
      transaction_id: STRING(32),
      time_end: STRING(14),
      trade_state_desc: STRING(255),
      status: {
        type: INTEGER,
        defaultValue: 0,
      },
      created_at: DATE,
      updated_at: DATE,
    },
  };
};
