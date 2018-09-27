const { Parser } = require('./parser.const');
const { RuleState } = require('./rule-state.const');
const { Rule, PRT } = require('./rule.const');
const { RuleSet } = require('./rule-set.const');

const prettierrc = require('../prettierrc');

/**
 * @desc 
 * Alias for Rule.PRETTIER since ESLint doesn't allow to use it for some reason
 * @type {string}
 */
const RULE_PRETTIER = 'prettier/prettier';

/**
 * @todo
 * - eslint-plugin-import
 * - eslint-plugin-jsx-a11y
 * - Go through the list of ELSint rules (https://eslint.org/docs/rules)
 */

/** @type {string} */
const REACT_VERSION = '16.5.0';

/** @exports */
module.exports = {
  extends: [
    RuleSet.ESLINT_RECOMMENDED,
    RuleSet.REACT_RECOMMENDED,
    RuleSet.PRETTIER_RECOMMENDED,
    RuleSet.PRETTIER_REACT,
  ],
  parser: Parser.BABEL_ESLINT,
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    /** @desc For Ruleset.REACT_RECOMMENDED */
    react: {
      version: REACT_VERSION,
    },
  },
  rules: {
    /** Prettier */
    [RULE_PRETTIER]: [RuleState.ERROR, prettierrc],

    /** Override */
    [Rule.NO_CONSOLE]: RuleState.WARN,
    [Rule.NO_UNUSED_VARS]: RuleState.WARN,

    /** Custom */
    [Rule.VALID_JSDOC]: [RuleState.WARN, {
      requireReturnDescription: false,
      requireParamDescription: false,
      requireReturn: false,
      preferType: {
        object: 'Object',
        array: 'Array',
      },
      prefer: {
        return: 'returns',
      },
    }],
    [Rule.EQEQEQ]: RuleState.ERROR,
  },
  globals: {
    module: true,
  },
};
