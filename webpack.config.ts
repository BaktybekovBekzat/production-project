import path from 'path'
import { Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { IBuildEnv, IBuildPaths } from './config/build/types'

export default (env: IBuildEnv) => {
	const paths: IBuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const mode = env.mode || 'development'
	const isDev = mode === 'development'
	const PORT = env.port || 3000
	const apiUrl = env.apiUrl || 'http://localhost:8000'

	const config: Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		apiUrl,
	})

	return config
}
