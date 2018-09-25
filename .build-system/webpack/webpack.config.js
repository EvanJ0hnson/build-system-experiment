const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Stylish = require('webpack-stylish');

const { projectPath } = require('./config');
const { INDEX_HTML, Loader, TestRegExp, Stats, Enforce } = require('./const');

module.exports = {
	entry: {
		app: projectPath.indexJs,
	},
	output: {
    path: projectPath.build,
  },
  stats: Stats.NONE,
	module: {
    rules: [
      {
        enforce: Enforce.PRE,
        test: TestRegExp.JS,
        exclude: TestRegExp.NODE_MODULES,
        loader: Loader.ESLINT,
        options: {
          fix: true,
        },
      },
      {
        enforce: Enforce.PRE,
        test: TestRegExp.JS,
        exclude: TestRegExp.NODE_MODULES,
        loader: Loader.STYLELINT_CUSTOM_PROCESSOR,
      },
      {
        test: TestRegExp.JS,
        exclude: TestRegExp.NODE_MODULES,
        use: [
          {
            loader: Loader.BABEL,
          },
        ],
			},
			{
        test: TestRegExp.HTML,
        exclude: TestRegExp.NODE_MODULES,
        use: [
          {
            loader: Loader.HTML,
          },
        ],
      },
    ],
  },
  plugins: [
    new Stylish(),
		new HtmlWebpackPlugin({
      template: projectPath.indexHtml,
      filename: INDEX_HTML,
    }),
		new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
};
