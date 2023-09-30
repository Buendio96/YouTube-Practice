const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}
	if (isProd) {
		config.minimizer = [
			new CssMinimizerPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config
};
const fileName = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`


module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		index: './js/index.js',
		page: './models/page.js',
	},
	output: {
		filename: fileName('js'),
		path: path.resolve(__dirname, 'dist'),
		clean: true
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
	optimization: optimization(),
	devServer: {
		port: 4200,
		hot: isDev,
	},
	//================================================PLUGINS=======
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd,
			}
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, 'src/favicon.ico'),
				to: path.resolve(__dirname, 'dist')
			}]
		}),
		new MiniCssExtractPlugin({
			filename: fileName('css'),
		})
	],
	//================================================MODULS=======
	module: {
		rules: [{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader'],
		}, {
			test: /\.less$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
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