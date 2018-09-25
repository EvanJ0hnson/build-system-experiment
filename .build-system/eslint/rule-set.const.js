/** @type {string} */
const ESLINT_RECOMMENDED = 'eslint:recommended';

/** @type {string} */
const PRETTIER_RECOMMENDED = 'plugin:prettier/recommended';

/** @type {string} */
const PRETTIER_REACT = 'prettier/react';

/** @type {string} */
const REACT_RECOMMENDED = 'plugin:react/recommended';

/** @enum {string} */
const RuleSet = {
  ESLINT_RECOMMENDED,
  REACT_RECOMMENDED,
  PRETTIER_RECOMMENDED,
  PRETTIER_REACT,
}

/** @exports */
module.exports = {
  RuleSet,
};
