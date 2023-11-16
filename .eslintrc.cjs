module.exports = {
	root: true,
	extends: ['eslint:recommended'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'indent': ['error', 'tab'],
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'spaced-comment': ['error', 'always'],
		'max-len': ['error', { 'code': 120 }]
	}
}
