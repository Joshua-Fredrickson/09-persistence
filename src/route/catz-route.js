'use strict';

const logger = require('../lib/logger');
const Catz = require('../model/catz');
const storage = require('../lib/storage');
const response = require('../lib/response');

module.exports = function routeCatz(router) {
  router.post('/api/v1/catz', (req, res) => {
    logger.log(logger.INFO, 'ROUTE-CATZ: POST /api/v1/catz');

    try {
      const newCatz = new Catz(req.body.name, req.body.color);
      storage.create('Catz', newCatz)
        .then((catz) => {
          response.sendJson(res, 201, catz);
          return undefined;
        });
    } catch (err) {
      logger.log(logger.ERROR, `ROUTE-CATZ: There was a bad request ${err}`);
      response.sendText(res, 400, err.message);
      return undefined;
    }
    return undefined;
  });

  router.get('/api/v1/catz', (req, res) => {
    if (!req.url.query.id) {
      response.sendText(res, 404, 'your request requiress an id');
      return undefined;
    }

    storage.fetchOne('Catz', req.url.query.id)
      .then((item) => {
        response.sendJSON(res, 200, item);
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.ERROR, err, JSON.stringify(err));
        response.sendText(res, 404, 'Resource not found');
        return undefined;
      });

    storage.fetchAll('Catz')
      .then((item) => {
        response.sendJSON(res, 200, item);
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.ERROR, err, JSON.stringify(err));
        response.sendText(res, 404, 'Resource not found');
        return undefined;
      });
    return undefined;
  });

  router.delete('/api/v1/catz', (req, res) => {
    storage.delete('Catz', req.url.query.id)
      .then(() => {
        res.writeHead(204, { 'Content-Type': 'text/plain' });
        res.write('No content in the body');
        res.end();
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.ERROR, err, JSON.stringify(err));

        return undefined;
      });
    return undefined;
  });
};
