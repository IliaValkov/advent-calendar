const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/code/main.tsx",

	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},

	module: {
		rules: [
			{
				test: /\.(png|svg|jpg)$/,
				use : { loader : "url-loader", options : { limit : 65536, esModule : false, } }
			  },
			{
				test: /\.html$/,
				use: { loader: "html-loader" },
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.(mov|mp4)$/,
				use: [
					{
					loader: 'file-loader',
					options: {
							name: '[name].[ext]'
						}  
					}
				]
			}
		],
	},

	plugins: [new HtmlWebPackPlugin({ template: "./src/index.html", filename: "./index.html" })],

	performance: { hints: false },
	watch: false,
	devtool: "source-map",
};