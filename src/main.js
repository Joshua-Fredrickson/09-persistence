'use strict';

const server = require('./lib/server');
const logger = require('./lib/logger');

const PORT = process.env.PORT; // eslint-disable-line

server.start(PORT, () => logger.log(logger.INFO, `MAIN: listening on ${PORT}`));
