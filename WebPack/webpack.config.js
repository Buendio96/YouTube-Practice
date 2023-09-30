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
	target: 'web',
	mode: 'development',
	entry: {
		index: './index.js',
		page: './models/page.js',
	},
	output: {
		filename: fileName('js'),
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	resolve: {
		extensions: [
			'.js', '.json', '.css', '.jpg', 'scss'
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
			test: /\.s[ac]ss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
		}, {
			test: /\.(png|jpg|svg|gif)$/,
			type: 'asset/resource'
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
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