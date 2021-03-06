'use strict';

const logger = require('./logger');

const storage = module.exports = {};
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });


storage.create = function create(schema, item) {
  if (!schema) return Promise.reject(new Error('Cannot create a new item, schema required'));
  if (!item) return Promise.reject(new Error('Cannot create a new item, item required'));
  const json = JSON.stringify(item);
  return fs.writeFileProm(`${__dirname}/../data/${schema}/${item.id}.json`, json)
    .then(() => {
      logger.log(logger.INFO, 'STORAGE: Created a new resource');
      return item;
    })
    .catch(err => Promise.reject(err));
};

storage.fetchOne = function fetchOne(schema, id) {
  if (!schema) return Promise.reject(new Error('expected schema name'));
  if (!id) return Promise.reject(new Error('expected id'));
  return fs.readFileProm(`${__dirname}/../data${schema}/${id}.json`)
    .then((data) => {
      try {
        const item = JSON.parse(data.toString());
        return item;
      } catch (err) {
        return Promise.reject(err);
      }
    })
    .catch((err) => {
      logger.log(logger.ERROR, JSON.stringify(err));
    });
}

storage.fetchAll = function fetchAll(schema) {
  if (!schema) return Promise.reject(new Error('expected schema name'));
  return fs.readFileProm(`${__dirname}/../data${schema}`)
    .then((data) => {
      try {
        const allSchema = JSON.parse(data.toString());
        return allSchema;
      } catch (err) {
        return Promise.reject(err);
      }
    })
    .catch((err) => {
      logger.log(logger.ERROR, JSON.stringify(err));
    });
};

storage.update = function update(schema, item, id) {
  if (!schema) return Promise.reject(new Error('Cannot UPDATE a new item, schema required'));
  if (!item) return Promise.reject(new Error('Cannot UPDATE a new item, item required'));
  if (!id) return Promise.reject(new Error('expected id'));
  const json = JSON.stringify(item);
  return fs.writeFileProm(`${__dirname}/../data/${schema}/${id}.json`, json)
    .then(() => {
      logger.log(logger.INFO, 'STORAGE: UPDATING resource');
      return item;
    })
    .catch(err => Promise.reject(err));
};

storage.delete = function del(schema, id) {
  if (!schema) return Promise.reject(new Error('expected schema name'));
  if (!id) return Promise.reject(new Error('expected id'));
  return fs.readFileProm(`${__dirname}/../data${schema}/${id}.json`)
    .then((data) => {
      try {
        const item = JSON.parse(data.toString());
        return item;
      } catch (err) {
        return Promise.reject(err);
      }
    })
    .catch((err) => {
      logger.log(logger.ERROR, JSON.stringify(err));
    });
};
