'use strict';

const logger = require('../lib/logger');
const Catz = require('../model/catz');
const storage = require('../lib/storage');
const response = require('../lib/response');

module.exports = function routeCatz(router) {
  router.post('/api/v1/catz', (req, res) => {
    logger.log(logger.INFO, 'CATZ-ROUTE: POST /api/v1/catz');

    try {
      const newCatz = new Catz(req.body., req.body.content);
      storage.create('Catz', newCatz)
        .then((catz) => {
          response.sendJSON(res, 201, catz);
          return undefined;
        });
    } catch (err) {
      logger.log(logger.ERROR, `CATZ-ROUTE: There was a bad request ${err}`);
      response.sendText(res, 400, 'error bad request');
      return undefined;
    }
    return undefined;
  });

  router.get('/api/v1/note', (req, res) => {
    if (req.url.query.id) {
      storage.fetchOne('Note', req.url.query.id)
        .then((item) => {
          response.sendJSON(res, 200, item);
        })
        .catch((err) => {
          logger.log(logger.ERROR, err, JSON.stringify(err));

          response.sendText(res, 404, err.message);
        });
    } else {
      storage.fetchAll('Note')
        .then((item) => {
          response.sendJSON(res, 200, item);
        })
        .catch((err) => {
          logger.log(logger.ERROR, err, JSON.stringify(err));
          response.sendText(res, 404, err.message);
        });
    }
  });
  router.delete('/api/v1/note', (req, res) => {
    storage.delete('Note', req.url.query.id)
      .then(() => {
        response.sendText(res, 204, 'No content in the body');
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.ERROR, err, JSON.stringify(err));
        response.sendText(res, 404, 'Resource not found');
        return undefined;
      });
    return undefined;
  });
};
