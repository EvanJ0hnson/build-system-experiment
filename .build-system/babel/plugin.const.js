/** @type {string} */
const BABEL_PLUGIN_PROPOSAL_CLASS_PROPERTIES = '@babel/plugin-proposal-class-properties';

/** @type {string} */
const STYLED_COMPONENTS = 'styled-components';

/** @enum {string} */
const Plugin = {
  CLASS_PROPERTIES: BABEL_PLUGIN_PROPOSAL_CLASS_PROPERTIES,
  STYLED_COMPONENTS,
};

/** @exports */
module.exports = {
  Plugin,
};
