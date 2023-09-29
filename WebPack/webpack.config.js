const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		index: './js/index.js',
		page: './models/page.js',
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: [
			'.js', '.json', '.css', '.jpg'
		],
		alias: {
			'@models': path.resolve(__dirname, 'src/models'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@': path.resolve(__dirname, 'src')
		},
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, 'src/favicon.ico'),
				to: path.resolve(__dirname, 'dist')
			}]
		})
	],
	devServer: {
		port: 4200,
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		}, {
			test: /\.(png|jpg|svg|gif)$/,
			type: 'asset/resource'
		}, {
			test: /\.(ttf|woff|sowff2|eot)$/,
			type: 'asset/resource'
		}, {
			test: /\.xml$/,
			use: 'xml-loader',
		}, {
			test: /\.csv$/,
			use: 'csv-loader',
		}]
	}
};