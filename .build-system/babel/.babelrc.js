const { Plugin } = require('./plugin.const');
const { Preset } = require('./preset.const');

/** @exports */
module.exports = {
  presets: [
    [
      Preset.ENV,
      {
        targets: {
          esmodules: true,
        },
        modules: false,
      },
    ],
    Preset.REACT,
  ],
  plugins: [
    Plugin.CLASS_PROPERTIES,
    [Plugin.STYLED_COMPONENTS, {
      ssr: false,
      fileName: false,
    }],
  ],
};
