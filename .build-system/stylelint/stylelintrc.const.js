/** @type {string} */
const STYLELINT_PROCESSOR_STYLED_COMPONENTS = 'stylelint-processor-styled-components';

/** @enum {string} */
const Processor = {
  STYLED_COMPONENTS: STYLELINT_PROCESSOR_STYLED_COMPONENTS,
}

/** @type {string} */
const STYLELINT_CONFIG_RECOMMENDED = 'stylelint-config-recommended';

/** @type {string} */
const STYLELINT_CONFIG_STYLED_COMPONENTS = 'stylelint-config-styled-components';

/** @enum {string} */
const Config = {
  RECOMMENDED: STYLELINT_CONFIG_RECOMMENDED,
  STYLED_COMPONENTS: STYLELINT_CONFIG_STYLED_COMPONENTS,
}

/** @exports */
module.exports = {
  Processor,
  Config,
};
