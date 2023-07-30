export type BuildNode = 'development' | 'production'

export interface IBuildPaths {
    entry: string
    build: string
    html: string
}

export interface IBuildEnv {
    mode: BuildNode
    port: number
}

export interface IBuildOptions {
	mode: BuildNode
    paths: IBuildPaths
    isDev: boolean
    port: number
}
