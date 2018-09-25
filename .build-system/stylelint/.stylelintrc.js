const { Processor, Config } = require('./stylelintrc.const');

/** @exports */
module.exports = {
  processors: [Processor.STYLED_COMPONENTS],
  extends: [
    Config.RECOMMENDED,
    Config.STYLED_COMPONENTS,
  ],
};
