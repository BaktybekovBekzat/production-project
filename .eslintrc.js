module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'react-hooks'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/no-unused-vars': 1,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/display-name': 'off',
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
	},
}
