const typography = require("@tailwindcss/typography")
const forms = require("@tailwindcss/forms")
const fluidTypography = require('tailwindcss-fluid-type')

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	corePlugins: {
		fontSize: false,
	},

	theme: {
		fontFamily: {
			sans: ['Roboto Flex', 'system-ui', 'sans-serif'],
			headline: ['Archivo', 'system-ui', 'sans-serif'],
			handwriting: ['Patrick Hand', 'system-ui', 'sans-serif'],
		},
		extend: {
			transitionProperty: {
				'default-plus-var-font': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, font-variation-settings',
				'var-font': 'font-variation-settings, color',
			}
		},
	},

	darkMode: 'class',

	plugins: [
		require('tailwind-scrollbar-hide'),
		fluidTypography({
			settings: {
				fontSizeMin: 1.125,
				fontSizeMax: 1.25,
				ratioMin: 1.125,
				ratioMax: 1.2,
				screenMin: 20,
				screenMax: 96,
				unit: 'rem',
				prefix: '',
			},
			values: {
				'base': [0, 1.1],
				'prose': [0, 1.5],
				'10xl': ['9rem', 0.85],
				'11xl': ['10rem', 0.85],
				'12xl': ['11rem', 0.85],
				'13xl': ['12rem', 0.85],
				'14xl': ['13rem', 0.85],
				'15xl': ['14rem', 0.85],
				'16xl': ['15rem', 0.85],
				'17xl': ['16rem', 0.85],
				'18xl': ['17rem', 0.85],
				'19xl': ['18rem', 0.85],
				'20xl': ['19rem', 0.85],
			}
		}),
		forms,
		typography,
	],
}

module.exports = config
