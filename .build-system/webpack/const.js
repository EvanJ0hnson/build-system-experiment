/** @type {string} */
const DIST = 'dist';
/** @type {string} */
const PUBLIC = 'public';
/** @type {string} */
const SRC = 'src';

/** @type {string} */
const UP = '..';

/** @type {string} */
const INDEX_HTML = 'index.html';
/** @type {string} */
const INDEX_JS = 'index.js'

/** @type {string} */
const CHEAP_MODULE_EVAL_SOURCE_MAP = 'cheap-module-eval-source-map';

const Devtool = {
  CHEAP_MODULE_EVAL_SOURCE_MAP,
}

/** @type {string} */
const DEVELOPMENT = 'development';

/** @type {string} */
const PRODUCTION = 'production';

/** @enum {string} */
const Env = {
  DEVELOPMENT, PRODUCTION,
}

/** @type {string} */
const BABEL_LOADER = 'babel-loader';
/** @type {string} */
const HTML_LOADER = 'html-loader';
/** @type {string} */
const ESLINT_LOADER = 'eslint-loader';
/** @type {string} */
const STYLELINT_CUSTOM_PROCESSOR_LOADER = 'stylelint-custom-processor-loader';

/** @enum {string} */
const Loader = {
  BABEL: BABEL_LOADER,
  HTML: HTML_LOADER,
  ESLINT: ESLINT_LOADER,
  STYLELINT_CUSTOM_PROCESSOR: STYLELINT_CUSTOM_PROCESSOR_LOADER,
}

/** @type {RegExp} */
const NODE_MODULES_REGEXP = /node_modules/;
/** @type {RegExp} */
const JS_REGEXP = /\.js$/;
/** @type {RegExp} */
const HTML_REGEXP = /\.html$/;

/** @enum {RegExp} */
const TestRegExp = {
  JS: JS_REGEXP,
  HTML: HTML_REGEXP,
  NODE_MODULES: NODE_MODULES_REGEXP,
}

/** @type {string} */
const RAW_NAME = '[name].js';
/** @type {string} */
const CHUNKHASH_NAME = '[chunkhash].js';

/** @enum {string} */
const OutputFilename = {
  RAW: RAW_NAME, CHUNKHASH: CHUNKHASH_NAME,
}

/** @type {string} */
const NONE = 'none';
/** @type {string} */
const ERROR = 'error';
/** @type {string} */
const WARNING = 'warning';
/** @type {string} */
const INFO = 'info';

/** @enum {string} */
const LogLevel = {
  NONE, ERROR, WARNING, INFO,
}

/** @enum {string} */
const Stats = {
  NONE, 
}

/** @type {string} */
const PRE = 'pre';

/** @enum {string} */
const Enforce = {
  PRE,
};

/** @exports */
module.exports = {
  DIST,
  PUBLIC,
  SRC,

  UP,

  INDEX_HTML,
  INDEX_JS,

  Env,
  Devtool,
  Loader,
  TestRegExp,
  OutputFilename,
  LogLevel,
  Stats,
  Enforce,
};
