const path = require('path');

const { Env } = require('./const');

/**
 * @param  {...string}
 * @returns {string}
 */
const makePath = (...args) => path.resolve(__dirname, ...args);

/**
 * @param  {...string}
 * @returns {string}
 */
const makeRelativePath = (...args) => path.join(...args);

/**
 * @returns {string}
 */
const getEnv = () => process.env.NODE_ENV;

/**
 * @returns {boolean}
 */
const isDev = () => getEnv() === Env.DEVELOPMENT;

module.exports = {
  makePath,
  makeRelativePath,
  getEnv,
  isDev,
};
