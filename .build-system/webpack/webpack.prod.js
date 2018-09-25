const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = require('./webpack.config.js');

const { projectPath } = require('./config');
const { Env, OutputFilename } = require('./const');

module.exports = merge(commonConfig, {
	mode: Env.PRODUCTION,
	output: {
		filename: OutputFilename.CHUNKHASH,
	},
	plugins: [
		new CleanWebpackPlugin(
			[projectPath.build], 
			{ 
				root: projectPath.root, 
				verbose: false,
			},
		),
		new CopyWebpackPlugin([], {}),
	],
});