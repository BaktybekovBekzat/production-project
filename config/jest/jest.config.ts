import path from 'path'

export default {
	clearMocks: true,
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleDirectories: ['node_modules'],
	modulePaths: ['<rootDir>src'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	rootDir: '../../',
	testEnvironment: 'jsdom',
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
	moduleNameMapper: {
		'\\.(s?css)$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
	},
	globals: {
		__IS_DEV__: true,
	},
}
