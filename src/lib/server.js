
'use strict';

const http = require('http');
const logger = require('./logger');

const Router = require('./router');

const router = new Router();
require('../route/catz-route')(router);

logger.log(logger.INFO, 'ROUTER IN SERVER');

const app = http.createServer(router.route());

const server = module.exports = {};
server.start = (port, callback) => app.listen(port, callback);
server.stop = callback => app.close(callback);
