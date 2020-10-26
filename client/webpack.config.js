const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, '/public'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		compress: true,
		liveReload: true,
		publicPath: '/',
		port: 3296,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		})
	]
};
