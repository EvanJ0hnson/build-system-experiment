const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.config.js');

const { projectPath } = require('./config');
const { Env, Devtool, LogLevel, OutputFilename } = require('./const');

module.exports = merge(commonConfig, {
	mode: Env.DEVELOPMENT,
	output: {
		filename: OutputFilename.RAW,
	},
  devtool: Devtool.CHEAP_MODULE_EVAL_SOURCE_MAP,
  devServer: {
		contentBase: projectPath.public,
		watchContentBase: true,
		compress: true,
		https: true,
		hot: true,
		historyApiFallback: true,
		port: 3000,
		clientLogLevel: LogLevel.NONE,
		overlay: {
      warnings: false,
      errors: true,
		},
		noInfo: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
});