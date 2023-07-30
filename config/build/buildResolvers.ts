import { ResolveOptions } from 'webpack'
import { IBuildOptions } from './types'

export function buildResolvers(options: IBuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	}
}
