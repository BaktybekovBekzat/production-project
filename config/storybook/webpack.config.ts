import path from 'path'
import { IBuildPaths } from '../build/types/index'
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack'

export default ({ config }: { config: Configuration }) => {
	const paths: IBuildPaths = {
		build: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) =>
							Boolean(resPath.includes('.module.')),
						localIdentName:
							'[path][name]__[local]--[hash:base64:5]',
					},
				},
			},
			'sass-loader',
		],
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')
	if (config.module?.rules) {
		config.module.rules = config.module.rules.map(
			(rule: RuleSetRule | '...') => {
				if (
					typeof rule !== 'string' &&
					/svg/.test(rule.test as string)
				) {
					return {
						...rule,
						exclude: /\.svg/,
					}
				}

				return rule
			}
		)
	}

	config.module?.rules?.push(svgLoader)
	config.module?.rules?.push(cssLoader)

	config?.plugins?.push(
		new DefinePlugin({
			__IS_DEV__: true,
			__API__: '',
		})
	)

	return config
}
