'use strict';

const model = require('../utils/model');

module.exports = app => app.model.define('corporation', model(app.Sequelize).corporation);
