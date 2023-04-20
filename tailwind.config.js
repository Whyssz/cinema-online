/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#bf3335',
			gray: {
				DEFAULT: '#282828',
				500: '#1d1d1d',
			},
			black: '#030207',
			white: colors.white,
			red: colors.red['500'],
			transparent: colors.transparent,
		},
		extend: {
			zIndex: {
				1: '1',
			},
		},
	},
	plugins: [],
};
