'use strict';

const uuid = require('uuid/v4');
const logger = require('../lib/logger');

module.exports = class {
  constructor(name, color) {
    if (!name || !color) throw new Error('POST request requires name and color');
    this.name = name;
    this.color = color;
    this.id = uuid();
    logger.log(logger.INFO, `CATZ: created a new catz ${JSON.stringify(this)}`);
  }
};
