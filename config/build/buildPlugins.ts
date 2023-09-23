import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins(options: IBuildOptions): WebpackPluginInstance[] {
	const plugins = [
		new ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: options.paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new DefinePlugin({
			__IS_DEV__: options.isDev,
		}),
	]

	if (options.isDev) {
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			})
		)
	}

	return plugins
}
